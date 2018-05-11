namespace System
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Runtime.InteropServices;

    public abstract class StringComparer : IComparer, IEqualityComparer, IComparer<string>, IEqualityComparer<string>
    {
        //private static readonly StringComparer _invariantCulture = new CultureAwareComparer(CultureInfo.InvariantCulture, false);
        //private static readonly StringComparer _invariantCultureIgnoreCase = new CultureAwareComparer(CultureInfo.InvariantCulture, true);
        private static readonly StringComparer _ordinal = new OrdinalComparer(false);
        private static readonly StringComparer _ordinalIgnoreCase = new OrdinalComparer(true);

        protected StringComparer()
        {
        }

        public int Compare(object x, object y)
        {
            if (x == y)
            {
                return 0;
            }
            if (x == null)
            {
                return -1;
            }
            if (y == null)
            {
                return 1;
            }
            string str = x as string;
            if (str != null)
            {
                string str2 = y as string;
                if (str2 != null)
                {
                    return this.Compare(str, str2);
                }
            }
            IComparable comparable = x as IComparable;
            if (comparable == null)
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_ImplementIComparable"));
            }
            return comparable.CompareTo(y);
        }

        
        public abstract int Compare(string x, string y);
        
        public static StringComparer Create(CultureInfo culture, bool ignoreCase)
        {
            if (culture == null)
            {
                throw new ArgumentNullException("culture");
            }
            throw new NotImplementedException();
            //return new CultureAwareComparer(culture, ignoreCase);
        }

        public new bool Equals(object x, object y)
        {
            if (x == y)
            {
                return true;
            }
            if ((x == null) || (y == null))
            {
                return false;
            }
            string str = x as string;
            if (str != null)
            {
                string str2 = y as string;
                if (str2 != null)
                {
                    return this.Equals(str, str2);
                }
            }
            return x.Equals(y);
        }

        
        public abstract bool Equals(string x, string y);
        public int GetHashCode(object obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }
            string str = obj as string;
            if (str != null)
            {
                return this.GetHashCode(str);
            }
            return obj.GetHashCode();
        }

        
        public abstract int GetHashCode(string obj);

        
        //public static StringComparer CurrentCulture =>
        //    new CultureAwareComparer(CultureInfo.CurrentCulture, false);
                
        //public static StringComparer CurrentCultureIgnoreCase =>
        //    new CultureAwareComparer(CultureInfo.CurrentCulture, true);

        public static StringComparer InvariantCulture =>
            null;

        public static StringComparer InvariantCultureIgnoreCase =>
            null;

        
        public static StringComparer Ordinal =>
            _ordinal;

        
        public static StringComparer OrdinalIgnoreCase =>
            _ordinalIgnoreCase;
    }
}
