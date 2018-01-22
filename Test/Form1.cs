#if !BRIDGE
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
#else
using Bridge.Html5;
using System;
using System.Drawing;
using System.Windows.Forms;
#endif

namespace Test
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
#if BRIDGE
            Global.Alert("Hello World");
#endif
        }
    }
}
