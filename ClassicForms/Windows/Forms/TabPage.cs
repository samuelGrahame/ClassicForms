using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class TabPage : Panel
    {
        internal TabPageHeader Header;
        public bool UseVisualStyleBackColor { get; set; }

        public TabPage()
        {
            Header = new TabPageHeader();
            Header.Click += Header_Click;
         
            Element.setAttribute("scope", "tabpage");           
        }

        private void Header_Click(object sender, EventArgs e)
        {
            if(Parent != null && Parent is TabControl)
            {
                Parent.As<TabControl>().SelectedPage = this;                
            }
        }

        protected override void OnChildGotTabbed()
        {
            if (Parent != null && Parent is TabControl)
            {
                Parent.As<TabControl>().SelectedPage = this;
            }
            base.OnChildGotTabbed();
        }

        public override string Text
        {
            get
            {
                return Header.Text;
            }

            set
            {
                if(Header.Text != value)
                {
                    Header.Text = value;
                    if(Parent is TabControl)
                    {
                        Parent.As<TabControl>().ResizeTabHeaderSize();
                    }
                }                
            }
        }
    }
}
