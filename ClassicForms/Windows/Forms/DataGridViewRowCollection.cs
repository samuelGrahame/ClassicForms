using Bridge.Html5;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    /// <summary>
    /// TODO - add controls via html....
    /// </summary>
    public class DataGridViewRowCollection : IList<DataRow>, ICollection, IEnumerable
    {
        internal DataGridView _owner;
        internal HTMLBodyElement body;

        public DataGridViewRowCollection(DataGridView owner, HTMLTableElement table)
        {
            _owner = owner;
            _controls = new List<DataRow>();            

            body = new HTMLBodyElement();
            table.AppendChild(body);
        }

        public DataGridView Owner { get { return _owner; } }

        private List<DataRow> _controls;

        public DataRow this[int index] { get { return _controls[index];  } set {
                _controls[index] = value;
            } }

        public int Count { get { return _controls.Count;  } }

        public bool IsReadOnly { get { return false; } }

        public void Add(DataRow item)
        {
            body.AppendChild(item.Element);
            _controls.Add(item);
        }

        public void AddRange(DataRow[] item)
        {
            if (item == null || item.Length == 0)
                return;
            var frag = Document.CreateDocumentFragment();
            for (int i = 0; i < item.Length; i++)
            {
                frag.AppendChild(item[i].Element);
                _controls.Add(item[i]);
            }
            body.AppendChild(frag);
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
            body.InsertBefore(item.Element, body.ChildNodes[index]);
            _controls.Insert(index, item);
        }

        public bool Remove(DataRow item)
        {
            body.RemoveChild(item.Element);
            return _controls.Remove(item);
        }

        public void RemoveAt(int index)
        {
            body.RemoveChild(body.ChildNodes[index]);
            _controls.RemoveAt(index);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _controls.GetEnumerator();
        }
    }
}
