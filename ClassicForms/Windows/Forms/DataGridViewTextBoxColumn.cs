#if BRIDGE
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class DataGridViewTextBoxColumn : DataGridViewColumn
    {
        public DataGridViewTextBoxColumn(int width = 100) : base(null, width)
        {

        }

        public DataGridViewTextBoxColumn(DataGridView view, int width = 100) : base(view, width)
        {

        }
    }
}
#endif