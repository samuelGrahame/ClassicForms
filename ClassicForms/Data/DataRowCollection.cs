using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Data
{
    public class DataRowCollection
    {
        public DataTable Table { get; }
        internal List<DataRow> rows;

        internal DataRowCollection(DataTable table)
        {
            Table = table;
            rows = new List<DataRow>();
        }

        public void Add(DataRow dr)
        {
            rows.Add(dr);
            Table.OnNewRow(Table, new Windows.Forms.NewRowEventArgs() { Row = dr });            
        }
    }
}
