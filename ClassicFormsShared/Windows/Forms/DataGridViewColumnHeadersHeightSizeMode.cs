using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    //
    // Summary:
    //     Defines values for specifying how the height of the column headers is adjusted.
    public enum DataGridViewColumnHeadersHeightSizeMode
    {
        //
        // Summary:
        //     Users can adjust the column header height with the mouse.
        EnableResizing = 0,
        //
        // Summary:
        //     Users cannot adjust the column header height with the mouse.
        DisableResizing = 1,
        //
        // Summary:
        //     The column header height adjusts to fit the contents of all the column header
        //     cells.
        AutoSize = 2
    }
}
