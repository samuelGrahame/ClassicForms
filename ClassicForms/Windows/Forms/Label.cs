using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class Label : Control
    {
        public Label() : base(new HTMLSpanElement())
        {
            Element.setAttribute("scope", "label");
        }

        protected override bool GetDefaultTabStop()
        {
            return false;
        }

        public override string Text
        {
            get { return Element.textContent; }
            set
            {
                base.Text = value;
                Element.textContent = value;
            }
        }
    }
}
