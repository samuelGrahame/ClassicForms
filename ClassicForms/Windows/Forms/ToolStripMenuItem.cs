using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class ToolStripMenuItem : ToolStripDropDownItem
    {
        public ToolStripMenuItem() : base()
        {
            this.Element.style.cssFloat = "left";
            this.Element.setAttribute("scope", "tool-strip-menu-item");
        }
        public override Size Size { get => base.Size; set {
                base.Size = value;
                if(Element != null)
                {
                    Element.style.width = value.Width + "px";
                    Element.style.height = value.Height + "px";
                    Element.style.lineHeight = Element.style.height;
                }                    
            } 
        }
    }
}
