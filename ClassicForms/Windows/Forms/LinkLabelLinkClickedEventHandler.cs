using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public delegate void LinkLabelLinkClickedEventHandler(object sender, LinkLabelLinkClickedEventArgs e);
    //
    // Summary:
    //     Provides data for the System.Windows.Forms.LinkLabel.LinkClicked event.    
    public class LinkLabelLinkClickedEventArgs : EventArgs
    {
        //
        // Summary:
        //     Initializes a new instance of the System.Windows.Forms.LinkLabelLinkClickedEventArgs
        //     class with the specified link.
        //
        // Parameters:
        //   link:
        //     The System.Windows.Forms.LinkLabel.Link that was clicked.
        public LinkLabelLinkClickedEventArgs(LinkLabel.Link link)
        {

        }
        //
        // Summary:
        //     Initializes a new instance of the System.Windows.Forms.LinkLabelLinkClickedEventArgs
        //     class with the specified link and the specified mouse button.
        //
        // Parameters:
        //   link:
        //     The System.Windows.Forms.LinkLabel.Link that was clicked.
        //
        //   button:
        //     One of the System.Windows.Forms.MouseButtons values.
        public LinkLabelLinkClickedEventArgs(LinkLabel.Link link, MouseButtons button)
        {

        }

        //
        // Summary:
        //     Gets the mouse button that causes the link to be clicked.
        //
        // Returns:
        //     One of the System.Windows.Forms.MouseButtons values.
        public MouseButtons Button { get; }
        //
        // Summary:
        //     Gets the System.Windows.Forms.LinkLabel.Link that was clicked.
        //
        // Returns:
        //     A link on the System.Windows.Forms.LinkLabel.
        public LinkLabel.Link Link { get; }
    }
}
