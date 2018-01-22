using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class LinkLabel : Control
    {
        public LinkLabel() : base(new HTMLAnchorElement())
        {
            TabStop = false;
            Element.As<HTMLAnchorElement>().Href = "#";
        }

        public override string Text
        {
            get { return Element.TextContent; }
            set
            {
                base.Text = value;
                Element.TextContent = value;
            }
        }

        protected override void OnClick(EventArgs e)
        {
            base.OnClick(e);

            if (LinkClicked != null)
                LinkClicked(this, new LinkLabelLinkClickedEventArgs(null));
        }

        public event LinkLabelLinkClickedEventHandler LinkClicked;

        public class Link
        {

        }
    }
}
