using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

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
    }
}
