using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    //
    // Summary:
    //     Represents the collection of items in a System.Windows.Forms.ComboBox.
    public class ObjectCollection : IList<object>, ICollection, IEnumerable
    {
        private Control _owner;

        public ObjectCollection(Control owner)
        {
            _owner = owner;
            _controls = new List<object>();
        }

        public Control Owner { get { return _owner; } }

        private List<object> _controls;

        public object this[int index]
        {
            get { return _controls[index]; }
            set
            {
                _controls[index] = value;
            }
        }

        public int Count { get { return _controls.Count; } }

        public bool IsReadOnly { get { return false; } }

        public void Add(object item)
        {
            _owner.Element.appendChild(new HTMLOptionElement() { value = _controls.Count.ToString(), textContent = (item + "") } );
            _controls.Add(item);
        }

        public void AddRange(object[] item)
        {
            if (item == null || item.Length == 0)
                return;
            var frag = document.createDocumentFragment();
            for (int i = 0; i < item.Length; i++)
            {
                frag.appendChild(new HTMLOptionElement() { value = _controls.Count.ToString(), textContent = (item[i] + "") });
                _controls.Add(item[i]);
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
            _controls.Clear();
        }

        public bool Contains(object item)
        {
            return _controls.Contains(item);
        }

        public void CopyTo(object[] array, int arrayIndex)
        {
            _controls.CopyTo(array, arrayIndex);
        }

        public void CopyTo(Array array, int arrayIndex)
        {
            _controls.CopyTo((object[])array, arrayIndex);
        }

        public IEnumerator<object> GetEnumerator()
        {
            return _controls.GetEnumerator();
        }

        public int IndexOf(object item)
        {
            return _controls.IndexOf(item);
        }

        public void Insert(int index, object item)
        {
            _owner.Element.insertBefore(new HTMLOptionElement() { value = _controls.Count.ToString(), textContent = (item + "") }, _owner.Element.childNodes[index]);
            _controls.Insert(index, item);
        }

        public bool Remove(object item)
        {
            _owner.Element.removeChild(_owner.Element.childNodes[_controls.IndexOf(item)]);            
            return _controls.Remove(item);
        }

        public void RemoveAt(int index)
        {
            _owner.Element.removeChild(_owner.Element.childNodes[index]);
            _controls.RemoveAt(index);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _controls.GetEnumerator();
        }
    }
}
