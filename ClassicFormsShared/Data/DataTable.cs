#if BRIDGE
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace System.Data
{
    public class DataTable
    {
        public DataColumnCollection Columns { get; }
        public DataRowCollection Rows { get; }

        public DataTable()
        {
            Columns = new DataColumnCollection(this);
            Rows = new DataRowCollection(this);
        }
        
        public DataRow NewRow()
        {
            var dr = new DataRow(Columns);

            return dr;
        }

        public void AcceptChanges()
        {

        }

        public event NewRowEventHandler NewRowEvent;

        public virtual void OnNewRow(object sender, NewRowEventArgs args)
        {
            if(NewRowEvent != null)
            {
                NewRowEvent(sender, args);
            }
        }
    }
}
#endif