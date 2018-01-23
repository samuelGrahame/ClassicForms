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

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {

        }

        private void button8_Click(object sender, EventArgs e)
        {
            int value = 1;
            if(int.TryParse(textBox3.Text + "", out value))
            {
                progressBar1.Value += value;
            }
            else
            {
                progressBar1.Value += 1;
            }            
        }

        private void button7_Click(object sender, EventArgs e)
        {
            int value = 1;
            if (int.TryParse(textBox3.Text + "", out value))
            {
                progressBar1.Value -= value;
            }
            else
            {
                progressBar1.Value -= 1;
            }
        }
    }
}
