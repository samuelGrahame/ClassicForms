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


        public int TabIndex { get { return Element.TabIndex; } set { Element.TabIndex = value; } }
        public virtual string Text { get; set; }

        public ControlCollection Controls { get; }

        internal HTMLElement Element;

        protected Control(HTMLElement element)
        {            
            Element = element;

            Controls = new ControlCollection(this);

            Element.Style.Position = Position.Absolute;
            Element.Style.BoxSizing = BoxSizing.BorderBox;
        }
    }
}
