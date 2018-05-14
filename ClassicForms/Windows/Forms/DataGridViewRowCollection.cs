using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    /// <summary>
    /// TODO - add controls via html....
    /// </summary>
    public class DataGridViewRowCollection : IList<DataRow>, ICollection, IEnumerable
    {
        internal DataGridView _owner;
        internal HTMLTableSectionElement body;

        public DataGridViewRowCollection(DataGridView owner, HTMLTableElement table)
        {
            _owner = owner;
            _controls = new List<DataRow>();

            body = table.createTBody();
            table.appendChild(body);
        }

        public DataGridView Owner { get { return _owner; } }

        private List<DataRow> _controls;

        public DataRow this[int index] { get { return _controls[index];  } set {
                _controls[index] = value;
            } }

        public int Count { get { return _controls.Count;  } }

        public bool IsReadOnly { get { return false; } }
        public bool IsSynchronized { get { return false; } }

        public object SyncRoot
        {
            get
            {
                throw new NotImplementedException();
            }
        }
        public void Add(DataRow item)
        {
            body.appendChild(item.Element);
            _controls.Add(item);
        }

        public void AddRange(DataRow[] item)
        {
            if (item == null || item.Length == 0)
                return;
            var frag = document.createDocumentFragment();
            for (int i = 0; i < item.Length; i++)
            {
                frag.appendChild(item[i].Element);
                _controls.Add(item[i]);
            }
            body.appendChild(frag);
        }

        public void Clear()
        {
            /*@
			var len = body.childNodes.length;
			while(len--)
			{
				body.removeChild(body.lastChild);
			};
			*/
            _controls.Clear();
        }

        public bool Contains(DataRow item)
        {
            return _controls.Contains(item);
        }

        public void CopyTo(DataRow[] array, int arrayIndex)
        {
            _controls.CopyTo(array, arrayIndex);
        }

        public void CopyTo(Array array, int arrayIndex)
        {
            _controls.CopyTo((DataRow[])array, arrayIndex);
        }

        public IEnumerator<DataRow> GetEnumerator()
        {
            return _controls.GetEnumerator();
        }

        public int IndexOf(DataRow item)
        {
            return _controls.IndexOf(item);
        }

        public void Insert(int index, DataRow item)
        {
            body.insertBefore(item.Element, (Node)body.childNodes[index]);
            _controls.Insert(index, item);
        }

        public bool Remove(DataRow item)
        {
            body.removeChild(item.Element);
            return _controls.Remove(item);
        }

        public void RemoveAt(int index)
        {
            body.removeChild(body.childNodes[index]);
            _controls.RemoveAt(index);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _controls.GetEnumerator();
        }
    }
}
