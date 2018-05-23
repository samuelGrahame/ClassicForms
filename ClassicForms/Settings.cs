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
        public static bool IsEdge;
        public static bool IsFF;
        /// <summary>
        /// enabled override the default font name.
        /// </summary>
        public static bool WinFormIgnoreFontName = false;

        /// <summary>
        ///  enabled override the default font size.
        /// </summary>
        public static bool WinFormIgnoreFontSize = false;

        /// <summary>
        /// default font, empty is not used - inherit.
        /// </summary>
        public static string WinFormIgnoreFontDefaultFontName = "";

        /// <summary>
        /// this controls the default font size. if zero it is ignored.
        /// </summary>
        public static float WinFormIgnoreFontDefaultSize = 0;

        /// <summary>
        /// This is the delay for the double click. because firefox does not allow the double click for elements that have the mouse down event. it will not raise dbl click event. so we will emulate it.
        /// Only for *FireFox
        /// </summary>
        public static float WinFormDoubleClickDelayMS = 500;
        /// <summary>
        /// check in the window10.css is in the current html file. window10.css is a classicforms default css file.
        /// </summary>
        /// <returns></returns>
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
