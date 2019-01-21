#if BRIDGE
// TODO - SUPPORT BLAZOR GridView
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

            Element.setAttribute("scope", "table");
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
                    var str = (_tag + "");
                    if (str.Contains(","))
                    {
                        var arry = str.Split(',');
                        Element.className = arry[0];
                        if (arry.Length >= 2)
                        {
                            table.className = arry[1];
                            if (arry.Length >= 3)
                            {
                                Columns.header.className = arry[2];
                            }
                            else
                            {
                                Columns.header.className = "";
                            }
                        }
                        else
                        {
                            table.className = "";
                            Columns.header.className = "";
                        }
                    }
                    else
                    {
                        Element.className = str;
                        table.className = "";
                        Columns.header.className = "";
                    }
                }
                else
                {
                    table.className = "";
                    Element.className = "";
                    Columns.header.className = "";
                }
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
#endif