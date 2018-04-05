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
        private int _formTopBorder = 31;
        private int _formBottonBorder = 1;
        private int _formLeftBorder = 1;
        private int _formRightBorder = 1;
        private bool _allowSizeChange = true; // not yet implemented.
        private bool _allowMoveChange = true; // not yet implemented.
        private bool _mouseDownOnBorder = false;

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

        protected override void OnMouseDown(MouseEventArgs e)
        {
            // work out area... of click.

            _mouseDownOnBorder = true;

            base.OnMouseDown(e);
        }


        protected override void OnMouseUp(MouseEventArgs e)
        {
            _mouseDownOnBorder = false;
            base.OnMouseUp(e);
        }

        protected override void OnMouseMove(MouseEventArgs e)
        {
            // is mouse down???
            if(_mouseDownOnBorder)
            {
                // we should do some action regarding this... etc move form, resize in direction.

            }
            base.OnMouseMove(e);
        }

        private void _processWinFormView()
        {
            var clientSize = ClientSize;
            // need to allow for custom size per style - currently set as windows 10.
            switch (_formBorderStyle)
            {
                case FormBorderStyle.None:
                    _formTopBorder = 0;
                    _formBottonBorder = 0;
                    _formLeftBorder = 0;
                    _formRightBorder = 0;
                    _allowSizeChange = false;

                    break;
                case FormBorderStyle.FixedSingle:
                    _allowSizeChange = false;
                    if (!ControlBox)
                    {
                        _formTopBorder = 1;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }                        
                    _formBottonBorder = 1;
                    _formLeftBorder = 1;
                    _formRightBorder = 1;
                    break;
                case FormBorderStyle.Fixed3D:
                    _allowSizeChange = false;
                    if (!ControlBox)
                    {
                        _formTopBorder = 3;
                        _formBottonBorder = 3;
                        _formLeftBorder = 3;
                        _formRightBorder = 3;
                    }
                    else
                    {
                        _formTopBorder = 31;
                        _formBottonBorder = 1;
                        _formLeftBorder = 1;
                        _formRightBorder = 1;
                    }
                    break;
                case FormBorderStyle.FixedDialog:

                    _allowSizeChange = false;
                    if (!ControlBox)
                    {
                        _formTopBorder = 2;
                        _formBottonBorder = 2;
                        _formLeftBorder = 2;
                        _formRightBorder = 2;
                    }
                    else
                    {
                        _formTopBorder = 31;
                        _formBottonBorder = 1;
                        _formLeftBorder = 1;
                        _formRightBorder = 1;
                    }

                    
                    break;
                case FormBorderStyle.Sizable:
                    if(!ControlBox)
                    {
                        _formTopBorder = 8;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }
                    _formBottonBorder = 1;
                    _formLeftBorder = 1;
                    _formRightBorder = 1;
                    _allowSizeChange = true;
                    break;
                case FormBorderStyle.FixedToolWindow:
                    if (!ControlBox)
                    {
                        _formTopBorder = 1;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }
                    _formBottonBorder = 0;
                    _formLeftBorder = 0;
                    _formRightBorder = 0;
                    _allowSizeChange = false;
                    break;
                case FormBorderStyle.SizableToolWindow:
                    if (!ControlBox)
                    {
                        _formTopBorder = 8;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }
                    _formBottonBorder = 1;
                    _formLeftBorder = 1;
                    _formRightBorder = 1;
                    _allowSizeChange = true;
                    break;
                default:
                    break;
            }

            _setBorderWidth();

            ClientSize = clientSize;
        }

        private void _setBorderWidth()
        {
            Element.style.borderTopWidth = _formTopBorder + "px";
            Element.style.borderBottomWidth = _formBottonBorder + "px";
            Element.style.borderLeftWidth = _formLeftBorder + "px";
            Element.style.borderRightWidth = _formRightBorder + "px";
        }
        
        public override Font Font { get { return base.Font; } set {                
                base.Font = value;                
            } }

        private Size GetClientSize(Size size)
        {
            return new Size(size.Width - (_formLeftBorder + _formRightBorder), size.Height - (_formTopBorder + _formBottonBorder));
        }

        private Size SetSize(Size clientSize)
        {
            return new Size(clientSize.Width + (_formLeftBorder + _formRightBorder), clientSize.Height + (_formTopBorder + _formBottonBorder));
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
