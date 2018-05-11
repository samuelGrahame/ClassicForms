using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class ClientUtils
    {
        public static bool IsEnumValid(Enum enumValue, int value, int minValue, int maxValue) =>
    ((value >= minValue) && (value <= maxValue));

    }
}
