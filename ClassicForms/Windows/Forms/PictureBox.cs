using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class PictureBox : Control, ISupportInitialize
    {
        public PictureBox() : base(new HTMLDivElement())
        {

        }

        public ImageLayout BackgroundImageLayout { get; set; }
        public Image BackgroundImage { get; set; }

        public void BeginInit()
        {
            
        }

        public void EndInit()
        {
            
        }
    }
}
