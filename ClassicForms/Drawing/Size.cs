﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Drawing
{
    public struct Size
    {
        public int Width;
        public int Height;

        public static Size Empty = new Size(0, 0);

        public Size(int width, int height)
        {
            Width = width;
            Height = height;
        }


    }
}