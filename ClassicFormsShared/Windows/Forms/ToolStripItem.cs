using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

namespace System.Windows.Forms
{
    public class ToolStripItem : Control
    {
        public override string Text { get => Element.innerText; set => Element.innerText = value; }
        
        public ToolStripItem(HTMLElement element) : base(element, false)
        {            
            
        }

        public ToolStripItem() : this(null)
        {

        }
    }
}
