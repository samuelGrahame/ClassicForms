using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    //
    // Summary:
    //     Specifies the initial position of a form.
    public enum FormStartPosition
    {
        //
        // Summary:
        //     The position of the form is determined by the System.Windows.Forms.Control.Location
        //     property.
        Manual = 0,
        //
        // Summary:
        //     The form is centered on the current display, and has the dimensions specified
        //     in the form's size.
        CenterScreen = 1,
        //
        // Summary:
        //     The form is positioned at the Windows default location and has the dimensions
        //     specified in the form's size.
        WindowsDefaultLocation = 2,
        //
        // Summary:
        //     The form is positioned at the Windows default location and has the bounds determined
        //     by Windows default.
        WindowsDefaultBounds = 3,
        //
        // Summary:
        //     The form is centered within the bounds of its parent form.
        CenterParent = 4
    }
}
