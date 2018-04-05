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

        public frmCustomer() : base()
        {            
            InitializeComponent();
        }
        
        private void InitializeComponent()
        {
            this.SuspendLayout();
            // 
            // frmCustomer
            // 
            this.ClientSize = new System.Drawing.Size(697, 413);
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
    }
}
