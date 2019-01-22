using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Test
{
    public partial class frmTest : Form
    {
        public frmTest()
        {
            InitializeComponent();
        }
        static Random r = new Random();
        private void frmTest_Load(object sender, EventArgs e)
        {
            var dt = new DataTable();
            dt.Columns.Add("Name", typeof(int));
#if BRIDGE
            dt.BeginNewRow(10000);
#endif
            for (int i = 0; i < 10000; i++)
            {
                var dr = dt.NewRow();

                dr[0] = r.Next();

            }

            dt.AcceptChanges();

            dataGridView1.DataSource = dt;


            dt = new DataTable();
            dt.Columns.Add("Data1", typeof(int));
            dt.Columns.Add("Data2", typeof(decimal));
            dt.Columns.Add("Data3", typeof(string));
            dt.Columns.Add("Data4", typeof(DateTime));

#if BRIDGE
            dt.BeginNewRow(10000);
#endif
            for (int i = 0; i < 10000; i++)
            {
                var dr = dt.NewRow();

                dr[0] = r.Next();
                dr[1] = (decimal)r.NextDouble();
                dr[2] = r.Next().ToString() + " string";
                dr[3] = DateTime.Now.AddDays(r.NextDouble());

            }

            dt.AcceptChanges();

            dataGridView2.DataSource = dt;


#if BRIDGE
            dataGridView1.ColumnAutoWidth = true;

            dataGridView2.BestFitAllColumns(true);

#endif
        }

        private void button1_Click(object sender, EventArgs e)
        {
            dataGridView1.Tag = "table table-dark";
            dataGridView2.Tag = "table table-dark";
        }

        private void button2_Click(object sender, EventArgs e)
        {
            dataGridView1.Tag = "table table-striped";
            dataGridView2.Tag = "table table-striped";
        }

        private void button3_Click(object sender, EventArgs e)
        {
            dataGridView1.Tag = "table table-striped table-dark";
            dataGridView2.Tag = "table table-striped table-dark";
        }

        private void button4_Click(object sender, EventArgs e)
        {
            dataGridView1.Tag = "table";
            dataGridView2.Tag = "table";
        }
    }
}
