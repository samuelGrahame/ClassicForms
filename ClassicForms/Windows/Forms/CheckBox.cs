using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

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

            

            Element.AppendChild((checkBox = new HTMLInputElement() { Type = InputType.Checkbox, Id = ids }));
            Element.AppendChild(text = new HTMLLabelElement() { HtmlFor = ids });

            checkBox.Style.Cursor = Cursor.Pointer;
            text.Style.Cursor = Cursor.Pointer;
        }

        public bool Checked { get { return checkBox.Checked; } set { checkBox.Checked = value; } }

        public override string Text
        {
            get { return text.TextContent; }
            set
            {
                text.TextContent = value;
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
                        var arry = str.Split(",");
                        Element.ClassName = arry[0];
                        if(arry.Length == 3)
                        {
                            checkBox.ClassName = arry[1];
                            text.ClassName = arry[2];
                        }
                        else
                        {
                            checkBox.ClassName = "";
                            text.ClassName = "";
                        }                            
                    }
                    else
                    {
                        Element.ClassName = str;
                        checkBox.ClassName = "";
                        text.ClassName = "";
                    }                    
                }
                else
                {
                    Element.ClassName = "";
                    checkBox.ClassName = "";
                    text.ClassName = "";
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
                        checkBox.TabIndex = value;
                    }
                    else
                    {
                        checkBox.RemoveAttribute("TabIndex");
                    }
                }                
            }
        }
    }
}
