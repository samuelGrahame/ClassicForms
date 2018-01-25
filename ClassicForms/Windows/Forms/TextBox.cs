using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class TextBox : Control
    {        
        public TextBox() : base(new HTMLInputElement() { type = "text" })
        {

        }

        public override string Text { get { return Element.As<HTMLInputElement>().value; } set
            {
                base.Text = value;
                Element.As<HTMLInputElement>().value = value;
            }
        }
    }
}
