using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    [Serializable]
    internal enum InternalObjectPositionE
    {
        Empty,
        Top,
        Child,
        Headers
    }
}
