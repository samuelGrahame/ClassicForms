using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace System.Windows.Forms
{
    public class DataGridView : Control, ISupportInitialize
    {
        public DataGridViewColumnHeadersHeightSizeMode ColumnHeadersHeightSizeMode { get; set; }
        public DataGridViewColumnCollection Columns { get; }
        internal HTMLTableElement table;
        public DataGridView() : base(new HTMLDivElement())
        {
            table = new HTMLTableElement();
            Element.AppendChild(table);
            Columns = new DataGridViewColumnCollection(this, table);

            TabStop = false;
        }

        public void BeginInit()
        {
            
        }

        public void EndInit()
        {
            
        }

        public override object Tag
        {
            get { return _tag; }
            set
            {
                _tag = value;
                if (_tag is string)
                {
                    table.ClassName = (_tag + "");
                }
                else
                {
                    table.ClassName = "";
                }
                ApplyDisabled(table);
            }
        }
    }
}
