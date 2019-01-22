using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static Retyped.dom;

namespace System
{
    public static class Helper
    {
        public struct Vector2
        {
            public Union<string, int, float> X;
            public Union<string, int, float> Y;

            public int Xi
            {
                get { return (int)X; }
                set { X = value; }
            }

            public int Yi
            {
                get { return (int)Y; }
                set { Y = value; }
            }

            public float Xf
            {
                get { return (float)X; }
                set { X = value; }
            }

            public float Yf
            {
                get { return (float)Y; }
                set { Y = value; }
            }

            /// <summary>
            /// adds calc to (100% - 50px) turns to calc(100% - 50px)
            /// </summary>
            /// <param name="a"></param>
            /// <returns></returns>
            internal static string pf(string a)
            {
                return !string.IsNullOrWhiteSpace(a) && a.StartsWith("(") && a.EndsWith(")") ? "calc" + a : a;
            }

            public Vector2(Union<string, int, float> x, Union<string, int, float> y)
            {
                X = x;
                Y = y;
            }
        }

        public static void Empty(this HTMLElement element)
        {
            var len = element.childNodes.length;
            while (len-- > 0)
            {
                element.removeChild(element.childNodes[len]);
            };
        }

        public static T Element<T>(T element, string classname = "") where T : HTMLElement
        {            
            element.className = classname;

            element.style.position = "absolute";
            element.style.boxSizing = "borderbox";
            element.style.boxSizing = "border-box";

            return element;
        }

        public static HTMLDivElement Div(string classname = "")
        {
            return Element(new HTMLDivElement(), classname);
        }

        public static HTMLTableCellElement Cell(string Caption, float X, float Y, float width, bool IsBold = false, bool IsTiny = false, string classr = "", string Alignment = "left", string Forecolor = null, bool ac = true)
        {
            return Element(new HTMLTableCellElement(), Caption, X, Y, width, IsBold, IsTiny, classr, Alignment, Forecolor, ac);
        }

        public static HTMLTableHeaderCellElement HeaderCell(string Caption, float X, float Y, float width, bool IsBold = false, bool IsTiny = false, string classr = "", string Alignment = "left", string Forecolor = null, bool ac = true)
        {            
            return Element(new HTMLTableHeaderCellElement(), Caption, X, Y, width, IsBold, IsTiny, classr, Alignment, Forecolor, ac);
        }

        public static T Element<T>(T element, string Caption, float X, float Y, float width, bool IsBold = false, bool IsTiny = false, string classr = "", string Alignment = "left", string Forecolor = null, bool ac = true) where T : HTMLElement
        {
            element.className = classr;

            element.style.position = "absolute";
            element.style.boxSizing = "borderbox";
            element.style.boxSizing = "border-box";

            element.textContent = Caption;
            element.style.left = X.ToPx();
            element.style.top = Y.ToPx();
            element.style.width = width.ToPx();

            if (Alignment != "left")
            {
                if (Alignment == "right")
                {
                    element.style.direction = "rtl";
                }
                else
                {
                    element.style.textAlign = Alignment;
                }
            }
            //SetBT(lbl, IsBold, IsTiny);
            if (Forecolor != null)
            {
                element.style.color = Forecolor;
            }

            return element;
        }

        public static HTMLSpanElement Label(string Caption, float X, float Y, float width, bool IsBold = false, bool IsTiny = false, string classr = "", string Alignment = "left", string Forecolor = null, bool ac = true)
        {            
            return Element(new HTMLSpanElement(), Caption, X, Y, width, IsBold, IsTiny, classr, Alignment, Forecolor, ac); ;
        }

        public static Control AppendChild(this Control c, Control Node)
        {
            c.Element.appendChild(Node.Element);
            return c;
        }

        public static Control AppendChildren(this Control c, params Control[] Nodes)
        {
            c.Element.AppendChildren(Nodes);

            return c;
        }

        public static void AppendChildren(this Node c, params Control[] Nodes)
        {
            if (Nodes != null && Nodes.Length > 0)
            {
                for (int i = 0; i < Nodes.Length; i++)
                {
                    if (Nodes[i] != null)
                        c.appendChild((Node)Nodes[i].Element);
                }
            }
        }


        public static void AppendChildren(this Node c, params Node[] Nodes)
        {
            if (Nodes != null && Nodes.Length > 0)
            {
                for (int i = 0; i < Nodes.Length; i++)
                {
                    if (Nodes[i] != null)
                        c.appendChild(Nodes[i]);
                }
            }
        }

        public static void Empty(this HTMLElement element, Node exceptNode)
        {
            var len = element.childNodes.length;
            while (len-- > 0)
            {
                var t = (Node)element.childNodes[len];
                if (t != exceptNode)
                    element.removeChild(element.childNodes[len]);
            };
        }

        public static Control SetBounds(this Control c, Union<string, int, float> left, Union<string, int, float> top, Union<string, int, float> width, Union<string, int, float> height)
        {
            c.Element.SetBounds(left, top, width, height);

            return c;
        }

        public static Control SetBoundsFull(this Control c)
        {
            c.Element.SetBoundsFull();

            return c;
        }

        public static void SetBoundsFull(this HTMLElement c)
        {
            c.SetBounds(0, 0, "100%", "100%");
        }

        public static Control SetSize(this Control c, Union<string, int, float> width, Union<string, int, float> height)
        {
            c.Element.SetSize(width, height);

            return c;
        }

        public static void SetBounds(this HTMLElement c, Union<string, int, float> left, Union<string, int, float> top, Union<string, int, float> width, Union<string, int, float> height)
        {
            c.style.left = left.ToHtmlValue();
            c.style.top = top.ToHtmlValue();
            c.style.width = width.ToHtmlValue();
            c.style.height = height.ToHtmlValue();
        }

        public static string ToHtmlValue(this Union<string, int, float> value)
        {
            if (value.Is<string>())
                return Vector2.pf(value.As<string>());
            else if (value.Is<int>())
                return value.As<int>().ToPx();
            else
                return value.As<float>().ToPx();
        }


        public static void SetSize(this HTMLElement c, Union<string, int, float> width, Union<string, int, float> height)
        {
            c.style.width = width.ToHtmlValue();
            c.style.height = height.ToHtmlValue();
        }

        /// <summary>
        /// IE does not support .remove on Element use delete
        /// </summary>
        /// <param name="c"></param>
        public static void Delete(this Element c)
        {
            if (c != null &&
                c.parentElement != null &&
                c.parentElement.contains(c))
                c.parentElement.removeChild(c);
        }

        /// <summary>
        /// IE does not support .remove on Element use delete
        /// </summary>
        /// <param name="c"></param>
        public static void Delete(this HTMLElement c)
        {
            if (c != null &&
                c.parentElement != null &&
                c.parentElement.contains(c))
                c.parentElement.removeChild(c);
        }

        public static string ToPx(this object i)
        {
            return Script.Write<string>("i + 'px'");
        }

        public static void SetLocation(this Control c, int left, int top)
        {
            c.Element.SetLocation(left.ToPx(), top.ToPx());
        }

        public static void SetLocation(this Control c, Union<string, int, float> left, Union<string, int, float> top)
        {
            c.Element.SetLocation(left, top);
        }

        public static void SetLocation(this HTMLElement c, Union<string, int, float> left, Union<string, int, float> top)
        {
            c.style.left = left.ToHtmlValue();
            c.style.top = top.ToHtmlValue();
        }
    }
}
