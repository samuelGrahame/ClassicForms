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

                Element.Style.Width = _size.Width + "px";
                Element.Style.Height = _size.Height + "px";

            } }

        private bool _tabStop;
        public bool TabStop { get { return _tabStop; } set {
                _tabStop = value;
                TabIndex = _tabIndex;
            } }

        private int _tabIndex;
        public int TabIndex { get { return _tabIndex; } set {
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

        private object _tag;

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
            }
        }

        public ControlCollection Controls { get; }
        public virtual Font Font { get; set; }

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
        }

        protected virtual void OnClick(EventArgs e)
        {
            if (Click != null)
                Click(this, e);
        }

        public event EventHandler Click;
    }
}
