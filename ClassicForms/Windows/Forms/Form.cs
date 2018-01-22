using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class Form : ContainerControl
    {
        private static int FormTopBorder = 27;
        private static int FormBottonBorder = 6;
        private static int FormLeftBorder = 6;
        private static int FormRightBorder = 6;

        public Form() : base()
        {
            BackColor = SystemColors.Control;
            Element.Style.BorderTop = "solid " + FormTopBorder + "px" + " " + Color.CornflowerBlue;
            Element.Style.BorderBottom = "solid " + FormBottonBorder + "px" + " " + Color.CornflowerBlue;

            Element.Style.BorderLeft = "solid " + FormLeftBorder + "px" + " " + Color.CornflowerBlue;
            Element.Style.BorderRight = "solid " + FormRightBorder + "px" + " " + Color.CornflowerBlue;

            TabStop = false;
        }

        public static Size GetClientSize(Size size)
        {
            return new Size(size.Width - (FormLeftBorder + FormRightBorder), size.Height - (FormTopBorder + FormBottonBorder));
        }

        public static Size SetSize(Size clientSize)
        {
            return new Size(clientSize.Width + (FormLeftBorder + FormRightBorder), clientSize.Height + (FormTopBorder + FormBottonBorder));
        }

        protected virtual void Dispose(bool disposing)
        {

        }

        public void SuspendLayout()
        {

        }
        public void ResumeLayout(bool performLayout)
        {

        }

        public void Show()
        {
            Document.Body.AppendChild(Element);
        }

        public Size ClientSize { get { return GetClientSize(Size); } set { Size = SetSize(value); } }
        public override string Text { get; set; }
    }
}
