#if BRIDGE
using System;
using System.ComponentModel;
using System.Globalization;
using System.Runtime.InteropServices;

namespace System.Drawing
{    

    public struct Size
    {
        public static readonly Size Empty;
        private int width;
        private int height;
        public Size(Point pt)
        {
            this.width = pt.X;
            this.height = pt.Y;
        }

        public Size(int width, int height)
        {
            this.width = width;
            this.height = height;
        }

        public static implicit operator SizeF(Size p) =>
            new SizeF((float)p.Width, (float)p.Height);

        public static Size operator +(Size sz1, Size sz2) =>
            Add(sz1, sz2);

        public static Size operator -(Size sz1, Size sz2) =>
            Subtract(sz1, sz2);

        public static bool operator ==(Size sz1, Size sz2) =>
            ((sz1.Width == sz2.Width) && (sz1.Height == sz2.Height));

        public static bool operator !=(Size sz1, Size sz2) =>
            !(sz1 == sz2);

        public static explicit operator Point(Size size) =>
            new Point(size.Width, size.Height);

        [Browsable(false)]
        public bool IsEmpty =>
            ((this.width == 0) && (this.height == 0));
        public int Width
        {
            get =>
                this.width;
            set
            {
                this.width = value;
            }
        }
        public int Height
        {
            get =>
                this.height;
            set
            {
                this.height = value;
            }
        }
        public static Size Add(Size sz1, Size sz2) =>
            new Size(sz1.Width + sz2.Width, sz1.Height + sz2.Height);

        public static Size Ceiling(SizeF value) =>
            new Size((int)Math.Ceiling((double)value.Width), (int)Math.Ceiling((double)value.Height));

        public static Size Subtract(Size sz1, Size sz2) =>
            new Size(sz1.Width - sz2.Width, sz1.Height - sz2.Height);

        public static Size Truncate(SizeF value) =>
            new Size((int)value.Width, (int)value.Height);

        public static Size Round(SizeF value) =>
            new Size((int)Math.Round((double)value.Width), (int)Math.Round((double)value.Height));

        public override bool Equals(object obj)
        {
            if (!(obj is Size))
            {
                return false;
            }
            Size size = (Size)obj;
            return ((size.width == this.width) && (size.height == this.height));
        }

        public override int GetHashCode() =>
            (this.width ^ this.height);

        public override string ToString()
        {
            string[] textArray1 = new string[] { "{Width=", this.width.ToString(), ", Height=", this.height.ToString(), "}" };
            return string.Concat(textArray1);
        }

        static Size()
        {
        }
    }
}
#endif