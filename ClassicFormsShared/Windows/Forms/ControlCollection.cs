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
    /// <summary>
    /// TODO - add controls via html....
    /// </summary>
    public class ControlCollection : IList<Control>, ICollection, IEnumerable
    {
        internal Control _owner;
        internal HTMLElement layer;

        public ControlCollection(Control owner)
        {
            _owner = owner;
            layer = owner.Element;
            _items = new List<Control>();
        }

        public Control Owner { get { return _owner; } }

        public List<Control> _items;

        public Control this[int index] { get { return _items[index];  } set {
                _items[index] = value;
            } }

        public int Count { get { return _items.Count;  } }

        public bool IsReadOnly { get { return false; } }
        public bool IsSynchronized { get { return false; } }

        public object SyncRoot
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void Add(Control item)
        {
            layer.appendChild(item.Element);
            item._parent = Owner;
            item.InvokeLoad();
            _items.Add(item);
            _owner.OnControlAdded(item);
        }

        public void AddRange(Control[] item)
        {
            if (item == null || item.Length == 0)
                return;
            var frag = document.createDocumentFragment();
            for (int i = 0; i < item.Length; i++)
            {
                frag.appendChild(item[i].Element);
                item[i]._parent = Owner;
                item[i].InvokeLoad();
                _items.Add(item[i]);
                _owner.OnControlAdded(item[i]);
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

        public bool Contains(Control item)
        {
            return _items.Contains(item);
        }

        public void CopyTo(Control[] array, int arrayIndex)
        {
            _items.CopyTo(array, arrayIndex);
        }

        public void CopyTo(Array array, int arrayIndex)
        {
            _items.CopyTo((Control[])array, arrayIndex);
        }

        public IEnumerator<Control> GetEnumerator()
        {
            return _items.GetEnumerator();
        }

        public int IndexOf(Control item)
        {
            return _items.IndexOf(item);
        }

        public void Insert(int index, Control item)
        {
#if BLAZOR
            layer.insertBefore(item.Element, layer.childNodes[index]);
#else
            layer.insertBefore(item.Element, (Node)layer.childNodes[index]);
#endif
            _items.Insert(index, item);
            _owner.OnControlAdded(item);
        }

        public bool Remove(Control item)
        {
            layer.removeChild(item.Element);

            _owner.OnControlRemoved(item);

            return _items.Remove(item);
        }

        public void RemoveAt(int index)
        {
            layer.removeChild(layer.childNodes[index]);

            _owner.OnControlRemoved(_items[index]);

            _items.RemoveAt(index);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _items.GetEnumerator();
        }
    }
}
