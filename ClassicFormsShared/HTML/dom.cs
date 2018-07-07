#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace Retyped
{
    public static class dom
    {
        public static HTMLDocumentElement document;
        public static HTMLWindow window;

        static dom()
        {
            document = new HTMLDocumentElement();
            window = new HTMLWindow();
        }

        public static string ToHtml(this Color color)
        {
            if (color.A != 255)
            {
                return string.Format("rgba({1},{2},{3},{0})", color.A, color.R, color.G, color.B);
            }
            else
            {
                return string.Format("rgb({0},{1},{2})", color.R, color.G, color.B);
            }
        }
        public static Dictionary<string, Action<Event>> normalEvent = new Dictionary<string, Action<Event>>();
        public static Dictionary<string, Action<MouseEvent>> normalMouseEvent = new Dictionary<string, Action<MouseEvent>>();

        public static void InvokeEvent(string uid, string ev)
        {
            try
            {
                normalEvent[uid](new Event() { uid = ev });
            }
            catch (Exception)
            {

            }
        }

        public static void InvokeMouseEvent(string uid, string ev)
        {
            try
            {
                //Console.WriteLine(ev);
                MouseEvent mev = null;
                try
                {
                    var args = ev.Split('\n');
                    // Console.WriteLine(obj.GetType());
                    //  Console.WriteLine(JsonConvert.SerializeObject(obj));

                    //var data = ev.x + '\n' + ev.y + '\n' + ev.clientX + '\n' + ev.clientY + '\n' + ev.layerX + '\n' + ev.layerY + '\n' + ev.currentTarget.gui + '\n' + ev.button;

                    mev = new MouseEvent()
                    {
                        x = Convert.ToDouble(args[0]),
                        y = Convert.ToDouble(args[1]),
                        clientX = Convert.ToDouble(args[2]),
                        clientY = Convert.ToDouble(args[3]),
                        layerX = Convert.ToDouble(args[4]),
                        layerY = Convert.ToDouble(args[5]),
                        currentTarget = new HTMLElement() { uid = args[6]  },
                        button = Convert.ToDouble(args[7]),
                        uid = args[8]
                    };
                }
                catch (Exception)
                {
                }
                normalMouseEvent[uid](mev);
            }
            catch (Exception)
            {

            }
        }
    }
}
#endif