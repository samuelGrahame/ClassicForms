using Bridge;
using System.Collections;

namespace System.Collections
{
    public interface IDict : ICollection, IEnumerable
    {
        [AccessorsIndexer]
        object this[object key] { get; set; }

        ICollection Keys { get; }
        ICollection Values { get; }
        //
        // Summary:
        //     Gets a value indicating whether the System.Collections.IDictionary object is
        //     read-only.
        //
        // Returns:
        //     true if the System.Collections.IDictionary object is read-only; otherwise, false.
        bool IsReadOnly { get; }
        //
        // Summary:
        //     Gets a value indicating whether the System.Collections.IDictionary object has
        //     a fixed size.
        //
        // Returns:
        //     true if the System.Collections.IDictionary object has a fixed size; otherwise,
        //     false.
        bool IsFixedSize { get; }

        //
        // Summary:
        //     Adds a key-value pair to the dictionary.
        //
        // Parameters:
        //   key:
        //
        //   value:
        void Add(object key, object value);
        //
        // Summary:
        //     Removes all elements from the System.Collections.IDictionary object.
        //
        // Exceptions:
        //   T:System.NotSupportedException:
        //     The System.Collections.IDictionary object is read-only.
        void Clear();
        //
        // Summary:
        //     Returns whether this dictionary contains a particular key.
        //
        // Parameters:
        //   key:
        bool Contains(object key);
        //
        // Summary:
        //     Removes a particular key from the dictionary.
        //
        // Parameters:
        //   key:
        bool Remove(object key);
    }
}
