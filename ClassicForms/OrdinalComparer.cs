namespace System
{
    using System.Collections;
    using System.Globalization;

    [Serializable]
    internal sealed class OrdinalComparer : StringComparer, IWellKnownStringEqualityComparer
    {
        private bool _ignoreCase;

        internal OrdinalComparer(bool ignoreCase)
        {
            this._ignoreCase = ignoreCase;
        }

        public override int Compare(string x, string y)
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
            if (this._ignoreCase)
            {
                return string.Compare(x, y, StringComparison.OrdinalIgnoreCase);
            }
            return StringUtils.CompareOrdinal(x, y);
        }

        public override bool Equals(object obj)
        {
            OrdinalComparer comparer = obj as OrdinalComparer;
            if (comparer == null)
            {
                return false;
            }
            return (this._ignoreCase == comparer._ignoreCase);
        }

        public override bool Equals(string x, string y)
        {
            if (x == y)
            {
                return true;
            }
            if ((x == null) || (y == null))
            {
                return false;
            }
            if (!this._ignoreCase)
            {
                return x.Equals(y);
            }
            if (x.Length != y.Length)
            {
                return false;
            }
            return (string.Compare(x, y, StringComparison.OrdinalIgnoreCase) == 0);
        }

        public override int GetHashCode()
        {
            int hashCode = "OrdinalComparer".GetHashCode();
            if (!this._ignoreCase)
            {
                return hashCode;
            }
            return ~hashCode;
        }

        public override int GetHashCode(string obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }
            if (this._ignoreCase)
            {
                return 0; // TODO: TextInfo.GetHashCodeOrdinalIgnoreCase(obj);
            }
            return obj.GetHashCode();
        }

        IEqualityComparer IWellKnownStringEqualityComparer.GetEqualityComparerForSerialization() =>
            this;

        IEqualityComparer IWellKnownStringEqualityComparer.GetRandomizedEqualityComparer() =>
            new OrdinalRandomizedComparer(this._ignoreCase);
    }
}
