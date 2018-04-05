using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Test
{
    public class frmCustomer : Form
    {
        private Button button2;
        private Button button1;

        public frmCustomer() : base()
        {            
            InitializeComponent();
        }
        
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(274, 188);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(160, 55);
            this.button1.TabIndex = 0;
            this.button1.Tag = "btn btn-primary";
            this.button1.Text = "Show Me in a Form";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(274, 127);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(160, 55);
            this.button2.TabIndex = 1;
            this.button2.Tag = "btn btn-primary";
            this.button2.Text = "Show Me in a Dialog";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // frmCustomer
            // 
            this.ClientSize = new System.Drawing.Size(697, 413);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Location = new System.Drawing.Point(50, 50);
            this.Name = "frmCustomer";
            this.Tag = "modal-content";
            this.ResumeLayout(false);

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var x = new frmCustomer();
            x.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            var x = new frmCustomer();
            x.ShowDialog();
        }
    }
}
