using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace System.Windows.Forms
{
    public class GroupBox : Control
    {
        private HTMLDivElement legend;
        private Panel panel;
        public GroupBox() : base(new HTMLDivElement())
        {
            panel = new Panel();

            Element.AppendChild(legend = new HTMLDivElement());
            Element.AppendChild(panel.Element);
            panel.Element.Style.Position = Position.Relative;
            Controls._owner = panel;
        }

        public override string Text
        {
            get { return legend.TextContent; }
            set
            {
                base.Text = value;
                legend.TextContent = value;
            }
        }

        public override object Tag
        {
            get { return _tag; }
            set
            {
                _tag = value;
                if (_tag is string)
                {
                    var str = (_tag + "");
                    if (str.Contains(","))
                    {
                        var arry = str.Split(",");
                        Element.ClassName = arry[0];
                        if (arry.Length == 3)
                        {
                            legend.ClassName = arry[1];
                            panel.Element.ClassName = arry[2];
                        }
                        else
                        {
                            legend.ClassName = "";
                            panel.Element.ClassName = "";
                        }
                    }
                    else
                    {
                        Element.ClassName = str;
                        legend.ClassName = "";
                        panel.Element.ClassName = "";
                    }
                }
                else
                {
                    Element.ClassName = "";
                    legend.ClassName = "";
                    panel.Element.ClassName = "";
                }
            }
        }
    }
}
