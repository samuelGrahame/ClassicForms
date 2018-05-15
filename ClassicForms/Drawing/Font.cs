using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Drawing
{
    public class Font
    {
        public string FamilyName { get; }
        public float EmSize { get; }
        public FontStyle Style { get; } = FontStyle.Regular;
        public GraphicsUnit Unit { get; } = GraphicsUnit.Point;

        public Font(string familyName, float emSize, FontStyle style, GraphicsUnit unit, byte gdiCharSet) : this(familyName, emSize)
        {
            Style = style;
        }

        public Font(string familyName, float emSize)
        {
            if(!Settings.WinFormIgnoreFontName)
                FamilyName = familyName;
            EmSize = emSize;
        }

    }
}
