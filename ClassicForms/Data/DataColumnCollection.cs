using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Data
{
    public class DataColumnCollection
    {
        private List<DataColumn> columns;
        public DataTable owner;

        public DataColumnCollection(DataTable _owner)
        {
            owner = _owner;
            columns = new List<DataColumn>();
        }

        public DataColumn this[int index]   // Indexer declaration  
        {
            get { return columns[index]; }
        }

        public int Count => columns.Count;

        public void Add(string name, Type type)
        {
            columns.Add(new DataColumn() { DataType = type, FieldName = name });
            owner.RequireOnDataChangeEvent();
        }
    }
}
