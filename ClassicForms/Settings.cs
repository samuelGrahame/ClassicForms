using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System
{
    public static class Settings
    {
        public static bool WinFormIgnoreFontName = false;
        public static bool WinFormIgnoreFontSize = false;
        public static string WinFormIgnoreFontDefaultFontName = "";
        public static float WinFormIgnoreFontDefaultSize = 0;

        public static bool IsUsingWindowsCSS()
        {
            for (int i = 0; i < document.head.childElementCount; i++)
            {
                var child = document.head.children[i];
                if (child is HTMLLinkElement)
                {
                    var link = child.As<HTMLLinkElement>();
                    if (link.rel != null && link.rel.ToLower() == "stylesheet" && link.href != null && link.href.ToLower().Contains("windows10.css"))
                        return true;
                }
            }            

            return false;
        }
    }
}
