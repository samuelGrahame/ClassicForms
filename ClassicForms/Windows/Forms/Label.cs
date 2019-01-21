using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

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
            get { return Element.innerText; }
            set
            {
                base.Text = value;
                Element.innerText = value;
            }
        }
    }
}
