using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Data
{
    public class DataRowCollection
    {
        private List<DataRow> rows;
        public DataTable owner;

        public DataRowCollection(DataTable _owner)
        {
            owner = _owner;
            rows = new List<DataRow>();
        }

        public DataRow this[int index]   // Indexer declaration  
        {
            get { return rows[index]; }
        }

        public int Count => rows.Count;

        public void Add(DataRow dr)
        {
            rows.Add(dr);
            owner.RequireOnDataChangeEvent();
        }

        public void AddRange(DataRow[] dataRows)
        {
            rows.AddRange(dataRows);
            owner.RequireOnDataChangeEvent();
        }

        public void Clear()
        {
            rows.Clear();
            owner.RequireOnDataChangeEvent();
        }
    }
}
