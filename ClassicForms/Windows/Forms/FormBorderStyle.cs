using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public enum FormBorderStyle
    {
        //
        // Summary:
        //     No border.
        None = 0,
        //
        // Summary:
        //     A fixed, single-line border.
        FixedSingle = 1,
        //
        // Summary:
        //     A fixed, three-dimensional border.
        Fixed3D = 2,
        //
        // Summary:
        //     A thick, fixed dialog-style border.
        FixedDialog = 3,
        //
        // Summary:
        //     A resizable border.
        Sizable = 4,
        //
        // Summary:
        //     A tool window border that is not resizable. A tool window does not appear in
        //     the taskbar or in the window that appears when the user presses ALT+TAB. Although
        //     forms that specify System.Windows.Forms.FormBorderStyle.FixedToolWindow typically
        //     are not shown in the taskbar, you must also ensure that the System.Windows.Forms.Form.ShowInTaskbar
        //     property is set to false, since its default value is true.
        FixedToolWindow = 5,
        //
        // Summary:
        //     A resizable tool window border. A tool window does not appear in the taskbar
        //     or in the window that appears when the user presses ALT+TAB.
        SizableToolWindow = 6
    }
}
