using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace System.Windows.Forms
{
    public class ProgressBar : Control
    {
        internal HTMLDivElement progressBar;
        public ProgressBar() : base(new HTMLDivElement())
        {
            Element.AppendChild(progressBar = new HTMLDivElement());
            TabStop = false;
        }
        
        public override Color ForeColor { get { return base.ForeColor; } set {
                base.ForeColor = value;
                if(_init)
                    progressBar.Style.BackgroundColor = value.ToHtml();
            } }

        private int _value;
        public int Value { get { return _value; }  set {
                if (value < 0)
                    value = 0;
                if (value > 100)
                    value = 100;
                _value = value;
                if(_init)
                    progressBar.Style.Width = _value + "%";
            } }

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
                        if (arry.Length == 2)
                        {
                            progressBar.ClassName = arry[1];                            
                        }
                        else
                        {
                            progressBar.ClassName = "";                            
                        }
                    }
                    else
                    {
                        Element.ClassName = str;
                        progressBar.ClassName = "";
                    }
                }
                else
                {
                    Element.ClassName = "";
                    progressBar.ClassName = "";
                }
            }
        }
    }
}
