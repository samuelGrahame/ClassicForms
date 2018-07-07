using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

namespace System.Windows.Forms
{    
    public class ToolStripItemCollection : IList<ToolStripItem>, ICollection, IEnumerable
    {
        //internal Control _owner;
        internal HTMLElement layer;

        public ToolStripItemCollection(HTMLElement owner)
        {
            //_owner = owner;
            layer = owner;
            _items = new List<ToolStripItem>();
        }

        //public Control Owner { get { return _owner; } }

        public List<ToolStripItem> _items;

        public ToolStripItem this[int index]
        {
            get { return _items[index]; }
            set
            {
                _items[index] = value;
            }
        }

        public int Count { get { return _items.Count; } }

        public bool IsReadOnly { get { return false; } }
        public bool IsSynchronized { get { return false; } }

        public object SyncRoot
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void Add(ToolStripItem item)
        {
            layer.appendChild(item.Element);            
            _items.Add(item);
        }

        public void AddRange(ToolStripItem[] item)
        {
            if (item == null || item.Length == 0)
                return;
            var frag = document.createDocumentFragment();
            for (int i = 0; i < item.Length; i++)
            {
                frag.appendChild(item[i].Element);                
                _items.Add(item[i]);
            }
            layer.appendChild(frag);
        }

        public void Clear()
        {
            /*@
			var len = layer.childNodes.length;
			while(len--)
			{
				layer.removeChild(layer.lastChild);
			};
			*/
            _items.Clear();
        }

        public bool Contains(ToolStripItem item)
        {
            return _items.Contains(item);
        }

        public void CopyTo(ToolStripItem[] array, int arrayIndex)
        {
            _items.CopyTo(array, arrayIndex);
        }

        public void CopyTo(Array array, int arrayIndex)
        {
            _items.CopyTo((ToolStripItem[])array, arrayIndex);
        }

        public IEnumerator<ToolStripItem> GetEnumerator()
        {
            return _items.GetEnumerator();
        }

        public int IndexOf(ToolStripItem item)
        {
            return _items.IndexOf(item);
        }

        public void Insert(int index, ToolStripItem item)
        {
#if BLAZOR
            layer.insertBefore(item.Element, layer.childNodes[index]);
#else
            layer.insertBefore(item.Element, (Node)layer.childNodes[index]);
#endif
            _items.Insert(index, item);
        }

        public bool Remove(ToolStripItem item)
        {
            layer.removeChild(item.Element);

            return _items.Remove(item);
        }

        public void RemoveAt(int index)
        {
            layer.removeChild(layer.childNodes[index]);

            _items.RemoveAt(index);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _items.GetEnumerator();
        }
    }
}
