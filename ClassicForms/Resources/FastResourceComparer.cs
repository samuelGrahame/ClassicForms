using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Resources
{
    internal sealed class FastResourceComparer : IComparer<string>, IEqualityComparer<string>
    {
        // Fields
        internal static readonly FastResourceComparer Default = new FastResourceComparer();

        // Methods
        public int Compare(object a, object b)
        {
            if (a == b)
            {
                return 0;
            }
            string strA = (string)a;
            string strB = (string)b;
            return string.Compare(strA, strB);
        }

        public int Compare(string a, string b) =>
            string.Compare(a, b);

        
        public static int CompareOrdinal(string a, byte[] bytes, int bCharLength)
        {
            return Encoding.ASCII.GetString(bytes).CompareOrdinal(a);
            //int num = 0;
            //int num2 = 0;
            //int length = a.Length;
            //if (length > bCharLength)
            //{
            //    length = bCharLength;
            //}
            //if (bCharLength == 0)
            //{
            //    if (a.Length != 0)
            //    {
            //        return -1;
            //    }
            //    return 0;
            //}
            //for (int numPtr = 0; (num < length) && (num2 == 0); numPtr += 2)
            //{
            //    int num4 = bytes[0] | (bytes[1] << 8);
            //    num2 = a[num++] - num4;
            //}
            ////fixed (byte* numRef = bytes)
            ////{
            ////    for (byte* numPtr = numRef; (num < length) && (num2 == 0); numPtr += 2)
            ////    {
            ////        int num4 = numPtr[0] | (numPtr[1] << 8);
            ////        num2 = a[num++] - num4;
            ////    }
            ////}
            //if (num2 != 0)
            //{
            //    return num2;
            //}
            //return (a.Length - bCharLength);
        }

        public static int CompareOrdinal(byte[] bytes, int aCharLength, string b) =>
            -CompareOrdinal(b, bytes, aCharLength);

        //internal static int CompareOrdinal(byte[] a, int byteLen, string b)
        //{
        //    int num = 0;
        //    int num2 = 0;
        //    int length = byteLen >> 1;
        //    if (length > b.Length)
        //    {
        //        length = b.Length;
        //    }

        //    var i = 0;

        //    while ((num2 < length) && (num == 0))
        //    {
        //        char ch = (char)(a[i++] | (a[i++] << 8));
        //        num = ch - b[num2++];
        //    }
        //    if (num != 0)
        //    {
        //        return num;
        //    }
        //    return (byteLen - (b.Length * 2));
        //}

        public new bool Equals(object a, object b)
        {
            if (a == b)
            {
                return true;
            }
            string str = (string)a;
            string str2 = (string)b;
            return string.Equals(str, str2);
        }

        public bool Equals(string a, string b) =>
            string.Equals(a, b);

        public int GetHashCode(object key)
        {
            string str = (string)key;
            return HashFunction(str);
        }

        public int GetHashCode(string key) =>
            HashFunction(key);

        internal static int HashFunction(string key)
        {
            uint num = 0x1505;
            for (int i = 0; i < key.Length; i++)
            {
                num = ((num << 5) + num) ^ key[i];
            }
            return (int)num;
        }
    }
}
