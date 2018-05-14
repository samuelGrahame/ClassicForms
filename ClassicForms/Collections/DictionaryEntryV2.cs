namespace System.Collections
{
    public struct DictionaryEntryV2
    {
        public DictionaryEntryV2(object key, object value)
        {
            Key = key;
            Value = value;
        }

        public object Key { get; set; }
        public object Value { get; set; }
    }
}
