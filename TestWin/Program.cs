using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Test;

namespace TestWin
{
    class Program
    {
        static void Main(string[] args)
        {
            Application.EnableVisualStyles();
            using (Form1 frm = new Form1())
            {
                Application.Run(frm);
            }

        }
    }
}
