using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Test.Examples
{
    public partial class frmCalculator : Form
    {
        public frmCalculator()
        {
            InitializeComponent();
        }
        public string prev;

        public class ScaleInfo
        {
            public float LeftPercent;
            public float TopPercent;
            public float WidthPercent;
            public float HeightPercent;
        }

        public Dictionary<Control, ScaleInfo> keyValuePairs = new Dictionary<Control, ScaleInfo>();

        private void frmCalculator_Load(object sender, EventArgs e)
        {
            var client = ClientSize;

            foreach (Control item in this.Controls)
            {
                var location = item.Location;
                var size = item.Size;


                keyValuePairs[item] = new ScaleInfo()
                {
                    LeftPercent = location.X / (float)client.Width,
                    TopPercent = location.Y / (float)client.Height,
                    WidthPercent = size.Width / (float)client.Width,
                    HeightPercent = size.Height / (float)client.Height
                };

            }
        }

        protected override void OnResize(EventArgs e)
        {
            var client = ClientSize;

            foreach (Control item in this.Controls)
            {
                if (keyValuePairs.ContainsKey(item))
                {
                    var scaleInfo = keyValuePairs[item];
                    // Console.WriteLine(scaleInfo);
                    item.Location = new Point(
                         (int)(client.Width * scaleInfo.LeftPercent),
                         (int)(client.Height * scaleInfo.TopPercent));
                    item.Size = new Size(
                        (int)(client.Width * scaleInfo.WidthPercent),
                        (int)(client.Height * scaleInfo.HeightPercent));                    
                }
            }


            base.OnResize(e);
        }

        private void button15_Click(object sender, EventArgs e)
        {
            textBox1.Text += ((Control)sender).Text;
        }
        private string currentMod;
        
        private void button9_Click(object sender, EventArgs e)
        {
            string mod = ((Control)sender).Text;

            if (string.IsNullOrWhiteSpace(prev))
            {
                currentMod = mod;
                prev = textBox1.Text;
                textBox1.Text = "";
            }
            else
            {
                if (mod == "=")
                {
                    decimal value1 = 0;
                    decimal value2 = 0;
                    decimal.TryParse(prev, out value1);
                    decimal.TryParse(textBox1.Text, out value2);
                    prev = "";

                    if (currentMod == "+")
                    {
                        textBox1.Text = (value1 + value2).ToString();
                    }
                    else if (currentMod == "-")
                    {
                        textBox1.Text = (value1 - value2).ToString();
                    }
                    else if (currentMod == "÷")
                    {
                        textBox1.Text = (value1 / value2).ToString();
                    }
                    else if (currentMod == "X")
                    {
                        textBox1.Text = (value1 * value2).ToString();
                    }
                    currentMod = "";
                }
            }
        }
    }
}
