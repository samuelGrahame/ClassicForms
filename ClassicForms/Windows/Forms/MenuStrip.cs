using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Retyped;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class MenuStrip : Control
    {
        public ToolStripItemCollection Items { get; set; }

        public MenuStrip() : base(new HTMLDivElement())
        {
            this.Element.style.overflow = "hidden";
            var div = new HTMLDivElement();
            div.style.overflow = "hidden";
            div.style.cursor = "default";
            div.style.height = "100%";
            Items = new ToolStripItemCollection(div);
            Dock = DockStyle.Top;

            this.Element.appendChild(div);
        }
    }
}
