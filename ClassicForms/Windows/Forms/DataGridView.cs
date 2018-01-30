using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class DataGridView : Control, ISupportInitialize
    {
        public DataGridViewColumnHeadersHeightSizeMode ColumnHeadersHeightSizeMode { get; set; }
        public DataGridViewColumnCollection Columns { get; }
        public DataGridViewRowCollection Rows { get; }

        internal HTMLTableElement table;
        public DataGridView() : base(new HTMLDivElement())
        {
            table = new HTMLTableElement();
            Element.appendChild(table);

            Element.style.overflow = "auto";

            Columns = new DataGridViewColumnCollection(this, table);
            Rows = new DataGridViewRowCollection(this, table);

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
                    table.className = (_tag + "");
                }
                else
                {
                    table.className = "";
                }
                ApplyDisabled(table);
            }
        }

        private void OnNewRowEvent(object sender, NewRowEventArgs args)
        {
            Rows.Add(args.Row);
        }

        private object dataSource;
        public object DataSource { get { return dataSource; } set {
                if(value != dataSource)
                {
                    if(dataSource != null)
                    {
                        if(dataSource is DataTable)
                        {
                            var dt = dataSource.As<DataTable>();

                            dt.NewRowEvent -= OnNewRowEvent;
                        }
                    }

                    dataSource = value;

                    if (dataSource != null && dataSource is DataTable)
                    {
                        var dt = dataSource.As<DataTable>();

                        dt.NewRowEvent += OnNewRowEvent;
                    }
                }                
            } }
    }
}
