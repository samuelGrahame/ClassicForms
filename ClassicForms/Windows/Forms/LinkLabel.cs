using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

namespace System.Windows.Forms
{
    public class LinkLabel : Control
    {
        public LinkLabel() : base(new HTMLAnchorElement())
        {
            TabStop = false;
            //Element.As<HTMLAnchorElement>().Href = "#";
            Element.style.cursor = "pointer";
        }

        public override string Text
        {
            get { return Element.textContent; }
            set
            {
                base.Text = value;
                Element.textContent = value;
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
