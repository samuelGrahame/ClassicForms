#if BRIDGE
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Data
{
    public class DataColumnCollection
    {
        public DataTable Table {get;}
        internal List<DataColumn> Columns;

        public int GetColumnIndex(string name)
        {
            for (int i = 0; i < Columns.Count; i++)
            {
                if (Columns[i].Name == name)
                    return i;
            }

            return -1;
        }

        public int Count => Columns.Count;

        internal DataColumnCollection(DataTable table)
        {
            Table = table;
            Columns = new List<DataColumn>();

        }

        public DataColumn Add(string columnName, Type type)
        {
            var data = new DataColumn(Table, columnName);
            
            Columns.Add(data);

            return data;
        }

        public DataColumn Add(string columnName)
        {
            var data = new DataColumn(Table, columnName);

            Columns.Add(data);

            return data;

        }
    }
}

#endif