using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    //
    // Summary:
    //     Specifies the different types of automatic scaling modes supported by Windows
    //     Forms.
    public enum AutoScaleMode
    {
        //
        // Summary:
        //     Automatic scaling is disabled.
        None = 0,
        //
        // Summary:
        //     Controls scale relative to the dimensions of the font the classes are using,
        //     which is typically the system font.
        Font = 1,
        //
        // Summary:
        //     Controls scale relative to the display resolution. Common resolutions are 96
        //     and 120 DPI.
        Dpi = 2,
        //
        // Summary:
        //     Controls scale according to the classes' parent's scaling mode. If there is no
        //     parent, automatic scaling is disabled.
        Inherit = 3
    }
}
