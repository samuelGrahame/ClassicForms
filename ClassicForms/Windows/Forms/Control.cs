using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class Control
    {
        public string Name { get { return Element.getAttribute("Name"); } set { Element.setAttribute("Name", value); } }
        private Point _location;
        public Point Location
        {
            get { return _location; }
            set
            {
                _location = value;

                Element.style.left = _location.X + "px";
                Element.style.top = _location.Y + "px";

            }
        }



        private bool _visible;
        public bool Visible { get { return _visible; } set {
                _visible = value;
                Element.style.visibility = _visible ? "inherit" : "hidden";                
            } }

        internal Control _parent;

        public Control Parent { get { return _parent; } }

        public Form GetForm()
        {
            if (this.Parent == null)
                return null;

            if(this.Parent is Form)
            {
                return this.Parent.As<Form>();
            }
            else
            {
                return this.Parent.GetForm();
            }
        }

        private Size _size;
        public Size Size { get { return _size; } set {
                _size = value;
                if(_autoSize)
                {
                    Element.style.width = "auto";
                    Element.style.height = "auto";
                }
                else
                {
                    Element.style.width = _size.Width + "px";
                    Element.style.height = _size.Height + "px";
                }                
            } }

        private bool _tabStop;
        public bool TabStop { get { return _tabStop; } set {
                _tabStop = value;
                TabIndex = _tabIndex;
            } }

        protected int _tabIndex;
        public virtual int TabIndex { get { return _tabIndex; } set {
                _tabIndex = value;
                if(TabStop)
                {
                    Element.tabIndex = value;
                }
                else
                {
                    Element.removeAttribute("TabIndex");                    
                }                
            } }
        public virtual string Text { get; set; }

        private Color _backColor;
        public virtual Color BackColor
        {
            get { return _backColor; }
            set
            {
                _backColor = value;
                Element.style.backgroundColor = _backColor.ToHtml();
            }
        }

        private bool _enabled = true;
        public virtual bool Enabled
        {
            get { return _enabled; }
            set
            {
                _enabled = value;
                ApplyDisabled();                
            }
        }

        private bool _readonly = false;
        public virtual bool ReadOnly
        {
            get { return _readonly; }
            set
            {
                _readonly = value;
                ApplyReadonly();
            }
        }

        protected void ApplyDisabled(HTMLElement element = null)
        {
            if(element == null)
            {
                element = Element;
            }
            if(Enabled)
            {
                if(element.classList.contains("disabled"))
                {
                    element.classList.remove("disabled");
                    element.removeAttribute("disabled");
                }
            }
            else
            {
                if (!element.classList.contains("disabled"))
                {
                    element.classList.add("disabled");
                    element.setAttribute("disabled", "");
                }
            }
        }

        internal void Load()
        {            
            OnLoad();
        }

        protected virtual void OnLoad()
        {

        }

        public virtual Color ForeColor { get; set; }

        protected void ApplyReadonly(HTMLElement element = null)
        {
            if (element == null)
            {
                element = Element;
            }
            if (ReadOnly)
            {
                if (!element.classList.contains("readonly"))
                {
                    element.classList.add("readonly");
                    element.setAttribute("readonly", "");
                }
            }
            else
            {
                if(element.classList.contains("readonly"))
                {
                    element.classList.remove("readonly");
                    element.removeAttribute("readonly");
                }
            }
        }

        protected object _tag;

        /// <summary>
        /// Use Tag as Class Name
        /// </summary>
        public virtual object Tag
        {
            get { return _tag; }
            set
            {
                _tag = value;
                if(_tag is string)
                {
                    Element.className = (_tag + "");
                }
                else
                {
                    Element.className = "";
                }
                ApplyDisabled();
            }
        }

        public ControlCollection Controls { get; }
        private Font _font;
        public virtual Font Font { get { return _font; } set {
                _font = value;
                if(_font == null)
                {
                    Element.style.fontSize = "inherit";
                    Element.style.fontFamily = "inherit";
                }
                else
                {
                    Element.style.fontSize = _font.EmSize.ToString() + "pt";
                    Element.style.fontFamily = _font.FamilyName;
                }

            } }
        private bool _autoSize;
        protected bool _init;
        public virtual bool AutoSize { get { return _autoSize; } set {
                if(_init)
                {
                    _autoSize = value;

                    Size = _size;
                }                
            } }

        internal HTMLElement Element;

        protected Control(HTMLElement element)
        {            
            Element = element;

            Controls = new ControlCollection(this);

            Element.style.position = "absolute";
            Element.style.boxSizing = "borderbox";

            Element.style.padding = "0";


            Element.style.fontSize = "inherit";
            Element.style.fontFamily = "inherit";

            Visible = true;

            TabStop = true;

            Element.onclick = new HTMLElement.onclickFn((ev) =>
            {
                ev.stopPropagation();
                OnClick(EventArgs.Empty);
                return null;
            });

            _init = true;
        }

        protected virtual void OnClick(EventArgs e)
        {
            if (Click != null)
                Click(this, e);
        }

        public Padding Margin { get; set; }
        public Padding Padding { get; set; }

        public event EventHandler Click;

        public void SuspendLayout()
        {

        }
        public void ResumeLayout(bool performLayout)
        {

        }
        public void PerformLayout()
        {

        }
    }
}
