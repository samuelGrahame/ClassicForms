using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public struct Padding
    {
        public int Left, Top, Right, Bottom;
        public Padding(int left, int top, int right, int bottom)
        {
            Left = left; Top = top; Right = right; Bottom = bottom;
        }

        public Padding(int all)
        {
            Left = all; Top = all; Right = all; Bottom = all;
        }
    }
}
