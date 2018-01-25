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
    public class DataGridViewColumnCollection : IList<DataGridViewColumn>, ICollection, IEnumerable
    {
        internal DataGridView _owner;
        internal HTMLTableSectionElement header;

        public DataGridViewColumnCollection(DataGridView owner, HTMLTableElement table)
        {
            _owner = owner;
            _controls = new List<DataGridViewColumn>();            

            header = table.createTHead();
            table.appendChild(header);
        }

        public DataGridView Owner { get { return _owner; } }

        private List<DataGridViewColumn> _controls;

        public DataGridViewColumn this[int index] { get { return _controls[index];  } set {
                _controls[index] = value;
            } }

        public int Count { get { return _controls.Count;  } }

        public bool IsReadOnly { get { return false; } }

        public void Add(DataGridViewColumn item)
        {

            header.appendChild(item.Element);
            _controls.Add(item);
        }

        public void AddRange(DataGridViewColumn[] item)
        {
            if (item == null || item.Length == 0)
                return;
            var frag = document.createDocumentFragment();
            for (int i = 0; i < item.Length; i++)
            {
                frag.appendChild(item[i].Element);
                _controls.Add(item[i]);
            }
            header.appendChild(frag);
        }

        public void Clear()
        {            
            /*@
			var len = header.childNodes.length;
			while(len--)
			{
				header.removeChild(header.lastChild);
			};
			*/
            _controls.Clear();
        }

        public bool Contains(DataGridViewColumn item)
        {
            return _controls.Contains(item);
        }

        public void CopyTo(DataGridViewColumn[] array, int arrayIndex)
        {
            _controls.CopyTo(array, arrayIndex);
        }

        public void CopyTo(Array array, int arrayIndex)
        {
            _controls.CopyTo((DataGridViewColumn[])array, arrayIndex);
        }

        public IEnumerator<DataGridViewColumn> GetEnumerator()
        {
            return _controls.GetEnumerator();
        }

        public int IndexOf(DataGridViewColumn item)
        {
            return _controls.IndexOf(item);
        }

        public void Insert(int index, DataGridViewColumn item)
        {
            header.insertBefore(item.Element, header.childNodes[index]);
            _controls.Insert(index, item);
        }

        public bool Remove(DataGridViewColumn item)
        {
            header.removeChild(item.Element);
            return _controls.Remove(item);
        }

        public void RemoveAt(int index)
        {
            header.removeChild(header.childNodes[index]);
            _controls.RemoveAt(index);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _controls.GetEnumerator();
        }
    }
}
