using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Drawing
{
    public sealed class SystemColors
    {
#if BLAZOR
        public static Color ActiveBorder =>
            Color.FromName("ActiveBorder");

        public static Color ActiveCaption =>
            Color.FromName("ActiveCaption");

        public static Color ActiveCaptionText =>
            Color.FromName("ActiveCaptionText");

        public static Color AppWorkspace =>
            Color.FromName("AppWorkspace");

        public static Color ButtonFace =>
            Color.FromName("ButtonFace");

        public static Color ButtonHighlight =>
            Color.FromName("ButtonHighlight");

        public static Color ButtonShadow =>
            Color.FromName("ButtonShadow");

        public static Color Control =>
            Color.FromArgb(240, 240, 240);

        public static Color ControlDark =>
            Color.FromName("ControlDark");

        public static Color ControlDarkDark =>
            Color.FromName("ControlDarkDark");

        public static Color ControlLight =>
            Color.FromName("ControlLight");

        public static Color ControlLightLight =>
            Color.FromName("ControlLightLight");

        public static Color ControlText =>
            Color.FromName("ControlText");

        public static Color Desktop =>
            Color.FromName("Desktop");

        public static Color GradientActiveCaption =>
            Color.FromName("GradientActiveCaption");

        public static Color GradientInactiveCaption =>
            Color.FromName("GradientInactiveCaption");

        public static Color GrayText =>
            Color.FromName("GrayText");

        public static Color Highlight =>
            Color.FromName("Highlight");

        public static Color HighlightText =>
            Color.FromName("HighlightText");

        public static Color HotTrack =>
            Color.FromName("HotTrack");

        public static Color InactiveBorder =>
            Color.FromName("InactiveBorder");

        public static Color InactiveCaption =>
            Color.FromName("InactiveCaption");

        public static Color InactiveCaptionText =>
            Color.FromName("InactiveCaptionText");

        public static Color Info =>
            Color.FromName("Info");

        public static Color InfoText =>
            Color.FromName("InfoText");

        public static Color Menu =>
            Color.FromName("Menu");

        public static Color MenuBar =>
            Color.FromName("MenuBar");

        public static Color MenuHighlight =>
            Color.FromName("MenuHighlight");

        public static Color MenuText =>
            Color.FromName("MenuText");

        public static Color ScrollBar =>
            Color.FromName("ScrollBar");

        public static Color Window =>
            Color.FromName("Window");

        public static Color WindowFrame =>
            Color.FromName("WindowFrame");

        public static Color WindowText =>
            Color.FromName("WindowText");
#elif BRIDGE
         public static Color ActiveBorder =>
            new Color(KnownColor.ActiveBorder);

        public static Color ActiveCaption =>
            new Color(KnownColor.ActiveCaption);

        public static Color ActiveCaptionText =>
            new Color(KnownColor.ActiveCaptionText);

        public static Color AppWorkspace =>
            new Color(KnownColor.AppWorkspace);

        public static Color ButtonFace =>
            new Color(KnownColor.ButtonFace);

        public static Color ButtonHighlight =>
            new Color(KnownColor.ButtonHighlight);

        public static Color ButtonShadow =>
            new Color(KnownColor.ButtonShadow);

        public static Color Control =>
            Color.FromArgb(240, 240, 240);

        public static Color ControlDark =>
            new Color(KnownColor.ControlDark);

        public static Color ControlDarkDark =>
            new Color(KnownColor.ControlDarkDark);

        public static Color ControlLight =>
            new Color(KnownColor.ControlLight);

        public static Color ControlLightLight =>
            new Color(KnownColor.ControlLightLight);

        public static Color ControlText =>
            new Color(KnownColor.ControlText);

        public static Color Desktop =>
            new Color(KnownColor.Desktop);

        public static Color GradientActiveCaption =>
            new Color(KnownColor.GradientActiveCaption);

        public static Color GradientInactiveCaption =>
            new Color(KnownColor.GradientInactiveCaption);

        public static Color GrayText =>
            new Color(KnownColor.GrayText);

        public static Color Highlight =>
            new Color(KnownColor.Highlight);

        public static Color HighlightText =>
            new Color(KnownColor.HighlightText);

        public static Color HotTrack =>
            new Color(KnownColor.HotTrack);

        public static Color InactiveBorder =>
            new Color(KnownColor.InactiveBorder);

        public static Color InactiveCaption =>
            new Color(KnownColor.InactiveCaption);

        public static Color InactiveCaptionText =>
            new Color(KnownColor.InactiveCaptionText);

        public static Color Info =>
            new Color(KnownColor.Info);

        public static Color InfoText =>
            new Color(KnownColor.InfoText);

        public static Color Menu =>
            new Color(KnownColor.Menu);

        public static Color MenuBar =>
            new Color(KnownColor.MenuBar);

        public static Color MenuHighlight =>
            new Color(KnownColor.MenuHighlight);

        public static Color MenuText =>
            new Color(KnownColor.MenuText);

        public static Color ScrollBar =>
            new Color(KnownColor.ScrollBar);

        public static Color Window =>
            new Color(KnownColor.Window);

        public static Color WindowFrame =>
            new Color(KnownColor.WindowFrame);

        public static Color WindowText =>
            new Color(KnownColor.WindowText);
#endif

    }
}
