using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class ToolStripDropDownItem : ToolStripItem
    {
        public ToolStripItemCollection DropDownItems { get; set; }
        public ToolStripDropDownItem() : base()
        {
            DropDownItems = new ToolStripItemCollection(this.Element);
        }
    }
}
