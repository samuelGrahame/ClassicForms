using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class TabControl : Control
    {
        public TabControl() : base(new HTMLUListElement())
        {
            Element.setAttribute("scope", "tabcontrol");
        }

        internal override void OnControlAdded(Control control)
        {
            base.OnControlAdded(control);

            if(control is TabPage)
            {
                Controls.Add(control.As<TabPage>().Header);

                PerformLayout();
            }
        }

        internal override void OnControlRemoved(Control control)
        {
            base.OnControlRemoved(control);

            if (control is TabPage)
            {
                Controls.Remove(control.As<TabPage>().Header);

                PerformLayout();
            }
        }

        public TabPage[] TabPages { get {
                List<TabPage> pages = new List<TabPage>();
                foreach (var control in Controls)
                {
                    if (control is TabPage)
                    {
                        pages.Add(control.As<TabPage>());
                    }
                }
                return pages.ToArray();                
            } }

        internal void ResizeTabHeaderSize()
        {
            int i = 0;
            double x = 0;
            foreach (var page in TabPages)
            {
                var div = new TabPageHeader();
                div.Text = page.Text;
                div.Element.className = page.Header.Element.className;
                div.Element.style.visibility = "hidden";
                document.body.appendChild(div.Element);
                
                var rec = div.Element.getBoundingClientRect();

                //page.Header.Location = new Drawing.Point((int)x, i == _selectedIndex ? 0 : 4);
                page.Header.Element.style.left = x + "px";

                document.body.removeChild(div.Element);

                x += rec.width;

                page.Element.style.height = "calc(100% - " + ((int)rec.height - 1) + "px)";
                page.Element.style.top = ((int)rec.height - 1) + "px";
                page.Element.style.left = "0";
                page.Element.style.width = "100%";
                
                i++;
            } // tim web messaged you i reckon he will ask you something, okay
        } 

        public override void PerformLayout()
        {
            if(layoutSuspended)
            {
                return;
            }
            base.PerformLayout();

            int i = 0;
            TabPage activePage = null;
            
            foreach (var page in TabPages)
            {
                if(i == 0)
                {
                    if (!page.Header.Element.classList.contains("first"))
                        page.Header.Element.classList.add("first");
                }
                else
                {
                    page.Header.Element.classList.remove("first");
                }
                
                if(!string.IsNullOrWhiteSpace(LinkTag))
                {
                    if(LinkTag.Contains(" "))
                    {
                        string[] tags = LinkTag.Split(' ');
                        foreach (var item in tags)
                        {
                            if(!string.IsNullOrWhiteSpace(item))
                            {
                                if (!page.Header.Element.classList.contains(item))
                                    page.Header.Element.classList.add(item);
                            }
                        }

                    }
                    else
                    {
                        if (!page.Header.Element.classList.contains(LinkTag))
                            page.Header.Element.classList.add(LinkTag);
                    }
                    
                }

                if (_selectedIndex == i)
                {
                    activePage = page;
                    if(!page.Header.Element.classList.contains("active"))
                        page.Header.Element.classList.add("active");

                    if (!page.Element.classList.contains("active"))
                        page.Element.classList.add("active");

                    page.Visible = true;
                    page.Size = new Drawing.Size(this.Size.Width - 8, this.Size.Height - (22 + 4));
                }
                else
                {

                    Controls.Remove(page.Header);
                    Controls.Add(page.Header);

                    page.Element.classList.remove("active");

                    page.Header.Element.classList.remove("active");
                    page.Visible = false;
                }
                i++;
            }

            if (activePage != null)
            {
                Controls.Remove(activePage.Header);
                Controls.Add(activePage.Header);
            }

            ResizeTabHeaderSize();
        }

        private int _selectedIndex = -1;

        public int SelectedIndex
        {
            get { return _selectedIndex; }
            set {
                if(_selectedIndex != value)
                {
                    _selectedIndex = value;
                    PerformLayout();
                }                
            }
        }

        private string LinkTag;

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
                        var arry = str.Split(',');
                        Element.className = arry[0];
                        if (arry.Length == 2)
                        {
                            LinkTag = arry[1];                            
                        }
                        else
                        {
                            LinkTag = "";
                        }
                    }
                    else
                    {
                        Element.className = str;
                        LinkTag = "";
                    }
                }
                else
                {
                    Element.className = "";
                    LinkTag = "";
                }
            }
        }

    }
}
