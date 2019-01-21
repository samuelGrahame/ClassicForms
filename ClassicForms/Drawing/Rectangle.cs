#if BRIDGE
namespace System.Drawing
{
    using System;
    using System.ComponentModel;
    using System.Globalization;
    using System.Runtime.InteropServices;

    public struct Rectangle
    {
        public static readonly Rectangle Empty;
        private int x;
        private int y;
        private int width;
        private int height;
        public Rectangle(int x, int y, int width, int height)
        {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }

        public Rectangle(Point location, System.Drawing.Size size)
        {
            this.x = location.X;
            this.y = location.Y;
            this.width = size.Width;
            this.height = size.Height;
        }

        public static Rectangle FromLTRB(int left, int top, int right, int bottom) =>
            new Rectangle(left, top, right - left, bottom - top);

        [Browsable(false)]
        public Point Location
        {
            get =>
                new Point(this.X, this.Y);
            set
            {
                this.X = value.X;
                this.Y = value.Y;
            }
        }
        [Browsable(false)]
        public System.Drawing.Size Size
        {
            get =>
                new System.Drawing.Size(this.Width, this.Height);
            set
            {
                this.Width = value.Width;
                this.Height = value.Height;
            }
        }
        public int X
        {
            get =>
                this.x;
            set
            {
                this.x = value;
            }
        }
        public int Y
        {
            get =>
                this.y;
            set
            {
                this.y = value;
            }
        }
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
        [Browsable(false)]
        public int Left =>
            this.X;
        [Browsable(false)]
        public int Top =>
            this.Y;
        [Browsable(false)]
        public int Right =>
            (this.X + this.Width);
        [Browsable(false)]
        public int Bottom =>
            (this.Y + this.Height);
        [Browsable(false)]
        public bool IsEmpty =>
            ((((this.height == 0) && (this.width == 0)) && (this.x == 0)) && (this.y == 0));
        public override bool Equals(object obj)
        {
            if (!(obj is Rectangle))
            {
                return false;
            }
            Rectangle rectangle = (Rectangle)obj;
            return ((((rectangle.X == this.X) && (rectangle.Y == this.Y)) && (rectangle.Width == this.Width)) && (rectangle.Height == this.Height));
        }

        public static bool operator ==(Rectangle left, Rectangle right) =>
            ((((left.X == right.X) && (left.Y == right.Y)) && (left.Width == right.Width)) && (left.Height == right.Height));

        public static bool operator !=(Rectangle left, Rectangle right) =>
            !(left == right);

        public static Rectangle Ceiling(RectangleF value) =>
            new Rectangle((int)Math.Ceiling((double)value.X), (int)Math.Ceiling((double)value.Y), (int)Math.Ceiling((double)value.Width), (int)Math.Ceiling((double)value.Height));

        public static Rectangle Truncate(RectangleF value) =>
            new Rectangle((int)value.X, (int)value.Y, (int)value.Width, (int)value.Height);

        public static Rectangle Round(RectangleF value) =>
            new Rectangle((int)Math.Round((double)value.X), (int)Math.Round((double)value.Y), (int)Math.Round((double)value.Width), (int)Math.Round((double)value.Height));

        public bool Contains(int x, int y) =>
            ((((this.X <= x) && (x < (this.X + this.Width))) && (this.Y <= y)) && (y < (this.Y + this.Height)));

        public bool Contains(Point pt) =>
            this.Contains(pt.X, pt.Y);

        public bool Contains(Rectangle rect) =>
            ((((this.X <= rect.X) && ((rect.X + rect.Width) <= (this.X + this.Width))) && (this.Y <= rect.Y)) && ((rect.Y + rect.Height) <= (this.Y + this.Height)));

        public override int GetHashCode() =>
            (((this.X ^ ((this.Y << 13) | (this.Y >> 0x13))) ^ ((this.Width << 0x1a) | (this.Width >> 6))) ^ ((this.Height << 7) | (this.Height >> 0x19)));

        public void Inflate(int width, int height)
        {
            this.X -= width;
            this.Y -= height;
            this.Width += 2 * width;
            this.Height += 2 * height;
        }

        public void Inflate(System.Drawing.Size size)
        {
            this.Inflate(size.Width, size.Height);
        }

        public static Rectangle Inflate(Rectangle rect, int x, int y)
        {
            Rectangle rectangle = rect;
            rectangle.Inflate(x, y);
            return rectangle;
        }

        public void Intersect(Rectangle rect)
        {
            Rectangle rectangle = Intersect(rect, this);
            this.X = rectangle.X;
            this.Y = rectangle.Y;
            this.Width = rectangle.Width;
            this.Height = rectangle.Height;
        }

        public static Rectangle Intersect(Rectangle a, Rectangle b)
        {
            int x = Math.Max(a.X, b.X);
            int num2 = Math.Min((int)(a.X + a.Width), (int)(b.X + b.Width));
            int y = Math.Max(a.Y, b.Y);
            int num4 = Math.Min((int)(a.Y + a.Height), (int)(b.Y + b.Height));
            if ((num2 >= x) && (num4 >= y))
            {
                return new Rectangle(x, y, num2 - x, num4 - y);
            }
            return Empty;
        }

        public bool IntersectsWith(Rectangle rect) =>
            ((((rect.X < (this.X + this.Width)) && (this.X < (rect.X + rect.Width))) && (rect.Y < (this.Y + this.Height))) && (this.Y < (rect.Y + rect.Height)));

        public static Rectangle Union(Rectangle a, Rectangle b)
        {
            int x = Math.Min(a.X, b.X);
            int num2 = Math.Max((int)(a.X + a.Width), (int)(b.X + b.Width));
            int y = Math.Min(a.Y, b.Y);
            int num4 = Math.Max((int)(a.Y + a.Height), (int)(b.Y + b.Height));
            return new Rectangle(x, y, num2 - x, num4 - y);
        }

        public void Offset(Point pos)
        {
            this.Offset(pos.X, pos.Y);
        }

        public void Offset(int x, int y)
        {
            this.X += x;
            this.Y += y;
        }

        public override string ToString()
        {
            string[] textArray1 = new string[] { "{X=", this.X.ToString(), ",Y=", this.Y.ToString(), ",Width=", this.Width.ToString(), ",Height=", this.Height.ToString(), "}" };
            return string.Concat(textArray1);
        }

        static Rectangle()
        {
        }
    }
}
#endif