using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace System.Windows.Forms
{
    public class TextBox : Control
    {        
        public TextBox() : base(new HTMLInputElement() { Type = InputType.Text })
        {

        }

        public override string Text { get { return Element.As<HTMLInputElement>().Value; } set
            {
                base.Text = value;
                Element.As<HTMLInputElement>().Value = value;
            }
        }
    }
}
