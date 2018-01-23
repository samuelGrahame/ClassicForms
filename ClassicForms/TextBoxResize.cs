using System;
using System.Collections.Generic;
#if !BRIDGE
using System.ComponentModel;
#endif
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace System
{
    public class TextBoxResize : TextBox
    {
#if !BRIDGE
        [DefaultValue(true)]
        [Browsable(true)]
#endif
        public override bool AutoSize
        {
            get
            {
                return base.AutoSize;
            }
            set
            {
                base.AutoSize = value;
            }
        }

        public TextBoxResize()
        {
            AutoSize = false;
            
        }
    }
}
