using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using static Retyped.jquery;
namespace System.Windows.Forms
{
    public class TextBox : Control
    {                
        

        public TextBox() : base(new HTMLInputElement() { type = "text" })
        {
            //TextChanged
            Func<Event, object> workOutEvent = (ev) =>
            {
                if(Text != prevString)
                {
                    prevString = Text;
                    OnTextChanged(EventArgs.Empty);
                }                

                return null;
            };

            Element.onchange = new HTMLElement.onchangeFn(workOutEvent);
            Element.onpaste = new HTMLElement.onpasteFn(workOutEvent);
            Element.onkeydown = new HTMLElement.onkeydownFn(workOutEvent);
            Element.onkeyup = new HTMLElement.onkeyupFn(workOutEvent);
            Element.onblur = new HTMLElement.onblurFn(workOutEvent);
        }
        private string prevString;
        public override string Text { get { return Element.As<HTMLInputElement>().value; } set
            {
                base.Text = value;                
                Element.As<HTMLInputElement>().value = value;
            }
        }

        private bool _useSystemPasswordChar;

        public bool UseSystemPasswordChar
        {
            get { return _useSystemPasswordChar; }
            set {
                _useSystemPasswordChar = value;
                if(_useSystemPasswordChar)
                {
                    this.Element.As<HTMLInputElement>().type = "password";
                }
                else
                {
                    this.Element.As<HTMLInputElement>().type = "text";
                }
            }
        }


        protected virtual void OnTextChanged(EventArgs e)
        {
            if (TextChanged != null)
                TextChanged(this, e);
        }

        public event EventHandler TextChanged;
    }
}
