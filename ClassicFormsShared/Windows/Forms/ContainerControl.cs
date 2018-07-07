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
    public class ContainerControl : Control
    {
        public SizeF AutoScaleDimensions { get; set; }
        public AutoScaleMode AutoScaleMode { get; set; }

        public ContainerControl() : base(new HTMLDivElement())
        {

        }

        public ContainerControl(HTMLElement element) : base(element)
        {

        }
    }
}
