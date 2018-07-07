namespace System
{
    using System.Collections;
    using System.Globalization;
    using System.Security;

    internal sealed class OrdinalRandomizedComparer : StringComparer, IWellKnownStringEqualityComparer
    {
        private long _entropy = 0;
        private bool _ignoreCase;

        internal OrdinalRandomizedComparer(bool ignoreCase)
        {
            this._ignoreCase = ignoreCase;
            //TODO : this._entropy = HashHelpers.GetEntropy();
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
            OrdinalRandomizedComparer comparer = obj as OrdinalRandomizedComparer;
            if (comparer == null)
            {
                return false;
            }
            return ((this._ignoreCase == comparer._ignoreCase) && (this._entropy == comparer._entropy));
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
            int hashCode = "OrdinalRandomizedComparer".GetHashCode();
            return ((this._ignoreCase ? ~hashCode : hashCode) ^ ((int)(this._entropy & 0x7fffffffL)));
        }

        public override int GetHashCode(string obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException("obj");
            }
            if (this._ignoreCase)
            {
                return 0; //TODO TextInfo.GetHashCodeOrdinalIgnoreCase(obj, true, this._entropy);
            }
            return 0; // TODO string.InternalMarvin32HashString(obj, obj.Length, this._entropy);
        }

        IEqualityComparer IWellKnownStringEqualityComparer.GetEqualityComparerForSerialization() =>
            new OrdinalComparer(this._ignoreCase);

        IEqualityComparer IWellKnownStringEqualityComparer.GetRandomizedEqualityComparer() =>
            new OrdinalRandomizedComparer(this._ignoreCase);
    }
}
