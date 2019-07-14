using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    public sealed class SerializationInfoEnumeratorV2 : IEnumerator
    {
        // Fields
        private bool m_current;
        private int m_currItem;
        private object[] m_data;
        private string[] m_members;
        private int m_numItems;
        private Type[] m_types;

        // Methods
        internal SerializationInfoEnumeratorV2(string[] members, object[] info, Type[] types, int numItems)
        {
            this.m_members = members;
            this.m_data = info;
            this.m_types = types;
            this.m_numItems = numItems - 1;
            this.m_currItem = -1;
            this.m_current = false;
        }

        public bool MoveNext()
        {
            if (this.m_currItem < this.m_numItems)
            {
                this.m_currItem++;
                this.m_current = true;
            }
            else
            {
                this.m_current = false;
            }
            return this.m_current;
        }

        public void Reset()
        {
            this.m_currItem = -1;
            this.m_current = false;
        }

        // Properties
        public SerializationEntryV2 Current
        {
            get
            {
                if (!this.m_current)
                {
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumOpCantHappen"));
                }
                return new SerializationEntryV2(this.m_members[this.m_currItem], this.m_data[this.m_currItem], this.m_types[this.m_currItem]);
            }
        }

        public string Name
        {
            get
            {
                if (!this.m_current)
                {
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumOpCantHappen"));
                }
                return this.m_members[this.m_currItem];
            }
        }

        public Type ObjectType
        {
            get
            {
                if (!this.m_current)
                {
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumOpCantHappen"));
                }
                return this.m_types[this.m_currItem];
            }
        }

        object IEnumerator.Current
        {
            get
            {
                if (!this.m_current)
                {
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumOpCantHappen"));
                }
                return new SerializationEntryV2(this.m_members[this.m_currItem], this.m_data[this.m_currItem], this.m_types[this.m_currItem]);
            }
        }

        public object Value
        {
            get
            {
                if (!this.m_current)
                {
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumOpCantHappen"));
                }
                return this.m_data[this.m_currItem];
            }
        }
    }
}
