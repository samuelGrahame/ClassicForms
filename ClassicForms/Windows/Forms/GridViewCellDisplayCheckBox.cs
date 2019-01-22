using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class GridViewCellDisplayCheckBox : GridViewCellDisplay
    {
        public static string resource_checked = "checked";

        public override HTMLElement OnCreate(DataGridView gridView, int dataRowIndex, int columnIndex)
        {
            var value = gridView.GetRowCellValue(dataRowIndex, columnIndex);

            var cell = Helper.Element(new HTMLTableCellElement());
            var input =  new CheckBox();
            input.SetBoundsFull();
            input.Checked = value.As<bool>();
            input.Element.style.margin = "0";
            cell.appendChild(input);

            return cell;
        }
    }
}
