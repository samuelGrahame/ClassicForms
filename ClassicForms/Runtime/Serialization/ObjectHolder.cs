using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    internal sealed class ObjectHolder
    {
        // Fields
        internal const int HAS_ISERIALIZABLE = 2;
        internal const int HAS_SURROGATE = 4;
        internal const int INCOMPLETE_OBJECT_REFERENCE = 1;
        internal LongList m_dependentObjects;
        internal int m_flags;
        internal long m_id;
        private bool m_markForFixupWhenAvailable;
        private int m_missingDecendents;
        internal FixupHolderList m_missingElements;
        private int m_missingElementsRemaining;
        internal ObjectHolder m_next;
        private object m_object;
        private bool m_reachable;
        internal SerializationInfo m_serInfo;
        internal ISerializationSurrogate m_surrogate;
        private TypeLoadExceptionHolder m_typeLoad;
        private ValueTypeFixupInfo m_valueFixup;
        internal const int REQUIRES_DELAYED_FIXUP = 7;
        internal const int REQUIRES_VALUETYPE_FIXUP = 8;
        internal const int SER_INFO_FIXED = 0x4000;
        internal const int VALUETYPE_FIXUP_PERFORMED = 0x8000;

        // Methods
        internal ObjectHolder(long objID) : this((string)null, objID, null, null, 0L, null, null)
        {
        }

        internal ObjectHolder(object obj, long objID, SerializationInfo info, ISerializationSurrogate surrogate, long idOfContainingObj, FieldInfo field, int[] arrayIndex)
        {
            this.m_object = obj;
            this.m_id = objID;
            this.m_flags = 0;
            this.m_missingElementsRemaining = 0;
            this.m_missingDecendents = 0;
            this.m_dependentObjects = null;
            this.m_next = null;
            this.m_serInfo = info;
            this.m_surrogate = surrogate;
            this.m_markForFixupWhenAvailable = false;
            if (obj is TypeLoadExceptionHolder)
            {
                this.m_typeLoad = (TypeLoadExceptionHolder)obj;
            }
            if ((idOfContainingObj != 0) && (((field != null) && field.FieldType.IsValueType) || (arrayIndex != null)))
            {
                if (idOfContainingObj == objID)
                {
                    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_ParentChildIdentical"));
                }
                this.m_valueFixup = new ValueTypeFixupInfo(idOfContainingObj, field, arrayIndex);
            }
            this.SetFlags();
        }

        internal ObjectHolder(string obj, long objID, SerializationInfo info, ISerializationSurrogate surrogate, long idOfContainingObj, FieldInfo field, int[] arrayIndex)
        {
            this.m_object = obj;
            this.m_id = objID;
            this.m_flags = 0;
            this.m_missingElementsRemaining = 0;
            this.m_missingDecendents = 0;
            this.m_dependentObjects = null;
            this.m_next = null;
            this.m_serInfo = info;
            this.m_surrogate = surrogate;
            this.m_markForFixupWhenAvailable = false;
            if ((idOfContainingObj != 0) && (arrayIndex != null))
            {
                this.m_valueFixup = new ValueTypeFixupInfo(idOfContainingObj, field, arrayIndex);
            }
            if (this.m_valueFixup != null)
            {
                this.m_flags |= 8;
            }
        }

        internal void AddDependency(long dependentObject)
        {
            if (this.m_dependentObjects == null)
            {
                this.m_dependentObjects = new LongList();
            }
            this.m_dependentObjects.Add(dependentObject);
        }

        internal void AddFixup(FixupHolder fixup, ObjectManager manager)
        {
            if (this.m_missingElements == null)
            {
                this.m_missingElements = new FixupHolderList();
            }
            this.m_missingElements.Add(fixup);
            this.m_missingElementsRemaining++;
            if (this.RequiresValueTypeFixup)
            {
                this.UpdateDescendentDependencyChain(1, manager);
            }
        }

        internal void DecrementFixupsRemaining(ObjectManager manager)
        {
            this.m_missingElementsRemaining--;
            if (this.RequiresValueTypeFixup)
            {
                this.UpdateDescendentDependencyChain(-1, manager);
            }
        }

        private void IncrementDescendentFixups(int amount)
        {
            this.m_missingDecendents += amount;
        }

        internal void MarkForCompletionWhenAvailable()
        {
            this.m_markForFixupWhenAvailable = true;
        }

        internal void RemoveDependency(long id)
        {
            this.m_dependentObjects.RemoveElement(id);
        }

        internal void SetFlags()
        {
            if (this.m_object is IObjectReference)
            {
                this.m_flags |= 1;
            }
            this.m_flags &= -7;
            if (this.m_surrogate != null)
            {
                this.m_flags |= 4;
            }
            else if (this.m_object is ISerializable)
            {
                this.m_flags |= 2;
            }
            if (this.m_valueFixup != null)
            {
                this.m_flags |= 8;
            }
        }

        
        internal void SetObjectValue(object obj, ObjectManager manager)
        {
            this.m_object = obj;
            if (obj == manager.TopObject)
            {
                this.m_reachable = true;
            }
            if (obj is TypeLoadExceptionHolder)
            {
                this.m_typeLoad = (TypeLoadExceptionHolder)obj;
            }
            if (this.m_markForFixupWhenAvailable)
            {
                manager.CompleteObject(this, true);
            }
        }

        
        internal void UpdateData(object obj, SerializationInfo info, ISerializationSurrogate surrogate, long idOfContainer, FieldInfo field, int[] arrayIndex, ObjectManager manager)
        {
            this.SetObjectValue(obj, manager);
            this.m_serInfo = info;
            this.m_surrogate = surrogate;
            if ((idOfContainer != 0) && (((field != null) && field.FieldType.IsValueType) || (arrayIndex != null)))
            {
                if (idOfContainer == this.m_id)
                {
                    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_ParentChildIdentical"));
                }
                this.m_valueFixup = new ValueTypeFixupInfo(idOfContainer, field, arrayIndex);
            }
            this.SetFlags();
            if (this.RequiresValueTypeFixup)
            {
                this.UpdateDescendentDependencyChain(this.m_missingElementsRemaining, manager);
            }
        }

        private void UpdateDescendentDependencyChain(int amount, ObjectManager manager)
        {
            ObjectHolder holder = this;
            do
            {
                manager.FindOrCreateObjectHolder(holder.ContainerID).IncrementDescendentFixups(amount);
            }
            while (holder.RequiresValueTypeFixup);
        }

        // Properties
        internal bool CanObjectValueChange =>
            (this.IsIncompleteObjectReference || (this.HasSurrogate && this.CanSurrogatedObjectValueChange));

        internal bool CanSurrogatedObjectValueChange
        {
            get
            {
                if (this.m_surrogate != null)
                {
                    return false; //TODO: return (this.m_surrogate.GetType() != typeof(SurrogateForCyclicalReference));
                }
                return true;
            }
        }

        internal bool CompletelyFixed =>
            (!this.RequiresSerInfoFixup && !this.IsIncompleteObjectReference);

        internal long ContainerID
        {
            get
            {
                if (this.m_valueFixup != null)
                {
                    return this.m_valueFixup.ContainerID;
                }
                return 0L;
            }
        }

        internal LongList DependentObjects
        {
            get =>
                this.m_dependentObjects;
            set => this.m_dependentObjects = value;
        }

        internal int DirectlyDependentObjects =>
            this.m_missingElementsRemaining;

        internal bool HasISerializable =>
            ((this.m_flags & 2) > 0);

        internal bool HasSurrogate =>
            ((this.m_flags & 4) > 0);

        internal bool IsIncompleteObjectReference
        {
            get =>
                ((this.m_flags & 1) > 0);
            set
            {
                if (value)
                {
                    this.m_flags |= 1;
                }
                else
                {
                    this.m_flags &= -2;
                }
            }
        }

        internal object ObjectValue =>
            this.m_object;

        internal bool Reachable
        {
            get =>
                this.m_reachable;
            set => this.m_reachable = value;
        }

        internal bool RequiresDelayedFixup =>
            ((this.m_flags & 7) > 0);

        internal bool RequiresSerInfoFixup
        {
            get
            {
                if (((this.m_flags & 4) == 0) && ((this.m_flags & 2) == 0))
                {
                    return false;
                }
                return ((this.m_flags & 0x4000) == 0);
            }
            set
            {
                if (!value)
                {
                    this.m_flags |= 0x4000;
                }
                else
                {
                    this.m_flags &= -16385;
                }
            }
        }

        internal bool RequiresValueTypeFixup =>
            ((this.m_flags & 8) > 0);

        internal SerializationInfo SerializationInfo
        {
            get =>
                this.m_serInfo;
            set =>
                this.m_serInfo = value;
        }

        internal ISerializationSurrogate Surrogate =>
            this.m_surrogate;

        internal int TotalDependentObjects =>
            (this.m_missingElementsRemaining + this.m_missingDecendents);

        internal TypeLoadExceptionHolder TypeLoadException
        {
            get =>
                this.m_typeLoad;
            set => this.m_typeLoad = value;
        }

        internal bool TypeLoadExceptionReachable =>
            this.m_typeLoad != null;

        internal ValueTypeFixupInfo ValueFixup =>
            this.m_valueFixup;

        internal bool ValueTypeFixupPerformed
        {
            get
            {
                if ((this.m_flags & 0x8000) == 0)
                {
                    if (this.m_object == null)
                    {
                        return false;
                    }
                    if (this.m_dependentObjects != null)
                    {
                        return (this.m_dependentObjects.Count == 0);
                    }
                }
                return true;
            }
            set
            {
                if (value)
                {
                    this.m_flags |= 0x8000;
                }
            }
        }
    }
}
