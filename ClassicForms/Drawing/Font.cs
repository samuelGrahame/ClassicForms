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

        public Font(string familyName, float emSize, FontStyle style, GraphicsUnit unit, byte gdiCharSet) : this(familyName, emSize)
        {
            
        }

        public Font(string familyName, float emSize)
        {
            FamilyName = familyName;
            EmSize = emSize;
        }

    }
}
