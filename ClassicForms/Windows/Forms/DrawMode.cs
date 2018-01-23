using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    //
    // Summary:
    //     Specifies how the elements of a control are drawn.
    public enum DrawMode
    {
        //
        // Summary:
        //     All the elements in a control are drawn by the operating system and are of the
        //     same size.
        Normal = 0,
        //
        // Summary:
        //     All the elements in the control are drawn manually and are of the same size.
        OwnerDrawFixed = 1,
        //
        // Summary:
        //     All the elements in the control are drawn manually and can differ in size.
        OwnerDrawVariable = 2
    }
}
