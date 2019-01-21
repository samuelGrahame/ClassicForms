using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

namespace System.Windows.Forms
{
    public class CheckBox : ButtonBase
    {
        private HTMLInputElement checkBox;
        private HTMLLabelElement text;
        private static int checkboxToLabelId;
        public CheckBox() : base(new HTMLDivElement())
        {
            var id = checkboxToLabelId++;
            var ids = "__check" + id.ToString();

            

            Element.appendChild((checkBox = new HTMLInputElement() { type = "checkbox", id = ids }));
            Element.appendChild(text = new HTMLLabelElement() { htmlFor = ids });

            checkBox.style.cursor = "pointer";
            text.style.cursor = "pointer";
        }

        public bool Checked { get { return checkBox.@checked; } set { checkBox.@checked = value; } }

        public override string Text
        {
            get { return text.textContent; }
            set
            {
                text.textContent = value;
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
                    if(str.Contains(","))
                    {
                        var arry = str.Split(',');
                        Element.className = arry[0];
                        if(arry.Length == 3)
                        {
                            checkBox.className = arry[1];
                            text.className = arry[2];
                        }
                        else
                        {
                            checkBox.className = "";
                            text.className = "";
                        }                            
                    }
                    else
                    {
                        Element.className = str;
                        checkBox.className = "";
                        text.className = "";
                    }                    
                }
                else
                {
                    Element.className = "";
                    checkBox.className = "";
                    text.className = "";
                }
            }
        }

        
        public override int TabIndex
        {
            get { return _tabIndex; }
            set
            {
                if(_init)
                {
                    _tabIndex = value;
                    if (TabStop)
                    {
                        checkBox.tabIndex = value;
                    }
                    else
                    {
                        checkBox.removeAttribute("TabIndex");
                    }
                }                
            }
        }
    }
}
