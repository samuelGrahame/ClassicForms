using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    /// <summary>
    /// TODO - add controls via html....
    /// </summary>
    public class ControlCollection : IList<Control>, ICollection, IEnumerable
    {
        internal Control _owner;

        public ControlCollection(Control owner)
        {
            _owner = owner;
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
            _owner.Element.appendChild(item.Element);
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
            _owner.Element.appendChild(frag);
        }

        public void Clear()
        {
            /*@
			var len = _owner.Element.childNodes.length;
			while(len--)
			{
				_owner.Element.removeChild(_owner.Element.lastChild);
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
            _owner.Element.insertBefore(item.Element, (Node)_owner.Element.childNodes[index]);
            _items.Insert(index, item);
            _owner.OnControlAdded(item);
        }

        public bool Remove(Control item)
        {
            _owner.Element.removeChild(item.Element);

            _owner.OnControlRemoved(item);

            return _items.Remove(item);
        }

        public void RemoveAt(int index)
        {
            _owner.Element.removeChild(_owner.Element.childNodes[index]);

            _owner.OnControlRemoved(_items[index]);

            _items.RemoveAt(index);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _items.GetEnumerator();
        }
    }
}
