using System.Drawing;
using System.Globalization;

namespace System.Windows.Forms
{    
    internal sealed class WindowsFormsUtils
    {

        public static int RotateLeft(int value, int nBits)
        {
            nBits = nBits % 0x20;
            return ((value << nBits) | (value >> (0x20 - nBits)));
        }

        public static class EnumValidator
        {
            public static bool IsEnumWithinShiftedRange(Enum enumValue, int numBitsToShift, int minValAfterShift, int maxValAfterShift)
            {
                int num = Convert.ToInt32(enumValue, CultureInfo.InvariantCulture);
                int num2 = num >> numBitsToShift;
                if ((num2 << numBitsToShift) != num)
                {
                    return false;
                }
                return ((num2 >= minValAfterShift) && (num2 <= maxValAfterShift));
            }

            public static bool IsValidArrowDirection(ArrowDirection direction)
            {
                if (direction <= ArrowDirection.Up)
                {
                    if ((direction == ArrowDirection.Left) || (direction == ArrowDirection.Up))
                    {
                        goto Label_0017;
                    }
                    goto Label_0019;
                }
                if ((direction != ArrowDirection.Right) && (direction != ArrowDirection.Down))
                {
                    goto Label_0019;
                }
                Label_0017:
                return true;
                Label_0019:
                return false;
            }

            public static bool IsValidContentAlignment(ContentAlignment contentAlign)
            {
                if (ClientUtils.GetBitCount((uint)contentAlign) != 1)
                {
                    return false;
                }
                int num = 0x777;
                return ((num & (uint)contentAlign) > 0);
            }

            public static bool IsValidTextImageRelation(TextImageRelation relation) =>
                ClientUtils.IsEnumValid(relation, (int)relation, 0, 8, 1);
        }

    }
}
