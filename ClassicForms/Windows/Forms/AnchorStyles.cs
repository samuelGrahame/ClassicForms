using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    //
    // Summary:
    //     Specifies how a control anchors to the edges of its container.    
    [Flags]
    public enum AnchorStyles
    {
        //
        // Summary:
        //     The control is not anchored to any edges of its container.
        None = 0,
        //
        // Summary:
        //     The control is anchored to the top edge of its container.
        Top = 1,
        //
        // Summary:
        //     The control is anchored to the bottom edge of its container.
        Bottom = 2,
        //
        // Summary:
        //     The control is anchored to the left edge of its container.
        Left = 4,
        //
        // Summary:
        //     The control is anchored to the right edge of its container.
        Right = 8
    }
}
