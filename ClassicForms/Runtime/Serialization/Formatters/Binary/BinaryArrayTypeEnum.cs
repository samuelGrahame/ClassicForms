using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal enum BinaryArrayTypeEnum
    {
        Single,
        Jagged,
        Rectangular,
        SingleOffset,
        JaggedOffset,
        RectangularOffset
    }
}
