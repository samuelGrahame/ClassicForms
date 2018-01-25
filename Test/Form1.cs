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
using System;
using System.Drawing;
using System.Windows.Forms;
using System.Data;
using static Retyped.dom;
#endif

namespace Test
{
    /// <summary>
    /// https://getmdl.io/started/index.html
    /// https://getbootstrap.com/docs/4.0/getting-started/introduction/
    /// </summary>
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
#if BRIDGE         
            alert("Hello World");            
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

        private DataTable dt;

        private void button10_Click(object sender, EventArgs e)
        {
            if(dt == null)
            {
                dt = new DataTable();

                dt.Columns.Add("Column1");
                dt.Columns.Add("Column2");

                dataGridView1.DataSource = dt;
            }

            var row = dt.NewRow();

            row["Column1"] = "1";
            row["Column2"] = "Hello World!";

            dt.Rows.Add(row);

            dt.AcceptChanges();

        }
    }
}
