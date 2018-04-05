using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class Form : ContainerControl
    {
        private int FormTopBorder = 31;
        private int FormBottonBorder = 1;
        private int FormLeftBorder = 1;
        private int FormRightBorder = 1;
        private bool allowSizeChange = true;

        public Form() : base()
        {            
            Element.setAttribute("scope", "form");
            
            TabStop = false;

            this.Location = new Point(0, 0);

            _setBorderWidth();
        }

        private bool _controlBox = true;

        public bool ControlBox
        {
            get { return _controlBox; }
            set {
                if(_controlBox != value)
                {
                    _controlBox = value;
                    _processWinFormView();
                }                
            }
        }

        private FormBorderStyle _formBorderStyle;

        public FormBorderStyle FormBorderStyle
        {
            get { return _formBorderStyle; }
            set {
                if(_formBorderStyle != value)
                {
                    _formBorderStyle = value;
                    _processWinFormView();
                }                
            }
        }

        private void _processWinFormView()
        {
            var clientSize = ClientSize;
            // need to allow for custom size per style - currently set as windows 10.
            switch (_formBorderStyle)
            {
                case FormBorderStyle.None:
                    FormTopBorder = 0;
                    FormBottonBorder = 0;
                    FormLeftBorder = 0;
                    FormRightBorder = 0;
                    allowSizeChange = false;

                    break;
                case FormBorderStyle.FixedSingle:
                    allowSizeChange = false;
                    if (!ControlBox)
                    {
                        FormTopBorder = 1;
                    }
                    else
                    {
                        FormTopBorder = 31;
                    }                        
                    FormBottonBorder = 1;
                    FormLeftBorder = 1;
                    FormRightBorder = 1;
                    break;
                case FormBorderStyle.Fixed3D:
                    allowSizeChange = false;
                    if (!ControlBox)
                    {
                        FormTopBorder = 3;
                        FormBottonBorder = 3;
                        FormLeftBorder = 3;
                        FormRightBorder = 3;
                    }
                    else
                    {
                        FormTopBorder = 31;
                        FormBottonBorder = 1;
                        FormLeftBorder = 1;
                        FormRightBorder = 1;
                    }
                    break;
                case FormBorderStyle.FixedDialog:

                    allowSizeChange = false;
                    if (!ControlBox)
                    {
                        FormTopBorder = 2;
                        FormBottonBorder = 2;
                        FormLeftBorder = 2;
                        FormRightBorder = 2;
                    }
                    else
                    {
                        FormTopBorder = 31;
                        FormBottonBorder = 1;
                        FormLeftBorder = 1;
                        FormRightBorder = 1;
                    }

                    
                    break;
                case FormBorderStyle.Sizable:
                    if(!ControlBox)
                    {
                        FormTopBorder = 8;
                    }
                    else
                    {
                        FormTopBorder = 31;
                    }
                    FormBottonBorder = 1;
                    FormLeftBorder = 1;
                    FormRightBorder = 1;
                    allowSizeChange = true;
                    break;
                case FormBorderStyle.FixedToolWindow:
                    if (!ControlBox)
                    {
                        FormTopBorder = 1;
                    }
                    else
                    {
                        FormTopBorder = 31;
                    }
                    FormBottonBorder = 0;
                    FormLeftBorder = 0;
                    FormRightBorder = 0;
                    allowSizeChange = false;
                    break;
                case FormBorderStyle.SizableToolWindow:
                    if (!ControlBox)
                    {
                        FormTopBorder = 8;
                    }
                    else
                    {
                        FormTopBorder = 31;
                    }
                    FormBottonBorder = 1;
                    FormLeftBorder = 1;
                    FormRightBorder = 1;
                    allowSizeChange = true;
                    break;
                default:
                    break;
            }

            _setBorderWidth();

            ClientSize = clientSize;
        }

        private void _setBorderWidth()
        {
            Element.style.borderTopWidth = FormTopBorder + "px";
            Element.style.borderBottomWidth = FormBottonBorder + "px";
            Element.style.borderLeftWidth = FormLeftBorder + "px";
            Element.style.borderRightWidth = FormRightBorder + "px";
        }
        
        public override Font Font { get { return base.Font; } set {                
                base.Font = value;                
            } }

        private Size GetClientSize(Size size)
        {
            return new Size(size.Width - (FormLeftBorder + FormRightBorder), size.Height - (FormTopBorder + FormBottonBorder));
        }

        private Size SetSize(Size clientSize)
        {
            return new Size(clientSize.Width + (FormLeftBorder + FormRightBorder), clientSize.Height + (FormTopBorder + FormBottonBorder));
        }

        protected virtual void Dispose(bool disposing)
        {

        }

       
        public void Show()
        {
            OnLoad(EventArgs.Empty);
            document.body.appendChild(Element);
        }
               

        public Size ClientSize { get { return GetClientSize(Size); } set { Size = SetSize(value); } }
        public override string Text { get; set; }        
    }
}
