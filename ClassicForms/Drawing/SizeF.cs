#if BRIDGE
using System;
using System.ComponentModel;
using System.Globalization;
using System.Runtime.InteropServices;

namespace System.Drawing
{
    

    public struct SizeF
    {
        public static readonly SizeF Empty;
        private float width;
        private float height;
        public SizeF(SizeF size)
        {
            this.width = size.width;
            this.height = size.height;
        }

        public SizeF(PointF pt)
        {
            this.width = pt.X;
            this.height = pt.Y;
        }

        public SizeF(float width, float height)
        {
            this.width = width;
            this.height = height;
        }

        public static SizeF operator +(SizeF sz1, SizeF sz2) =>
            Add(sz1, sz2);

        public static SizeF operator -(SizeF sz1, SizeF sz2) =>
            Subtract(sz1, sz2);

        public static bool operator ==(SizeF sz1, SizeF sz2) =>
            ((sz1.Width == sz2.Width) && (sz1.Height == sz2.Height));

        public static bool operator !=(SizeF sz1, SizeF sz2) =>
            !(sz1 == sz2);

        public static explicit operator PointF(SizeF size) =>
            new PointF(size.Width, size.Height);

        [Browsable(false)]
        public bool IsEmpty =>
            ((this.width == 0f) && (this.height == 0f));
        public float Width
        {
            get =>
                this.width;
            set
            {
                this.width = value;
            }
        }
        public float Height
        {
            get =>
                this.height;
            set
            {
                this.height = value;
            }
        }
        public static SizeF Add(SizeF sz1, SizeF sz2) =>
            new SizeF(sz1.Width + sz2.Width, sz1.Height + sz2.Height);

        public static SizeF Subtract(SizeF sz1, SizeF sz2) =>
            new SizeF(sz1.Width - sz2.Width, sz1.Height - sz2.Height);

        public override bool Equals(object obj)
        {
            if (!(obj is SizeF))
            {
                return false;
            }
            SizeF ef = (SizeF)obj;
            return (((ef.Width == this.Width) && (ef.Height == this.Height)) && ef.GetType().Equals(base.GetType()));
        }

        public override int GetHashCode() =>
            base.GetHashCode();

        public PointF ToPointF() =>
            ((PointF)this);

        public Size ToSize() =>
            Size.Truncate(this);

        public override string ToString()
        {
            string[] textArray1 = new string[] { "{Width=", this.width.ToString(CultureInfo.CurrentCulture), ", Height=", this.height.ToString(CultureInfo.CurrentCulture), "}" };
            return string.Concat(textArray1);
        }

        static SizeF()
        {
        }
    }
}
#endif