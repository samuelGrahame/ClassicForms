using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

namespace System.Windows.Forms
{
    public class ComboBox : Control
    {
        public ComboBox() : base(new HTMLSelectElement())
        {
            Items = new ObjectCollection(this);
        }
        public ObjectCollection Items { get; }
        public virtual bool FormattingEnabled { get; set; }
        public virtual int ItemHeight { get; set; }
        public DrawMode DrawMode { get; set; }
    }

    public class ListBox : Control
    {
        public ListBox() : base(new HTMLSelectElement())
        {
            Element.As<HTMLSelectElement>().multiple = true;
            Items = new ObjectCollection(this);
        }
        public ObjectCollection Items { get; }
        public virtual bool FormattingEnabled { get; set; }
        public virtual int ItemHeight { get; set; }
    }
}
