#if BRIDGE
using System;
using System.ComponentModel;
using System.Globalization;
using System.Runtime.InteropServices;

namespace System.Drawing
{    
    public struct PointF
    {
        public static readonly PointF Empty;
        private float x;
        private float y;
        public PointF(float x, float y)
        {
            this.x = x;
            this.y = y;
        }

        [Browsable(false)]
        public bool IsEmpty =>
            ((this.x == 0f) && (this.y == 0f));
        public float X
        {
            get =>
                this.x;
            set
            {
                this.x = value;
            }
        }
        public float Y
        {
            get =>
                this.y;
            set
            {
                this.y = value;
            }
        }
        public static PointF operator +(PointF pt, Size sz) =>
            Add(pt, sz);

        public static PointF operator -(PointF pt, Size sz) =>
            Subtract(pt, sz);

        public static PointF operator +(PointF pt, SizeF sz) =>
            Add(pt, sz);

        public static PointF operator -(PointF pt, SizeF sz) =>
            Subtract(pt, sz);

        public static bool operator ==(PointF left, PointF right) =>
            ((left.X == right.X) && (left.Y == right.Y));

        public static bool operator !=(PointF left, PointF right) =>
            !(left == right);

        public static PointF Add(PointF pt, Size sz) =>
            new PointF(pt.X + sz.Width, pt.Y + sz.Height);

        public static PointF Subtract(PointF pt, Size sz) =>
            new PointF(pt.X - sz.Width, pt.Y - sz.Height);

        public static PointF Add(PointF pt, SizeF sz) =>
            new PointF(pt.X + sz.Width, pt.Y + sz.Height);

        public static PointF Subtract(PointF pt, SizeF sz) =>
            new PointF(pt.X - sz.Width, pt.Y - sz.Height);

        public override bool Equals(object obj)
        {
            if (!(obj is PointF))
            {
                return false;
            }
            PointF tf = (PointF)obj;
            return (((tf.X == this.X) && (tf.Y == this.Y)) && tf.GetType().Equals(base.GetType()));
        }

        public override int GetHashCode() =>
            base.GetHashCode();

        public override string ToString()
        {
            object[] args = new object[] { this.x, this.y };
            return string.Format(CultureInfo.CurrentCulture, "{{X={0}, Y={1}}}", args);
        }

        static PointF()
        {
        }
    }
}
#endif