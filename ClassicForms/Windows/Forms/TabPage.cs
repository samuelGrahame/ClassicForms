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
            if(Parent is TabControl)
            {
                var pages = Parent.As<TabControl>().TabPages;
                for (int i = 0; i < pages.Length; i++)
                {
                    if(pages[i] == this)
                    {
                        Parent.As<TabControl>().SelectedIndex = i;
                        return;
                    }
                }
                Parent.As<TabControl>().SelectedIndex = -1;                
            }
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
