using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class DataGridViewColumn
    {
        internal HTMLTableHeaderCellElement Element;
        public string HeaderText {
            get { return Element.TextContent; }
            set
            {                
                Element.TextContent = value;
            }
        }
        public string Name { get { return Element.GetAttribute("Name"); } set { Element.SetAttribute("Name", value); } }

        public DataGridViewColumn()
        {
            Element = new HTMLTableHeaderCellElement();
        }

    }
}
