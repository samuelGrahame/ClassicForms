﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System
{
    public class Settings
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

        public static WinFormButtonSides WinFormButtonSide = WinFormButtonSides.Right;

        public enum WinFormButtonSides
        {
            Left,
            Right
        }

        private static bool _isUsingWindowsCSS;
        /// <summary>
        /// check in the window10.css is in the current html file. window10.css is a classicforms default css file.
        /// </summary>
        /// <returns></returns>
        public static bool IsUsingWindowsCSS()
        {
            if (_hasLoaded)
                return _isUsingWindowsCSS;
            return ContainsCssLink("windows10.css");            
        }

        public static bool ContainsCssLink(string content)
        {
            if (string.IsNullOrWhiteSpace(content))
                return false;

            content = content.Trim().ToLower();
            for (uint i = 0; i < document.head.childElementCount; i++)
            {
                var child = document.head.children[i];
                if (child is HTMLLinkElement)
                {
                    var link = child.As<HTMLLinkElement>();
                    if (link.rel != null && link.rel.ToLower() == "stylesheet" && link.href != null && link.href.ToLower().Contains(content))
                        return true;
                }
            }

            return false;
        }

        private static bool _isUsingBootStrap;
        public static bool IsUsingBootStrap()
        {
            if (_hasLoaded)
                return _isUsingBootStrap;
            return ContainsCssLink("bootstrap");
        }

        private static bool _isUsingMaterial;
        public static bool IsUsingMaterial()
        {
            if (_hasLoaded)
                return _isUsingMaterial;
            return ContainsCssLink("material");
        }

        private static bool _hasLoaded;

        static Settings()
        {
            try
            {
                _isUsingMaterial = IsUsingMaterial();
                _isUsingBootStrap = IsUsingBootStrap();
                _isUsingWindowsCSS = IsUsingWindowsCSS();
            }
            catch (Exception)
            {

            }
            
            _hasLoaded = true;
        }
    }
}
