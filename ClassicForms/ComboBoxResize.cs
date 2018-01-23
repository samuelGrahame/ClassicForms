using System;
using System.Collections.Generic;
#if !BRIDGE
using System.ComponentModel;
using System.Drawing;
#endif
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace System
{
    public class ComboBoxResize : ComboBox
    {
#if !BRIDGE
        [DefaultValue(false)]
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

#if !BRIDGE
        public override Size MinimumSize { get => base.MinimumSize; set => base.MinimumSize = base.Size; }

        public ComboBoxResize()
        {
            DrawMode = System.Windows.Forms.DrawMode.OwnerDrawVariable;
            AutoSize = false;
        }
#endif

    }
}
