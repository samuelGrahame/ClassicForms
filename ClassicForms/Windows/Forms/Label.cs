using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace System.Windows.Forms
{
    public class Label : Control
    {
        public Label() : base(new HTMLSpanElement())
        {
            TabStop = false;
        }

        public override string Text
        {
            get { return Element.TextContent; }
            set
            {
                base.Text = value;
                Element.TextContent = value;
            }
        }
    }
}
