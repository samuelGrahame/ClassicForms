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

        public static int GetBitCount(uint x)
        {
            int num = 0;
            while (x > 0)
            {
                x &= x - 1;
                num++;
            }
            return num;
        }

        public static bool IsEnumValid(Enum enumValue, int value, int minValue, int maxValue, int maxNumberOfBitsOn) =>
    (((value >= minValue) && (value <= maxValue)) && (GetBitCount((uint)value) <= maxNumberOfBitsOn));



    }
}
