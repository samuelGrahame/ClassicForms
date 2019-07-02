using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

namespace System.Windows.Forms
{
    public class TextBox : Control
    {
        public bool Multiline { get; set; }

        public override string Name { get => base.Name; set {
                if(base.Name != value)
                {
                    base.Name = value;
                    if (Settings.UseNameForInputPlaceholders)
                    {
                        if(string.IsNullOrWhiteSpace(value))
                        {
                            Element.setAttribute("placeholder", "");
                        }
                        else
                        {
                            if(value.StartsWith("txt") && value.Length > 3)
                            {
                                value = value.Substring(3);
                            }

                            var builder = new StringBuilder();

                            for (int i = 0; i < value.Length; i++)
                            {
                                var c = value[i];

                                if (char.IsUpper(c))
                                {
                                    builder.Append(' ');
                                }
                                if (i == 0)
                                    c = char.ToUpper(c);
                                builder.Append(c);


                            }
                            Element.setAttribute("placeholder", builder.ToString().Trim());
                        }
                    }
                }
            }
        }

        private HorizontalAlignment _textAlign = HorizontalAlignment.Left;
        public HorizontalAlignment TextAlign { get
            {
                return _textAlign;
            }
            set
            {
                if(_textAlign != value)
                {                    
                    _textAlign = value;
                    Element.style.textAlign = _textAlign.ToString("G").ToLower();

                }
            }
        }

        protected override string GetDefaultTag()
        {
            var currentTag = Tag as string;

            if (Settings.IsUsingBootStrap())
            {
                if (string.IsNullOrWhiteSpace(currentTag))
                    return "form-control";
            }

            return base.GetDefaultTag();
        }

        public TextBox() : base(new HTMLInputElement() { type = "text" })
        {
            //TextChanged
            Action<Event> workOutEvent = (ev) =>
            {
                if(Text != prevString)
                {
                    prevString = Text;
                    OnTextChanged(EventArgs.Empty);
                }
            };
#if BLAZOR
            Element.onchange = workOutEvent;
            Element.onpaste = workOutEvent;
            Element.onkeydown = workOutEvent;
            Element.onkeyup = workOutEvent;
            Element.onblur = workOutEvent;
#else
            Element.onchange = new HTMLElement.onactivateFn(workOutEvent);
            Element.onpaste = new HTMLElement.oncopyFn(workOutEvent);
            Element.onkeydown = new HTMLElement.onkeydownFn(workOutEvent);
            Element.onkeyup = new HTMLElement.onkeydownFn(workOutEvent);
            Element.onblur = new HTMLElement.onblurFn(workOutEvent);
#endif



        }

        private string prevString;
        public override string Text { get { return Element.As<HTMLInputElement>().value; } set
            {
                if (Element.As<HTMLInputElement>().value != value)
                {
                    prevString = value;
                    Element.As<HTMLInputElement>().value = value;
                    OnTextChanged(EventArgs.Empty);
                }              
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
