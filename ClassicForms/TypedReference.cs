using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace System
{
    public struct TypedReference
    {
        private int Value;
        private int Type;

        //public static unsafe TypedReference MakeTypedReference(object target, FieldInfo[] flds)
        //{
        //    if (target == null)
        //    {
        //        throw new ArgumentNullException("target");
        //    }
        //    if (flds == null)
        //    {
        //        throw new ArgumentNullException("flds");
        //    }
        //    if (flds.Length == 0)
        //    {
        //        throw new ArgumentException(EnvironmentV2.GetResourceString("Arg_ArrayZeroError"));
        //    }
        //    IntPtr[] ptrArray = new IntPtr[flds.Length];
        //    Type lastFieldType = target.GetType();
        //    for (int i = 0; i < flds.Length; i++)
        //    {
        //        FieldInfo info = flds[i];// as RuntimeFieldInfo;
        //        if (info == null)
        //        {
        //            throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_MustBeRuntimeFieldInfo"));
        //        }
        //        if (info.IsInitOnly || info.IsStatic)
        //        {
        //            throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_TypedReferenceInvalidField"));
        //        }
        //        //TODO
        //        //if ((lastFieldType != info.GetDeclaringTypeInternal()) && !lastFieldType.IsSubclassOf(info.GetDeclaringTypeInternal()))
        //        //{
        //        //    throw new MissingMemberException(EnvironmentV2.GetResourceString("MissingMemberTypeRef"));
        //        //}
        //        //RuntimeType fieldType = (RuntimeType)info.FieldType;
        //        //if (info.IsPrimitive)
        //        //{
        //        //    throw new ArgumentException(EnvironmentV2.GetResourceString("Arg_TypeRefPrimitve"));
        //        //}
        //        if ((i < (flds.Length - 1))) //  && !info.IsValueType
        //        {
        //            throw new Exception(EnvironmentV2.GetResourceString("MissingMemberNestErr"));
        //        }
        //        ptrArray[i] = info.FieldHandle.Value;
        //        lastFieldType = fieldType;
        //    }
        //    TypedReference reference = new TypedReference();
        //    InternalMakeTypedReference((void*)&reference, target, ptrArray, lastFieldType);
        //    return reference;
        //}

        //[MethodImpl(MethodImplOptions.InternalCall), SecurityCritical]
        //private static extern unsafe void InternalMakeTypedReference(void* result, object target, IntPtr[] flds, RuntimeType lastFieldType);
        //public override unsafe int GetHashCode()
        //{
        //    if (this.Type == IntPtr.Zero)
        //    {
        //        return 0;
        //    }
        //    return Type.GetTypeFromHandle(*((RuntimeTypeHandle*)this)).GetHashCode();
        //}

        //public override bool Equals(object o)
        //{
        //    throw new NotSupportedException(EnvironmentV2.GetResourceString("NotSupported_NYI"));
        //}

        //[SecuritySafeCritical]
        //public static unsafe object ToObject(TypedReference value) =>
        //    InternalToObject((void*)&value);

        //[MethodImpl(MethodImplOptions.InternalCall), SecurityCritical]
        //internal static extern unsafe object InternalToObject(void* value);
        //internal bool IsNull =>
        //    (this.Value.IsNull() && this.Type.IsNull());
        //public static Type GetTargetType(TypedReference value) =>
        //    Type.GetTypeFromHandle((RuntimeTypeHandle)value);

        //public static RuntimeTypeHandle TargetTypeToken(TypedReference value) =>
        //    Type.GetTypeFromHandle((RuntimeTypeHandle)value).TypeHandle;

        //[SecuritySafeCritical, CLSCompliant(false)]
        //public static unsafe void SetTypedReference(TypedReference target, object value)
        //{
        //    InternalSetTypedReference((void*)&target, value);
        //}

        //internal static extern unsafe void InternalSetTypedReference(void* target, object value);
    }

}
