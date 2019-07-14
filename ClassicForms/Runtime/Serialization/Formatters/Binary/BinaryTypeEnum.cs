using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal enum BinaryTypeEnum
    {
        Primitive,
        String,
        Object,
        ObjectUrt,
        ObjectUser,
        ObjectArray,
        StringArray,
        PrimitiveArray
    }
}
