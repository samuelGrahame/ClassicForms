using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class SerObjectInfoInit
    {
        // Fields
        internal int objectInfoIdCount = 1;
        internal SerStack oiPool = new SerStack("SerObjectInfo Pool");
        internal Dictionary<object, object> seenBeforeTable = new Dictionary<object, object>();
    }
}
