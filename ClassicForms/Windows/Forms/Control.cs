using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class Control
    {
        public string Name { get { return Element.GetAttribute("Name"); } set { Element.SetAttribute("Name", value); } }
        private Point _location;
        public Point Location
        {
            get { return _location; }
            set
            {
                _location = value;

                Element.Style.Left = _location.X + "px";
                Element.Style.Top = _location.Y + "px";

            }
        }

        private Size _size;
        public Size Size { get { return _size; } set {
                _size = value;
                if(_autoSize)
                {
                    Element.Style.Width = "auto";
                    Element.Style.Height = "auto";
                }
                else
                {
                    Element.Style.Width = _size.Width + "px";
                    Element.Style.Height = _size.Height + "px";
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
                    Element.TabIndex = value;
                }
                else
                {
                    Element.RemoveAttribute("TabIndex");                    
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
                Element.Style.BackgroundColor = _backColor.ToHtml();
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
                if(element.ClassList.Contains("disabled"))
                {
                    element.ClassList.Remove("disabled");
                    element.RemoveAttribute("disabled");
                }
            }
            else
            {
                if (!element.ClassList.Contains("disabled"))
                {
                    element.ClassList.Add("disabled");
                    element.SetAttribute("disabled", "");
                }
            }
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
                if (!element.ClassList.Contains("readonly"))
                {
                    element.ClassList.Add("readonly");
                    element.SetAttribute("readonly", "");
                }
            }
            else
            {
                if(element.ClassList.Contains("readonly"))
                {
                    element.ClassList.Remove("readonly");
                    element.RemoveAttribute("readonly");
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
                    Element.ClassName = (_tag + "");
                }
                else
                {
                    Element.ClassName = "";
                }
                ApplyDisabled();
            }
        }

        public ControlCollection Controls { get; }
        public virtual Font Font { get; set; }
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

            Element.Style.Position = Position.Absolute;
            Element.Style.BoxSizing = BoxSizing.BorderBox;

            TabStop = true;

            Element.OnClick = (ev) =>
            {
                ev.StopPropagation();
                OnClick(EventArgs.Empty);
            };
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
