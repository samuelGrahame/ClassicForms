using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Drawing
{
    public struct Color
    {
        public static readonly Color Empty;
        private static short StateKnownColorValid;
        private static short StateARGBValueValid;
        private static short StateValueMask;
        private static short StateNameValid;
        private static long NotDefinedValue;
        private const int ARGBAlphaShift = 0x18;
        private const int ARGBRedShift = 0x10;
        private const int ARGBGreenShift = 8;
        private const int ARGBBlueShift = 0;
        private readonly string name;
        private readonly long value;
        private readonly short knownColor;
        private readonly short state;

        public static Color Transparent
        {
            get
            {
                return new Color(KnownColor.Transparent);
            }
        }

        public static Color AliceBlue
        {
            get
            {
                return new Color(KnownColor.AliceBlue);
            }
        }

        public static Color AntiqueWhite
        {
            get
            {
                return new Color(KnownColor.AntiqueWhite);
            }
        }

        public static Color Aqua
        {
            get
            {
                return new Color(KnownColor.Aqua);
            }
        }

        public static Color Aquamarine
        {
            get
            {
                return new Color(KnownColor.Aquamarine);
            }
        }

        public static Color Azure
        {
            get
            {
                return new Color(KnownColor.Azure);
            }
        }

        public static Color Beige
        {
            get
            {
                return new Color(KnownColor.Beige);
            }
        }

        public static Color Bisque
        {
            get
            {
                return new Color(KnownColor.Bisque);
            }
        }

        public static Color Black
        {
            get
            {
                return new Color(KnownColor.Black);
            }
        }

        public static Color BlanchedAlmond
        {
            get
            {
                return new Color(KnownColor.BlanchedAlmond);
            }
        }

        public static Color Blue
        {
            get
            {
                return new Color(KnownColor.Blue);
            }
        }

        public static Color BlueViolet
        {
            get
            {
                return new Color(KnownColor.BlueViolet);
            }
        }

        public static Color Brown
        {
            get
            {
                return new Color(KnownColor.Brown);
            }
        }

        public static Color BurlyWood
        {
            get
            {
                return new Color(KnownColor.BurlyWood);
            }
        }

        public static Color CadetBlue
        {
            get
            {
                return new Color(KnownColor.CadetBlue);
            }
        }

        public static Color Chartreuse
        {
            get
            {
                return new Color(KnownColor.Chartreuse);
            }
        }

        public static Color Chocolate
        {
            get
            {
                return new Color(KnownColor.Chocolate);
            }
        }

        public static Color Coral
        {
            get
            {
                return new Color(KnownColor.Coral);
            }
        }

        public static Color CornflowerBlue
        {
            get
            {
                return new Color(KnownColor.CornflowerBlue);
            }
        }

        public static Color Cornsilk
        {
            get
            {
                return new Color(KnownColor.Cornsilk);
            }
        }

        public static Color Crimson
        {
            get
            {
                return new Color(KnownColor.Crimson);
            }
        }

        public static Color Cyan
        {
            get
            {
                return new Color(KnownColor.Cyan);
            }
        }

        public static Color DarkBlue
        {
            get
            {
                return new Color(KnownColor.DarkBlue);
            }
        }

        public static Color DarkCyan
        {
            get
            {
                return new Color(KnownColor.DarkCyan);
            }
        }

        public static Color DarkGoldenrod
        {
            get
            {
                return new Color(KnownColor.DarkGoldenrod);
            }
        }

        public static Color DarkGray
        {
            get
            {
                return new Color(KnownColor.DarkGray);
            }
        }

        public static Color DarkGreen
        {
            get
            {
                return new Color(KnownColor.DarkGreen);
            }
        }

        public static Color DarkKhaki
        {
            get
            {
                return new Color(KnownColor.DarkKhaki);
            }
        }

        public static Color DarkMagenta
        {
            get
            {
                return new Color(KnownColor.DarkMagenta);
            }
        }

        public static Color DarkOliveGreen
        {
            get
            {
                return new Color(KnownColor.DarkOliveGreen);
            }
        }

        public static Color DarkOrange
        {
            get
            {
                return new Color(KnownColor.DarkOrange);
            }
        }

        public static Color DarkOrchid
        {
            get
            {
                return new Color(KnownColor.DarkOrchid);
            }
        }

        public static Color DarkRed
        {
            get
            {
                return new Color(KnownColor.DarkRed);
            }
        }

        public static Color DarkSalmon
        {
            get
            {
                return new Color(KnownColor.DarkSalmon);
            }
        }

        public static Color DarkSeaGreen
        {
            get
            {
                return new Color(KnownColor.DarkSeaGreen);
            }
        }

        public static Color DarkSlateBlue
        {
            get
            {
                return new Color(KnownColor.DarkSlateBlue);
            }
        }

        public static Color DarkSlateGray
        {
            get
            {
                return new Color(KnownColor.DarkSlateGray);
            }
        }

        public static Color DarkTurquoise
        {
            get
            {
                return new Color(KnownColor.DarkTurquoise);
            }
        }

        public static Color DarkViolet
        {
            get
            {
                return new Color(KnownColor.DarkViolet);
            }
        }

        public static Color DeepPink
        {
            get
            {
                return new Color(KnownColor.DeepPink);
            }
        }

        public static Color DeepSkyBlue
        {
            get
            {
                return new Color(KnownColor.DeepSkyBlue);
            }
        }

        public static Color DimGray
        {
            get
            {
                return new Color(KnownColor.DimGray);
            }
        }

        public static Color DodgerBlue
        {
            get
            {
                return new Color(KnownColor.DodgerBlue);
            }
        }

        public static Color Firebrick
        {
            get
            {
                return new Color(KnownColor.Firebrick);
            }
        }

        public static Color FloralWhite
        {
            get
            {
                return new Color(KnownColor.FloralWhite);
            }
        }

        public static Color ForestGreen
        {
            get
            {
                return new Color(KnownColor.ForestGreen);
            }
        }

        public static Color Fuchsia
        {
            get
            {
                return new Color(KnownColor.Fuchsia);
            }
        }

        public static Color Gainsboro
        {
            get
            {
                return new Color(KnownColor.Gainsboro);
            }
        }

        public static Color GhostWhite
        {
            get
            {
                return new Color(KnownColor.GhostWhite);
            }
        }

        public static Color Gold
        {
            get
            {
                return new Color(KnownColor.Gold);
            }
        }

        public static Color Goldenrod
        {
            get
            {
                return new Color(KnownColor.Goldenrod);
            }
        }

        public static Color Gray
        {
            get
            {
                return new Color(KnownColor.Gray);
            }
        }

        public static Color Green
        {
            get
            {
                return new Color(KnownColor.Green);
            }
        }

        public static Color GreenYellow
        {
            get
            {
                return new Color(KnownColor.GreenYellow);
            }
        }

        public static Color Honeydew
        {
            get
            {
                return new Color(KnownColor.Honeydew);
            }
        }

        public static Color HotPink
        {
            get
            {
                return new Color(KnownColor.HotPink);
            }
        }

        public static Color IndianRed
        {
            get
            {
                return new Color(KnownColor.IndianRed);
            }
        }

        public static Color Indigo
        {
            get
            {
                return new Color(KnownColor.Indigo);
            }
        }

        public static Color Ivory
        {
            get
            {
                return new Color(KnownColor.Ivory);
            }
        }

        public static Color Khaki
        {
            get
            {
                return new Color(KnownColor.Khaki);
            }
        }

        public static Color Lavender
        {
            get
            {
                return new Color(KnownColor.Lavender);
            }
        }

        public static Color LavenderBlush
        {
            get
            {
                return new Color(KnownColor.LavenderBlush);
            }
        }

        public static Color LawnGreen
        {
            get
            {
                return new Color(KnownColor.LawnGreen);
            }
        }

        public static Color LemonChiffon
        {
            get
            {
                return new Color(KnownColor.LemonChiffon);
            }
        }

        public static Color LightBlue
        {
            get
            {
                return new Color(KnownColor.LightBlue);
            }
        }

        public static Color LightCoral
        {
            get
            {
                return new Color(KnownColor.LightCoral);
            }
        }

        public static Color LightCyan
        {
            get
            {
                return new Color(KnownColor.LightCyan);
            }
        }

        public static Color LightGoldenrodYellow
        {
            get
            {
                return new Color(KnownColor.LightGoldenrodYellow);
            }
        }

        public static Color LightGreen
        {
            get
            {
                return new Color(KnownColor.LightGreen);
            }
        }

        public static Color LightGray
        {
            get
            {
                return new Color(KnownColor.LightGray);
            }
        }

        public static Color LightPink
        {
            get
            {
                return new Color(KnownColor.LightPink);
            }
        }

        public static Color LightSalmon
        {
            get
            {
                return new Color(KnownColor.LightSalmon);
            }
        }

        public static Color LightSeaGreen
        {
            get
            {
                return new Color(KnownColor.LightSeaGreen);
            }
        }

        public static Color LightSkyBlue
        {
            get
            {
                return new Color(KnownColor.LightSkyBlue);
            }
        }

        public static Color LightSlateGray
        {
            get
            {
                return new Color(KnownColor.LightSlateGray);
            }
        }

        public static Color LightSteelBlue
        {
            get
            {
                return new Color(KnownColor.LightSteelBlue);
            }
        }

        public static Color LightYellow
        {
            get
            {
                return new Color(KnownColor.LightYellow);
            }
        }

        public static Color Lime
        {
            get
            {
                return new Color(KnownColor.Lime);
            }
        }

        public static Color LimeGreen
        {
            get
            {
                return new Color(KnownColor.LimeGreen);
            }
        }

        public static Color Linen
        {
            get
            {
                return new Color(KnownColor.Linen);
            }
        }

        public static Color Magenta
        {
            get
            {
                return new Color(KnownColor.Magenta);
            }
        }

        public static Color Maroon
        {
            get
            {
                return new Color(KnownColor.Maroon);
            }
        }

        public static Color MediumAquamarine
        {
            get
            {
                return new Color(KnownColor.MediumAquamarine);
            }
        }

        public static Color MediumBlue
        {
            get
            {
                return new Color(KnownColor.MediumBlue);
            }
        }

        public static Color MediumOrchid
        {
            get
            {
                return new Color(KnownColor.MediumOrchid);
            }
        }

        public static Color MediumPurple
        {
            get
            {
                return new Color(KnownColor.MediumPurple);
            }
        }

        public static Color MediumSeaGreen
        {
            get
            {
                return new Color(KnownColor.MediumSeaGreen);
            }
        }

        public static Color MediumSlateBlue
        {
            get
            {
                return new Color(KnownColor.MediumSlateBlue);
            }
        }

        public static Color MediumSpringGreen
        {
            get
            {
                return new Color(KnownColor.MediumSpringGreen);
            }
        }

        public static Color MediumTurquoise
        {
            get
            {
                return new Color(KnownColor.MediumTurquoise);
            }
        }

        public static Color MediumVioletRed
        {
            get
            {
                return new Color(KnownColor.MediumVioletRed);
            }
        }

        public static Color MidnightBlue
        {
            get
            {
                return new Color(KnownColor.MidnightBlue);
            }
        }

        public static Color MintCream
        {
            get
            {
                return new Color(KnownColor.MintCream);
            }
        }

        public static Color MistyRose
        {
            get
            {
                return new Color(KnownColor.MistyRose);
            }
        }

        public static Color Moccasin
        {
            get
            {
                return new Color(KnownColor.Moccasin);
            }
        }

        public static Color NavajoWhite
        {
            get
            {
                return new Color(KnownColor.NavajoWhite);
            }
        }

        public static Color Navy
        {
            get
            {
                return new Color(KnownColor.Navy);
            }
        }

        public static Color OldLace
        {
            get
            {
                return new Color(KnownColor.OldLace);
            }
        }

        public static Color Olive
        {
            get
            {
                return new Color(KnownColor.Olive);
            }
        }

        public static Color OliveDrab
        {
            get
            {
                return new Color(KnownColor.OliveDrab);
            }
        }

        public static Color Orange
        {
            get
            {
                return new Color(KnownColor.Orange);
            }
        }

        public static Color OrangeRed
        {
            get
            {
                return new Color(KnownColor.OrangeRed);
            }
        }

        public static Color Orchid
        {
            get
            {
                return new Color(KnownColor.Orchid);
            }
        }

        public static Color PaleGoldenrod
        {
            get
            {
                return new Color(KnownColor.PaleGoldenrod);
            }
        }

        public static Color PaleGreen
        {
            get
            {
                return new Color(KnownColor.PaleGreen);
            }
        }

        public static Color PaleTurquoise
        {
            get
            {
                return new Color(KnownColor.PaleTurquoise);
            }
        }

        public static Color PaleVioletRed
        {
            get
            {
                return new Color(KnownColor.PaleVioletRed);
            }
        }

        public static Color PapayaWhip
        {
            get
            {
                return new Color(KnownColor.PapayaWhip);
            }
        }

        public static Color PeachPuff
        {
            get
            {
                return new Color(KnownColor.PeachPuff);
            }
        }

        public static Color Peru
        {
            get
            {
                return new Color(KnownColor.Peru);
            }
        }

        public static Color Pink
        {
            get
            {
                return new Color(KnownColor.Pink);
            }
        }

        public static Color Plum
        {
            get
            {
                return new Color(KnownColor.Plum);
            }
        }

        public static Color PowderBlue
        {
            get
            {
                return new Color(KnownColor.PowderBlue);
            }
        }

        public static Color Purple
        {
            get
            {
                return new Color(KnownColor.Purple);
            }
        }

        public static Color Red
        {
            get
            {
                return new Color(KnownColor.Red);
            }
        }

        public static Color RosyBrown
        {
            get
            {
                return new Color(KnownColor.RosyBrown);
            }
        }

        public static Color RoyalBlue
        {
            get
            {
                return new Color(KnownColor.RoyalBlue);
            }
        }

        public static Color SaddleBrown
        {
            get
            {
                return new Color(KnownColor.SaddleBrown);
            }
        }

        public static Color Salmon
        {
            get
            {
                return new Color(KnownColor.Salmon);
            }
        }

        public static Color SandyBrown
        {
            get
            {
                return new Color(KnownColor.SandyBrown);
            }
        }

        public static Color SeaGreen
        {
            get
            {
                return new Color(KnownColor.SeaGreen);
            }
        }

        public static Color SeaShell
        {
            get
            {
                return new Color(KnownColor.SeaShell);
            }
        }

        public static Color Sienna
        {
            get
            {
                return new Color(KnownColor.Sienna);
            }
        }

        public static Color Silver
        {
            get
            {
                return new Color(KnownColor.Silver);
            }
        }

        public static Color SkyBlue
        {
            get
            {
                return new Color(KnownColor.SkyBlue);
            }
        }

        public static Color SlateBlue
        {
            get
            {
                return new Color(KnownColor.SlateBlue);
            }
        }

        public static Color SlateGray
        {
            get
            {
                return new Color(KnownColor.SlateGray);
            }
        }

        public static Color Snow
        {
            get
            {
                return new Color(KnownColor.Snow);
            }
        }

        public static Color SpringGreen
        {
            get
            {
                return new Color(KnownColor.SpringGreen);
            }
        }

        public static Color SteelBlue
        {
            get
            {
                return new Color(KnownColor.SteelBlue);
            }
        }

        public static Color Tan
        {
            get
            {
                return new Color(KnownColor.Tan);
            }
        }

        public static Color Teal
        {
            get
            {
                return new Color(KnownColor.Teal);
            }
        }

        public static Color Thistle
        {
            get
            {
                return new Color(KnownColor.Thistle);
            }
        }

        public static Color Tomato
        {
            get
            {
                return new Color(KnownColor.Tomato);
            }
        }

        public static Color Turquoise
        {
            get
            {
                return new Color(KnownColor.Turquoise);
            }
        }

        public static Color Violet
        {
            get
            {
                return new Color(KnownColor.Violet);
            }
        }

        public static Color Wheat
        {
            get
            {
                return new Color(KnownColor.Wheat);
            }
        }

        public static Color White
        {
            get
            {
                return new Color(KnownColor.White);
            }
        }

        public static Color WhiteSmoke
        {
            get
            {
                return new Color(KnownColor.WhiteSmoke);
            }
        }

        public static Color Yellow
        {
            get
            {
                return new Color(KnownColor.Yellow);
            }
        }

        public static Color YellowGreen
        {
            get
            {
                return new Color(KnownColor.YellowGreen);
            }
        }

        internal Color(KnownColor knownColor)
        {            
            this.value = 0L;
            this.state = StateKnownColorValid;
            this.name = null;
            this.knownColor = (short)knownColor;            
        }

        private Color(long value, short state, string name, KnownColor knownColor)
        {
            this.value = value;
            this.state = state;
            this.name = name;
            this.knownColor = (short)knownColor;
        }

        public byte R
        {
            get
            {
                return (byte)((this.Value >> 0x10) & 0xffL);
            }
        }

        public byte G
        {
            get
            {
                return (byte)((this.Value >> 8) & 0xffL);
            }
        }

        public byte B
        {
            get
            {
                return (byte)(this.Value & 0xffL);
            }
        }

        public byte A
        {
            get
            {
                return (byte)((this.Value >> 0x18) & 0xffL);
            }
        }

        public bool IsKnownColor
        {
            get
            {
                return ((this.state & StateKnownColorValid) > 0);
            }
        }

        public bool IsEmpty
        {
            get
            {
                return (this.state == 0);
            }
        }

        public bool IsNamedColor
        {
            get
            {
                if ((this.state & StateNameValid) == 0)
                {
                    return this.IsKnownColor;
                }
                return true;
            }
        }

        public bool IsSystemColor
        {
            get
            {
                if (!this.IsKnownColor)
                {
                    return false;
                }
                if (this.knownColor > 0x1a)
                {
                    return (this.knownColor > 0xa7);
                }
                return true;
            }
        }

        public static implicit operator string(Color color)  // implicit digit to byte conversion operator
        {
            return color.ToHtml();
        }

        public static implicit operator Color(string hexValue)  // implicit digit to byte conversion operator
        {
            return Color.FromHex(hexValue);
        }

        private string NameAndARGBValue
        {
            get
            {
                return string.Format("{{Name={0}, ARGB=({1}, {2}, {3}, {4})}}", this.Name, this.A, this.R, this.G, this.B);
            }
        }

        public string Name
        {
            get
            {
                if ((this.state & StateNameValid) != 0)
                {
                    return this.name;
                }
                if (!this.IsKnownColor)
                {
                    return Convert.ToString(this.value, 0x10);
                }
                string str = KnownColorTable.KnownColorToName((KnownColor)this.knownColor);
                if (str != null)
                {
                    return str;
                }
                return this.knownColor.ToString();
            }
        }

        private long Value
        {
            get
            {
                if ((this.state & StateValueMask) != 0)
                {
                    return this.value;
                }
                if (this.IsKnownColor)
                {
                    return (long)KnownColorTable.KnownColorToArgb((KnownColor)this.knownColor);
                }
                return NotDefinedValue;
            }
        }

        private static void CheckByte(int value)
        {
            if ((value < 0) || (value > 0xff))
            {
                throw new ArgumentException("InvalidEx2BoundArgument");
            }
        }

        private static long MakeArgb(byte alpha, byte red, byte green, byte blue)
        {
            return (alpha << 24) | (red << 16) | (green << 8) | blue;
        }

        public static Color FromArgb(int argb)
        {
            return new Color(argb & ((long)0xffffffffL), StateARGBValueValid, null, (KnownColor)0);
        }

        public static Color FromArgb(int alpha, int red, int green, int blue)
        {
            CheckByte(alpha);
            CheckByte(red);
            CheckByte(green);
            CheckByte(blue);
            return new Color(MakeArgb((byte)alpha, (byte)red, (byte)green, (byte)blue), StateARGBValueValid, null, (KnownColor)0);
        }

        public static Color FromArgb(int alpha, Color baseColor)
        {
            CheckByte(alpha);
            return new Color(MakeArgb((byte)alpha, baseColor.R, baseColor.G, baseColor.B), StateARGBValueValid, null, (KnownColor)0);
        }

        public static Color FromArgb(int red, int green, int blue)
        {
            return FromArgb(0xff, red, green, blue);
        }

        public static bool IsEnumValid(Enum enumValue, int value, int minValue, int maxValue)
        {
            return ((value >= minValue) && (value <= maxValue));
        }

        public static Color FromKnownColor(KnownColor color)
        {
            return new Color(color);
        }

        public string componentToHex(byte value)
        {
            var x = value.ToString(16);
            return (x.Length == 1 ? "0" : "") + x;
        }

        public string ToHtml()
        {
            if(IsKnownColor)
            {                
                return Color.FromArgb(KnownColorTable.KnownColorToArgb((KnownColor)knownColor)).ToHtml();
            }
            else
            {
                if (A != 255)
                {
                    return string.Format("#{0}{1}{2}{3}", componentToHex(A), componentToHex(R), componentToHex(G), componentToHex(B));
                }
                else
                {
                    return string.Format("#{0}{1}{2}", componentToHex(R), componentToHex(G), componentToHex(B));
                }
            }   
        }

        public static Color FromHex(string value)
        {
            if (value.StartsWith("#"))
                return FromHex(value.Substring(1));
            else
            {
                return Color.FromArgb(Global.ParseInt(value));
            }
        }

        public float GetBrightness()
        {
            float z = R / q;
            float x = G / q;
            float c = B / q;
            float v = z;
            float b = z;
            if (x > v)
            {
                v = x;
            }
            if (c > v)
            {
                v = c;
            }
            if (x < b)
            {
                b = x;
            }
            if (c < b)
            {
                b = c;
            }
            return ((v + b) / 2f);
        }

        public float GetHue()
        {
            if ((this.R == this.G) && (this.G == this.B))
            {
                return 0f;
            }
            float z = R / q;
            float x = G / q;
            float c = B / q;
            float v = 0f;
            float b = z;
            float n = z;
            if (x > b)
            {
                b = x;
            }
            if (c > b)
            {
                b = c;
            }
            if (x < n)
            {
                n = x;
            }
            if (c < n)
            {
                n = c;
            }
            float num6 = b - n;
            if (z == b)
            {
                v = (x - c) / num6;
            }
            else if (x == b)
            {
                v = 2f + ((c - z) / num6);
            }
            else if (c == b)
            {
                v = 4f + ((z - x) / num6);
            }
            v *= 60f;
            if (v < 0f)
            {
                v += 360f;
            }
            return v;
        }

        private static float q = 255f;

        public float GetSaturation()
        {
            float z = R / q;
            float x = G / q;
            float c = B / q;
            float v = 0f;
            float b = z;
            float n = z;
            if (x > b)
            {
                b = x;
            }
            if (c > b)
            {
                b = c;
            }
            if (x < n)
            {
                n = x;
            }
            if (c < n)
            {
                n = c;
            }
            if (b == n)
            {
                return v;
            }
            float m = (b + n) / 2f;
            if (m <= 0.5)
            {
                return ((b - n) / (b + n));
            }
            return ((b - n) / ((2f - b) - n));
        }

        public int ToArgb()
        {
            return (int)this.Value;
        }

        public KnownColor ToKnownColor()
        {
            return (KnownColor)this.knownColor;
        }

        public override string ToString()
        {
            StringBuilder builder = new StringBuilder(0x20);
            builder.Append(base.GetType().Name);
            builder.Append(" [");
            if ((this.state & StateNameValid) != 0)
            {
                builder.Append(this.Name);
            }
            else if ((this.state & StateKnownColorValid) != 0)
            {
                builder.Append(this.Name);
            }
            else if ((this.state & StateValueMask) != 0)
            {
                builder.AppendFormat("A={0}, R={1}, G={2}, B={3}", A, R, G, B);
            }
            else
            {
                builder.Append("Empty");
            }
            builder.Append("]");
            return builder.ToString();
        }

        public static bool operator ==(Color left, Color right)
        {
            if (((left.value != right.value) || (left.state != right.state)) || (left.knownColor != right.knownColor))
            {
                return false;
            }
            return ((left.name == right.name) || (((left.name != null) && (right.name != null)) && left.name.Equals(right.name)));
        }

        public static bool operator !=(Color left, Color right)
        {
            return !(left == right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Color)
            {
                Color color = (Color)obj;
                if (((this.value == color.value) && (this.state == color.state)) && (this.knownColor == color.knownColor))
                {
                    return ((this.name == color.name) || (((this.name != null) && (color.name != null)) && this.name.Equals(this.name)));
                }
            }
            return false;
        }

        public override int GetHashCode()
        {
            return ((this.value.GetHashCode() ^ this.state.GetHashCode()) ^ this.knownColor.GetHashCode());
        }

        static Color()
        {
            Empty = new Color();
            StateKnownColorValid = 1;
            StateARGBValueValid = 2;
            StateValueMask = StateARGBValueValid;
            StateNameValid = 8;
            NotDefinedValue = 0L;
        }
    }

    public enum KnownColor
    {
        ActiveBorder = 1,
        ActiveCaption = 2,
        ActiveCaptionText = 3,
        AliceBlue = 0x1c,
        AntiqueWhite = 0x1d,
        AppWorkspace = 4,
        Aqua = 30,
        Aquamarine = 0x1f,
        Azure = 0x20,
        Beige = 0x21,
        Bisque = 0x22,
        Black = 0x23,
        BlanchedAlmond = 0x24,
        Blue = 0x25,
        BlueViolet = 0x26,
        Brown = 0x27,
        BurlyWood = 40,
        ButtonFace = 0xa8,
        ButtonHighlight = 0xa9,
        ButtonShadow = 170,
        CadetBlue = 0x29,
        Chartreuse = 0x2a,
        Chocolate = 0x2b,
        Control = 5,
        ControlDark = 6,
        ControlDarkDark = 7,
        ControlLight = 8,
        ControlLightLight = 9,
        ControlText = 10,
        Coral = 0x2c,
        CornflowerBlue = 0x2d,
        Cornsilk = 0x2e,
        Crimson = 0x2f,
        Cyan = 0x30,
        DarkBlue = 0x31,
        DarkCyan = 50,
        DarkGoldenrod = 0x33,
        DarkGray = 0x34,
        DarkGreen = 0x35,
        DarkKhaki = 0x36,
        DarkMagenta = 0x37,
        DarkOliveGreen = 0x38,
        DarkOrange = 0x39,
        DarkOrchid = 0x3a,
        DarkRed = 0x3b,
        DarkSalmon = 60,
        DarkSeaGreen = 0x3d,
        DarkSlateBlue = 0x3e,
        DarkSlateGray = 0x3f,
        DarkTurquoise = 0x40,
        DarkViolet = 0x41,
        DeepPink = 0x42,
        DeepSkyBlue = 0x43,
        Desktop = 11,
        DimGray = 0x44,
        DodgerBlue = 0x45,
        Firebrick = 70,
        FloralWhite = 0x47,
        ForestGreen = 0x48,
        Fuchsia = 0x49,
        Gainsboro = 0x4a,
        GhostWhite = 0x4b,
        Gold = 0x4c,
        Goldenrod = 0x4d,
        GradientActiveCaption = 0xab,
        GradientInactiveCaption = 0xac,
        Gray = 0x4e,
        GrayText = 12,
        Green = 0x4f,
        GreenYellow = 80,
        Highlight = 13,
        HighlightText = 14,
        Honeydew = 0x51,
        HotPink = 0x52,
        HotTrack = 15,
        InactiveBorder = 0x10,
        InactiveCaption = 0x11,
        InactiveCaptionText = 0x12,
        IndianRed = 0x53,
        Indigo = 0x54,
        Info = 0x13,
        InfoText = 20,
        Ivory = 0x55,
        Khaki = 0x56,
        Lavender = 0x57,
        LavenderBlush = 0x58,
        LawnGreen = 0x59,
        LemonChiffon = 90,
        LightBlue = 0x5b,
        LightCoral = 0x5c,
        LightCyan = 0x5d,
        LightGoldenrodYellow = 0x5e,
        LightGray = 0x5f,
        LightGreen = 0x60,
        LightPink = 0x61,
        LightSalmon = 0x62,
        LightSeaGreen = 0x63,
        LightSkyBlue = 100,
        LightSlateGray = 0x65,
        LightSteelBlue = 0x66,
        LightYellow = 0x67,
        Lime = 0x68,
        LimeGreen = 0x69,
        Linen = 0x6a,
        Magenta = 0x6b,
        Maroon = 0x6c,
        MediumAquamarine = 0x6d,
        MediumBlue = 110,
        MediumOrchid = 0x6f,
        MediumPurple = 0x70,
        MediumSeaGreen = 0x71,
        MediumSlateBlue = 0x72,
        MediumSpringGreen = 0x73,
        MediumTurquoise = 0x74,
        MediumVioletRed = 0x75,
        Menu = 0x15,
        MenuBar = 0xad,
        MenuHighlight = 0xae,
        MenuText = 0x16,
        MidnightBlue = 0x76,
        MintCream = 0x77,
        MistyRose = 120,
        Moccasin = 0x79,
        NavajoWhite = 0x7a,
        Navy = 0x7b,
        OldLace = 0x7c,
        Olive = 0x7d,
        OliveDrab = 0x7e,
        Orange = 0x7f,
        OrangeRed = 0x80,
        Orchid = 0x81,
        PaleGoldenrod = 130,
        PaleGreen = 0x83,
        PaleTurquoise = 0x84,
        PaleVioletRed = 0x85,
        PapayaWhip = 0x86,
        PeachPuff = 0x87,
        Peru = 0x88,
        Pink = 0x89,
        Plum = 0x8a,
        PowderBlue = 0x8b,
        Purple = 140,
        Red = 0x8d,
        RosyBrown = 0x8e,
        RoyalBlue = 0x8f,
        SaddleBrown = 0x90,
        Salmon = 0x91,
        SandyBrown = 0x92,
        ScrollBar = 0x17,
        SeaGreen = 0x93,
        SeaShell = 0x94,
        Sienna = 0x95,
        Silver = 150,
        SkyBlue = 0x97,
        SlateBlue = 0x98,
        SlateGray = 0x99,
        Snow = 0x9a,
        SpringGreen = 0x9b,
        SteelBlue = 0x9c,
        Tan = 0x9d,
        Teal = 0x9e,
        Thistle = 0x9f,
        Tomato = 160,
        Transparent = 0x1b,
        Turquoise = 0xa1,
        Violet = 0xa2,
        Wheat = 0xa3,
        White = 0xa4,
        WhiteSmoke = 0xa5,
        Window = 0x18,
        WindowFrame = 0x19,
        WindowText = 0x1a,
        Yellow = 0xa6,
        YellowGreen = 0xa7
    }

    internal static class KnownColorTable
    {
        // Fields
        private const int AlphaShift = 0x18;

        private const int BlueShift = 0;
        private static string[] colorNameTable;
        private static int[] colorTable;
        private const int GreenShift = 8;
        private const int RedShift = 0x10;
        private const int Win32BlueShift = 0x10;
        private const int Win32GreenShift = 8;
        private const int Win32RedShift = 0;

        public static string GetColorName(int index)
        {
            EnsureColorNameTable();
            return colorNameTable[index];
        }

        // Methods
        public static Color ArgbToKnownColor(int targetARGB)
        {
            EnsureColorTable();
            for (int i = 0; i < colorTable.Length; i++)
            {
                int num2 = colorTable[i];
                if (num2 == targetARGB)
                {
                    Color color = Color.FromKnownColor((KnownColor)i);
                    if (!color.IsSystemColor)
                    {
                        return color;
                    }
                }
            }
            return Color.FromArgb(targetARGB);
        }

        private static int Encode(int alpha, int red, int green, int blue)
        {
            return ((((red << 0x10) | (green << 8)) | blue) | (alpha << 0x18));
        }

        private static void EnsureColorNameTable()
        {
            if (colorNameTable == null)
            {
                InitColorNameTable();
            }
        }

        private static void EnsureColorTable()
        {
            if (colorTable == null)
            {
                InitColorTable();
            }
        }

        private static int FromWin32Value(int value)
        {
            return Encode(0xff, value & 0xff, (value >> 8) & 0xff, (value >> 0x10) & 0xff);
        }

        private static void InitColorNameTable()
        {
            string[] s = new string[0xaf];
            s[1] = "ActiveBorder";
            s[2] = "ActiveCaption";
            s[3] = "ActiveCaptionText";
            s[4] = "AppWorkspace";
            s[0xa8] = "ButtonFace";
            s[0xa9] = "ButtonHighlight";
            s[170] = "ButtonShadow";
            s[5] = "Control";
            s[6] = "ControlDark";
            s[7] = "ControlDarkDark";
            s[8] = "ControlLight";
            s[9] = "ControlLightLight";
            s[10] = "ControlText";
            s[11] = "Desktop";
            s[0xab] = "GradientActiveCaption";
            s[0xac] = "GradientInactiveCaption";
            s[12] = "GrayText";
            s[13] = "Highlight";
            s[14] = "HighlightText";
            s[15] = "HotTrack";
            s[0x10] = "InactiveBorder";
            s[0x11] = "InactiveCaption";
            s[0x12] = "InactiveCaptionText";
            s[0x13] = "Info";
            s[20] = "InfoText";
            s[0x15] = "Menu";
            s[0xad] = "MenuBar";
            s[0xae] = "MenuHighlight";
            s[0x16] = "MenuText";
            s[0x17] = "ScrollBar";
            s[0x18] = "Window";
            s[0x19] = "WindowFrame";
            s[0x1a] = "WindowText";
            s[0x1b] = "Transparent";
            s[0x1c] = "AliceBlue";
            s[0x1d] = "AntiqueWhite";
            s[30] = "Aqua";
            s[0x1f] = "Aquamarine";
            s[0x20] = "Azure";
            s[0x21] = "Beige";
            s[0x22] = "Bisque";
            s[0x23] = "Black";
            s[0x24] = "BlanchedAlmond";
            s[0x25] = "Blue";
            s[0x26] = "BlueViolet";
            s[0x27] = "Brown";
            s[40] = "BurlyWood";
            s[0x29] = "CadetBlue";
            s[0x2a] = "Chartreuse";
            s[0x2b] = "Chocolate";
            s[0x2c] = "Coral";
            s[0x2d] = "CornflowerBlue";
            s[0x2e] = "Cornsilk";
            s[0x2f] = "Crimson";
            s[0x30] = "Cyan";
            s[0x31] = "DarkBlue";
            s[50] = "DarkCyan";
            s[0x33] = "DarkGoldenrod";
            s[0x34] = "DarkGray";
            s[0x35] = "DarkGreen";
            s[0x36] = "DarkKhaki";
            s[0x37] = "DarkMagenta";
            s[0x38] = "DarkOliveGreen";
            s[0x39] = "DarkOrange";
            s[0x3a] = "DarkOrchid";
            s[0x3b] = "DarkRed";
            s[60] = "DarkSalmon";
            s[0x3d] = "DarkSeaGreen";
            s[0x3e] = "DarkSlateBlue";
            s[0x3f] = "DarkSlateGray";
            s[0x40] = "DarkTurquoise";
            s[0x41] = "DarkViolet";
            s[0x42] = "DeepPink";
            s[0x43] = "DeepSkyBlue";
            s[0x44] = "DimGray";
            s[0x45] = "DodgerBlue";
            s[70] = "Firebrick";
            s[0x47] = "FloralWhite";
            s[0x48] = "ForestGreen";
            s[0x49] = "Fuchsia";
            s[0x4a] = "Gainsboro";
            s[0x4b] = "GhostWhite";
            s[0x4c] = "Gold";
            s[0x4d] = "Goldenrod";
            s[0x4e] = "Gray";
            s[0x4f] = "Green";
            s[80] = "GreenYellow";
            s[0x51] = "Honeydew";
            s[0x52] = "HotPink";
            s[0x53] = "IndianRed";
            s[0x54] = "Indigo";
            s[0x55] = "Ivory";
            s[0x56] = "Khaki";
            s[0x57] = "Lavender";
            s[0x58] = "LavenderBlush";
            s[0x59] = "LawnGreen";
            s[90] = "LemonChiffon";
            s[0x5b] = "LightBlue";
            s[0x5c] = "LightCoral";
            s[0x5d] = "LightCyan";
            s[0x5e] = "LightGoldenrodYellow";
            s[0x5f] = "LightGray";
            s[0x60] = "LightGreen";
            s[0x61] = "LightPink";
            s[0x62] = "LightSalmon";
            s[0x63] = "LightSeaGreen";
            s[100] = "LightSkyBlue";
            s[0x65] = "LightSlateGray";
            s[0x66] = "LightSteelBlue";
            s[0x67] = "LightYellow";
            s[0x68] = "Lime";
            s[0x69] = "LimeGreen";
            s[0x6a] = "Linen";
            s[0x6b] = "Magenta";
            s[0x6c] = "Maroon";
            s[0x6d] = "MediumAquamarine";
            s[110] = "MediumBlue";
            s[0x6f] = "MediumOrchid";
            s[0x70] = "MediumPurple";
            s[0x71] = "MediumSeaGreen";
            s[0x72] = "MediumSlateBlue";
            s[0x73] = "MediumSpringGreen";
            s[0x74] = "MediumTurquoise";
            s[0x75] = "MediumVioletRed";
            s[0x76] = "MidnightBlue";
            s[0x77] = "MintCream";
            s[120] = "MistyRose";
            s[0x79] = "Moccasin";
            s[0x7a] = "NavajoWhite";
            s[0x7b] = "Navy";
            s[0x7c] = "OldLace";
            s[0x7d] = "Olive";
            s[0x7e] = "OliveDrab";
            s[0x7f] = "Orange";
            s[0x80] = "OrangeRed";
            s[0x81] = "Orchid";
            s[130] = "PaleGoldenrod";
            s[0x83] = "PaleGreen";
            s[0x84] = "PaleTurquoise";
            s[0x85] = "PaleVioletRed";
            s[0x86] = "PapayaWhip";
            s[0x87] = "PeachPuff";
            s[0x88] = "Peru";
            s[0x89] = "Pink";
            s[0x8a] = "Plum";
            s[0x8b] = "PowderBlue";
            s[140] = "Purple";
            s[0x8d] = "Red";
            s[0x8e] = "RosyBrown";
            s[0x8f] = "RoyalBlue";
            s[0x90] = "SaddleBrown";
            s[0x91] = "Salmon";
            s[0x92] = "SandyBrown";
            s[0x93] = "SeaGreen";
            s[0x94] = "SeaShell";
            s[0x95] = "Sienna";
            s[150] = "Silver";
            s[0x97] = "SkyBlue";
            s[0x98] = "SlateBlue";
            s[0x99] = "SlateGray";
            s[0x9a] = "Snow";
            s[0x9b] = "SpringGreen";
            s[0x9c] = "SteelBlue";
            s[0x9d] = "Tan";
            s[0x9e] = "Teal";
            s[0x9f] = "Thistle";
            s[160] = "Tomato";
            s[0xa1] = "Turquoise";
            s[0xa2] = "Violet";
            s[0xa3] = "Wheat";
            s[0xa4] = "White";
            s[0xa5] = "WhiteSmoke";
            s[0xa6] = "Yellow";
            s[0xa7] = "YellowGreen";
            colorNameTable = s;
        }

        private static void UpdateSystemColors()
        {
            colorTable[1] = SystemColorToArgb(10);
            colorTable[2] = SystemColorToArgb(2);
            colorTable[3] = SystemColorToArgb(9);
            colorTable[4] = SystemColorToArgb(12);
            colorTable[168] = SystemColorToArgb(15);
            colorTable[169] = SystemColorToArgb(20);
            colorTable[170] = SystemColorToArgb(0x10);
            colorTable[5] = SystemColorToArgb(15);
            colorTable[6] = SystemColorToArgb(0x10);
            colorTable[7] = SystemColorToArgb(0x15);
            colorTable[8] = SystemColorToArgb(0x16);
            colorTable[9] = SystemColorToArgb(20);
            colorTable[10] = SystemColorToArgb(0x12);
            colorTable[11] = SystemColorToArgb(1);
            colorTable[171] = SystemColorToArgb(0x1b);
            colorTable[172] = SystemColorToArgb(0x1c);
            colorTable[12] = SystemColorToArgb(0x11);
            colorTable[13] = SystemColorToArgb(13);
            colorTable[14] = SystemColorToArgb(14);
            colorTable[15] = SystemColorToArgb(0x1a);
            colorTable[16] = SystemColorToArgb(11);
            colorTable[17] = SystemColorToArgb(3);
            colorTable[18] = SystemColorToArgb(0x13);
            colorTable[19] = SystemColorToArgb(0x18);
            colorTable[20] = SystemColorToArgb(0x17);
            colorTable[21] = SystemColorToArgb(4);
            colorTable[173] = SystemColorToArgb(30);
            colorTable[174] = SystemColorToArgb(0x1d);
            colorTable[22] = SystemColorToArgb(7);
            colorTable[23] = SystemColorToArgb(0);
            colorTable[24] = SystemColorToArgb(5);
            colorTable[25] = SystemColorToArgb(6);
            colorTable[26] = SystemColorToArgb(8);
        }


        private static void InitColorTable()
        {
            int[] c = new int[0xaf];

            c[0x1b] = 0xffffff;
            c[0x1c] = -984833;
            c[0x1d] = -332841;
            c[30] = -16711681;
            c[0x1f] = -8388652;
            c[0x20] = -983041;
            c[0x21] = -657956;
            c[0x22] = -6972;
            c[0x23] = -16777216;
            c[0x24] = -5171;
            c[0x25] = -16776961;
            c[0x26] = -7722014;
            c[0x27] = -5952982;
            c[40] = -2180985;
            c[0x29] = -10510688;
            c[0x2a] = -8388864;
            c[0x2b] = -2987746;
            c[0x2c] = -32944;
            c[0x2d] = -10185235;
            c[0x2e] = -1828;
            c[0x2f] = -2354116;
            c[0x30] = -16711681;
            c[0x31] = -16777077;
            c[50] = -16741493;
            c[0x33] = -4684277;
            c[0x34] = -5658199;
            c[0x35] = -16751616;
            c[0x36] = -4343957;
            c[0x37] = -7667573;
            c[0x38] = -11179217;
            c[0x39] = -29696;
            c[0x3a] = -6737204;
            c[0x3b] = -7667712;
            c[60] = -1468806;
            c[0x3d] = -7357301;
            c[0x3e] = -12042869;
            c[0x3f] = -13676721;
            c[0x40] = -16724271;
            c[0x41] = -7077677;
            c[0x42] = -60269;
            c[0x43] = -16728065;
            c[0x44] = -9868951;
            c[0x45] = -14774017;
            c[70] = -5103070;
            c[0x47] = -1296;
            c[0x48] = -14513374;
            c[0x49] = -65281;
            c[0x4a] = -2302756;
            c[0x4b] = -460545;
            c[0x4c] = -10496;
            c[0x4d] = -2448096;
            c[0x4e] = -8355712;
            c[0x4f] = -16744448;
            c[80] = -5374161;
            c[0x51] = -983056;
            c[0x52] = -38476;
            c[0x53] = -3318692;
            c[0x54] = -11861886;
            c[0x55] = -16;
            c[0x56] = -989556;
            c[0x57] = -1644806;
            c[0x58] = -3851;
            c[0x59] = -8586240;
            c[90] = -1331;
            c[0x5b] = -5383962;
            c[0x5c] = -1015680;
            c[0x5d] = -2031617;
            c[0x5e] = -329006;
            c[0x5f] = -2894893;
            c[0x60] = -7278960;
            c[0x61] = -18751;
            c[0x62] = -24454;
            c[0x63] = -14634326;
            c[100] = -7876870;
            c[0x65] = -8943463;
            c[0x66] = -5192482;
            c[0x67] = -32;
            c[0x68] = -16711936;
            c[0x69] = -13447886;
            c[0x6a] = -331546;
            c[0x6b] = -65281;
            c[0x6c] = -8388608;
            c[0x6d] = -10039894;
            c[110] = -16777011;
            c[0x6f] = -4565549;
            c[0x70] = -7114533;
            c[0x71] = -12799119;
            c[0x72] = -8689426;
            c[0x73] = -16713062;
            c[0x74] = -12004916;
            c[0x75] = -3730043;
            c[0x76] = -15132304;
            c[0x77] = -655366;
            c[120] = -6943;
            c[0x79] = -6987;
            c[0x7a] = -8531;
            c[0x7b] = -16777088;
            c[0x7c] = -133658;
            c[0x7d] = -8355840;
            c[0x7e] = -9728477;
            c[0x7f] = -23296;
            c[0x80] = -47872;
            c[0x81] = -2461482;
            c[130] = -1120086;
            c[0x83] = -6751336;
            c[0x84] = -5247250;
            c[0x85] = -2396013;
            c[0x86] = -4139;
            c[0x87] = -9543;
            c[0x88] = -3308225;
            c[0x89] = -16181;
            c[0x8a] = -2252579;
            c[0x8b] = -5185306;
            c[140] = -8388480;
            c[0x8d] = -65536;
            c[0x8e] = -4419697;
            c[0x8f] = -12490271;
            c[0x90] = -7650029;
            c[0x91] = -360334;
            c[0x92] = -744352;
            c[0x93] = -13726889;
            c[0x94] = -2578;
            c[0x95] = -6270419;
            c[150] = -4144960;
            c[0x97] = -7876885;
            c[0x98] = -9807155;
            c[0x99] = -9404272;
            c[0x9a] = -1286;
            c[0x9b] = -16711809;
            c[0x9c] = -12156236;
            c[0x9d] = -2968436;
            c[0x9e] = -16744320;
            c[0x9f] = -2572328;
            c[160] = -40121;
            c[0xa1] = -12525360;
            c[0xa2] = -1146130;
            c[0xa3] = -663885;
            c[0xa4] = -1;
            c[0xa5] = -657931;
            c[0xa6] = -256;
            c[0xa7] = -6632142;
            colorTable = c;

            UpdateSystemColors();
        }

        public static int KnownColorToArgb(KnownColor color)
        {
            EnsureColorTable();
            if (color <= KnownColor.MenuHighlight)
            {
                return colorTable[(int)color];
            }
            return 0;
        }

        public static string KnownColorToName(KnownColor color)
        {
            EnsureColorNameTable();
            if (color <= KnownColor.MenuHighlight)
            {
                return colorNameTable[(int)color];
            }
            return null;
        }

        private static int[] _SysColors = new int[] 
            {11842740,
            13743257,
            0,
            11250603,
            15790320,
            16777215,
            10526880,
            15790320,
            10526880,
            6908265,
            14935011,
            16777215,
            0,
            0,
            15389113,
            15918295,
            7171437,
            16750899,
            16777215,
            13395456,
            16578548,
            14405055,
            5525059,
            14811135,
            0,
            15790320,
            15790320,
            16750899,
            0,
            13158600,
            16777215,
            6579300,
            0};

        private static int SystemColorToArgb(int index)
        {
            return FromWin32Value(_SysColors[index]);
        }    
    }
}
