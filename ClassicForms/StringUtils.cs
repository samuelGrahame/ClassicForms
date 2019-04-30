using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System
{
    public static class StringUtils
    {        
        public static int CompareOrdinal(this string strA, string strB)
        {            
            if (strA == strB)
            {
                return 0;
            }
            if (strA == null)
            {
                return -1;
            }
            if (strB == null)
            {
                return 1;
            }
            if ((strA.First() - strB.First()) != 0)
            {
                return (strA.First() - strB.First());
            }
            return CompareOrdinalHelper(strA, strB);
        }

        private static int CompareOrdinalHelper(string strA, string strB)
        {
            return string.Compare(strA, strB, false);
            //int num = Math.Min(strA.Length, strB.Length);
            //int num2 = -1;
            //char m_firstChar1 = strA[0];
            //char m_firstChar2 = strB[0];

            //int chPtr = 0;
            //int chPtr2 = 0;
            //while (num >= 10)
            //{
            //    if (strA[chPtr] != strB[chPtr2])
            //    {
            //        num2 = 0;
            //        break;
            //    }
            //    if (strA[chPtr + 1] != strB[chPtr2 + 1])
            //    {
            //        num2 = 2;
            //        break;
            //    }
            //    if (strA[chPtr + 2] != strB[chPtr2 + 2])
            //    {
            //        num2 = 4;
            //        break;
            //    }
            //    if (strA[chPtr + 3] != strB[chPtr2 + 3])
            //    {
            //        num2 = 6;
            //        break;
            //    }
            //    if (strA[chPtr + 4] != strB[chPtr2 + 4])
            //    {
            //        num2 = 8;
            //        break;
            //    }
            //    chPtr += 5;
            //    chPtr2 += 5;
            //    num -= 5;
            //}
            //if (num2 == -1)
            //{
            //    goto Label_0100;
            //}
            //chPtr += num2;
            //chPtr2 += num2;
            //int num3 = strA[0] - strB[0];
            //if (num3 != 0)
            //{
            //    return num3;
            //}
            //return (strA[1] - strB[1]);
            //Label_00E2:
            //if ((strA[0] != *(((int*)chPtr2)))
            //{
            //    goto Label_0104;
            //}
            //chPtr += 1;
            //chPtr2 += 1;
            //num -= 1;
            //Label_0100:
            //if (num > 0)
            //{
            //    goto Label_00E2;
            //}
            //Label_0104:
            //if (num <= 0)
            //{
            //    return (strA.Length - strB.Length);
            //}
            //int num4 = strA[0] - strB[0];
            //if (num4 != 0)
            //{
            //    return num4;
            //}
            //return (strA[1] - strB[1]);
        }

    }
}
