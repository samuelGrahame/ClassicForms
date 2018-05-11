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
        private Button button3;
        private Button button4;
        private Button button1;

        public frmCustomer() : base()
        {            
            InitializeComponent();
        }
        
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.button4 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Anchor = System.Windows.Forms.AnchorStyles.Top;
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
            this.button2.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.button2.Location = new System.Drawing.Point(274, 127);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(160, 55);
            this.button2.TabIndex = 1;
            this.button2.Tag = "btn btn-primary";
            this.button2.Text = "Show Me in a Dialog";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.button3.Location = new System.Drawing.Point(529, 12);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(156, 389);
            this.button3.TabIndex = 2;
            this.button3.Tag = "btn btn-primary";
            this.button3.Text = "Anchor Right";
            this.button3.UseVisualStyleBackColor = true;
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(12, 12);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(160, 55);
            this.button4.TabIndex = 3;
            this.button4.Tag = "btn btn-primary";
            this.button4.Text = "Click Me to Increase Width";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // frmCustomer
            // 
            this.ClientSize = new System.Drawing.Size(697, 413);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Location = new System.Drawing.Point(50, 50);
            this.Name = "frmCustomer";
            this.Tag = "modal-content";
            this.Resize += new System.EventHandler(this.frmCustomer_Resize);
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

        private void frmCustomer_Resize(object sender, EventArgs e)
        {

        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Width += 1;
        }
    }
}
