using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Data
{
    public class DataColumn
    {
        public string Name { get; }
        public DataTable Table { get; }
        public DataColumn(DataTable table, string name)
        {
            Name = name;
            Table = table;
        }
    }
}
