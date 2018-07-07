namespace System
{
    using System.Collections;

    internal interface IWellKnownStringEqualityComparer
    {
        IEqualityComparer GetEqualityComparerForSerialization();
        IEqualityComparer GetRandomizedEqualityComparer();
    }
}
