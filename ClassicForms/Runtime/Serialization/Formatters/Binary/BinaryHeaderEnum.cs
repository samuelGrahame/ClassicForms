using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal enum BinaryHeaderEnum
    {
        SerializedStreamHeader,
        Object,
        ObjectWithMap,
        ObjectWithMapAssemId,
        ObjectWithMapTyped,
        ObjectWithMapTypedAssemId,
        ObjectString,
        Array,
        MemberPrimitiveTyped,
        MemberReference,
        ObjectNull,
        MessageEnd,
        Assembly,
        ObjectNullMultiple256,
        ObjectNullMultiple,
        ArraySinglePrimitive,
        ArraySingleObject,
        ArraySingleString,
        CrossAppDomainMap,
        CrossAppDomainString,
        CrossAppDomainAssembly,
        MethodCall,
        MethodReturn
    }





}
