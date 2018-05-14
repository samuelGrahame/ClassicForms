namespace System.Collections
{
    public interface IDictEnumrator : IEnumerator
    {
        object Key { get; }
        object Value { get; }
        DictionaryEntry Entry { get; }
    }
}