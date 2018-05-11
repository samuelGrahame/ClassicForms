namespace System.Collections.Specialized
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Reflection;
    using System.Threading;
    using System.Windows.Forms;

    [Serializable]
    public class ListDictionary : IDict
    {
        [NonSerialized]
        private object _syncRoot;
        private IComparer comparer;
        private int count;
        private DictionaryNode head;
        private int version;

        public ListDictionary()
        {
        }

        public ListDictionary(IComparer comparer)
        {
            this.comparer = comparer;
        }

        public void Add(object key, object value)
        {
            if (key == null)
            {
                throw new ArgumentNullException("key", SR.GetString("ArgumentNull_Key"));
            }
            this.version++;
            DictionaryNode node = null;
            for (DictionaryNode node2 = this.head; node2 != null; node2 = node2.next)
            {
                object x = node2.key;
                if ((this.comparer == null) ? x.Equals(key) : (this.comparer.Compare(x, key) == 0))
                {
                    throw new ArgumentException(SR.GetString("Argument_AddingDuplicate"));
                }
                node = node2;
            }
            DictionaryNode node3 = new DictionaryNode()
            {
                key = key,
                value = value
            };
            if (node != null)
            {
                node.next = node3;
            }
            else
            {
                this.head = node3;
            }
            this.count++;
        }

        public void Clear()
        {
            this.count = 0;
            this.head = null;
            this.version++;
        }

        public bool Contains(object key)
        {
            if (key == null)
            {
                throw new ArgumentNullException("key", SR.GetString("ArgumentNull_Key"));
            }
            for (DictionaryNode node = this.head; node != null; node = node.next)
            {
                object x = node.key;
                if ((this.comparer == null) ? x.Equals(key) : (this.comparer.Compare(x, key) == 0))
                {
                    return true;
                }
            }
            return false;
        }

        public void CopyTo(Array array, int index)
        {
            if (array == null)
            {
                throw new ArgumentNullException("array");
            }
            if (index < 0)
            {
                throw new ArgumentOutOfRangeException("index", SR.GetString("ArgumentOutOfRange_NeedNonNegNum"));
            }
            if ((array.Length - index) < this.count)
            {
                throw new ArgumentException(SR.GetString("Arg_InsufficientSpace"));
            }
            for (DictionaryNode node = this.head; node != null; node = node.next)
            {
                array.SetValue(new DictionaryEntry(node.key, node.value), index);
                index++;
            }
        }

        public IEnumerator GetEnumerator() =>
            new NodeEnumerator(this);

        public bool Remove(object key)
        {
            if (key == null)
            {
                throw new ArgumentNullException("key", SR.GetString("ArgumentNull_Key"));
            }
            this.version++;
            DictionaryNode node = null;
            DictionaryNode head = this.head;
            while (head != null)
            {
                object x = head.key;
                if ((this.comparer == null) ? x.Equals(key) : (this.comparer.Compare(x, key) == 0))
                {
                    break;
                }
                node = head;
                head = head.next;
            }
            if (head != null)
            {
                if (head == this.head)
                {
                    this.head = head.next;
                }
                else
                {
                    node.next = head.next;
                }
                this.count--;
            }
            return true;
        }

        //IEnumerator IEnumerable.GetEnumerator()
        //{
        //    throw new NotImplementedException();
        //}

        public int Count =>
            this.count;

        public bool IsFixedSize =>
            false;

        public bool IsReadOnly =>
            false;

        public bool IsSynchronized =>
            false;

        public object this[object key]
        {
            get
            {
                if (key == null)
                {
                    throw new ArgumentNullException("key", SR.GetString("ArgumentNull_Key"));
                }
                DictionaryNode head = this.head;
                if (this.comparer != null)
                {
                    while (head != null)
                    {
                        object x = head.key;
                        if ((x != null) && (this.comparer.Compare(x, key) == 0))
                        {
                            return head.value;
                        }
                        head = head.next;
                    }
                }
                else
                {
                    while (head != null)
                    {
                        object obj2 = head.key;
                        if ((obj2 != null) && obj2.Equals(key))
                        {
                            return head.value;
                        }
                        head = head.next;
                    }
                }
                return null;
            }
            set
            {
                if (key == null)
                {
                    throw new ArgumentNullException("key", SR.GetString("ArgumentNull_Key"));
                }
                this.version++;
                DictionaryNode node = null;
                DictionaryNode head = this.head;
                while (head != null)
                {
                    object x = head.key;
                    if ((this.comparer == null) ? x.Equals(key) : (this.comparer.Compare(x, key) == 0))
                    {
                        break;
                    }
                    node = head;
                    head = head.next;
                }
                if (head != null)
                {
                    head.value = value;
                }
                else
                {
                    DictionaryNode node3 = new DictionaryNode()
                    {
                        key = key,
                        value = value
                    };
                    if (node != null)
                    {
                        node.next = node3;
                    }
                    else
                    {
                        this.head = node3;
                    }
                    this.count++;
                }
            }
        }

        public ICollection Keys =>
            new NodeKeyValueCollection(this, true);

        public object SyncRoot
        {
            get
            {
                if (this._syncRoot == null)
                {
                    this._syncRoot = new object();
                    //Interlocked.CompareExchange(ref this._syncRoot, new object(), null);
                }
                return this._syncRoot;
            }
        }

        public ICollection Values =>
            new NodeKeyValueCollection(this, false);

        [Serializable]
        private class DictionaryNode
        {
            public object key;
            public ListDictionary.DictionaryNode next;
            public object value;
        }

        private class NodeEnumerator : IDictEnumrator
        {
            private ListDictionary.DictionaryNode current;
            private ListDictionary list;
            private bool start;
            private int version;

            public NodeEnumerator(ListDictionary list)
            {
                this.list = list;
                this.version = list.version;
                this.start = true;
                this.current = null;
            }

            public bool MoveNext()
            {
                if (this.version != this.list.version)
                {
                    throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumFailedVersion"));
                }
                if (this.start)
                {
                    this.current = this.list.head;
                    this.start = false;
                }
                else if (this.current != null)
                {
                    this.current = this.current.next;
                }
                return (this.current != null);
            }

            public void Reset()
            {
                if (this.version != this.list.version)
                {
                    throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumFailedVersion"));
                }
                this.start = true;
                this.current = null;
            }

            public object Current =>
                this.Entry;

            public DictionaryEntry Entry
            {
                get
                {
                    if (this.current == null)
                    {
                        throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumOpCantHappen"));
                    }
                    return new DictionaryEntryV2(this.current.key, this.current.value).ToDynamic();
                }
            }

            public object Key
            {
                get
                {
                    if (this.current == null)
                    {
                        throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumOpCantHappen"));
                    }
                    return this.current.key;
                }
            }

            public object Value
            {
                get
                {
                    if (this.current == null)
                    {
                        throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumOpCantHappen"));
                    }
                    return this.current.value;
                }
            }
        }

        private class NodeKeyValueCollection : ICollection, IEnumerable
        {
            private bool isKeys;
            private ListDictionary list;

            public NodeKeyValueCollection(ListDictionary list, bool isKeys)
            {
                this.list = list;
                this.isKeys = isKeys;
            }

            void ICollection.CopyTo(Array array, int index)
            {
                if (array == null)
                {
                    throw new ArgumentNullException("array");
                }
                if (index < 0)
                {
                    throw new ArgumentOutOfRangeException("index", SR.GetString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                for (ListDictionary.DictionaryNode node = this.list.head; node != null; node = node.next)
                {
                    array.SetValue(this.isKeys ? node.key : node.value, index);
                    index++;
                }
            }

            IEnumerator IEnumerable.GetEnumerator() =>
                new NodeKeyValueEnumerator(this.list, this.isKeys);

            int ICollection.Count
            {
                get
                {
                    int num = 0;
                    for (ListDictionary.DictionaryNode node = this.list.head; node != null; node = node.next)
                    {
                        num++;
                    }
                    return num;
                }
            }

            bool ICollection.IsSynchronized =>
                false;

            object ICollection.SyncRoot =>
                this.list.SyncRoot;

            private class NodeKeyValueEnumerator : IEnumerator
            {
                private ListDictionary.DictionaryNode current;
                private bool isKeys;
                private ListDictionary list;
                private bool start;
                private int version;

                public NodeKeyValueEnumerator(ListDictionary list, bool isKeys)
                {
                    this.list = list;
                    this.isKeys = isKeys;
                    this.version = list.version;
                    this.start = true;
                    this.current = null;
                }

                public bool MoveNext()
                {
                    if (this.version != this.list.version)
                    {
                        throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumFailedVersion"));
                    }
                    if (this.start)
                    {
                        this.current = this.list.head;
                        this.start = false;
                    }
                    else if (this.current != null)
                    {
                        this.current = this.current.next;
                    }
                    return (this.current != null);
                }

                public void Reset()
                {
                    if (this.version != this.list.version)
                    {
                        throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumFailedVersion"));
                    }
                    this.start = true;
                    this.current = null;
                }

                public object Current
                {
                    get
                    {
                        if (this.current == null)
                        {
                            throw new InvalidOperationException(SR.GetString("InvalidOperation_EnumOpCantHappen"));
                        }
                        if (!this.isKeys)
                        {
                            return this.current.value;
                        }
                        return this.current.key;
                    }
                }
            }
        }
    }
}
