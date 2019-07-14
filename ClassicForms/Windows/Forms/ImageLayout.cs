using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    //
    // Summary:
    //     Specifies the position of the image on the control.
    public enum ImageLayout
    {
        //
        // Summary:
        //     The image is left-aligned at the top across the control's client rectangle.
        None = 0,
        //
        // Summary:
        //     The image is tiled across the control's client rectangle.
        Tile = 1,
        //
        // Summary:
        //     The image is centered within the control's client rectangle.
        Center = 2,
        //
        // Summary:
        //     The image is streched across the control's client rectangle.
        Stretch = 3,
        //
        // Summary:
        //     The image is enlarged within the control's client rectangle.
        Zoom = 4
    }
}
