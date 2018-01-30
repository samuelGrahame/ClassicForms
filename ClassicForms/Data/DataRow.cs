using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Data
{
    public class DataRow
    {
        internal HTMLTableRowElement Element;        
        internal List<object> data;
        public DataColumnCollection Columns { get; }
        internal DataRow(DataColumnCollection columns)
        {
            Columns = columns;
            data = new List<object>(Columns.Count);            
            Element = new HTMLTableRowElement();
        }

        public new object this[string columnName] { get {
                return this[Columns.GetColumnIndex(columnName)];
            } set {
                this[Columns.GetColumnIndex(columnName)] = value;
            } }
        
        public object this[int columnIndex] { get {
                if (columnIndex < 0 || columnIndex > Columns.Count - 1)
                    return null;

                return data[columnIndex];
            } set {
                if (columnIndex < 0)
                    return;
                if (columnIndex > Columns.Count - 1)
                    return;

                if (columnIndex > data.Count - 1)
                {
                    for (int i = data.Count; i < columnIndex + 1; i++)
                    {
                        var dc = new HTMLTableDataCellElement();

                        if (i == columnIndex)
                        {
                            data.Add(value);
                            dc.innerText = (value + "");
                            
                            Element.appendChild(dc);

                            return;
                        }
                        else
                        {                            
                            Element.appendChild(dc);                            
                            data.Add(null);
                        }
                    }
                }
                else
                {
                    Element.children[columnIndex].As<HTMLElement>().innerText = (value + "");
                    data[columnIndex] = value;
                }                
            } }       
    }
}
