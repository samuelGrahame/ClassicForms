using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

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
            Element.setAttribute("scope", "form");
            
            TabStop = false;
        }

        public override Font Font { get { return base.Font; } set {                
                base.Font = value;                
            } }        

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

       
        public void Show()
        {
            document.body.appendChild(Element);
        }
               

        public Size ClientSize { get { return GetClientSize(Size); } set { Size = SetSize(value); } }
        public override string Text { get; set; }
    }
}
