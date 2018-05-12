using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class Button : ButtonBase
    {
        public virtual DialogResult DialogResult { get; set; }

        public Button() : base(new HTMLButtonElement())
        {

        }

        protected override void OnClick(EventArgs e)
        {
            if(DialogResult != DialogResult.None)
            {
                var frm = GetForm();
                if(frm != null)
                {
                    frm.DialogResult = DialogResult;
                    frm.Close();
                }
            }
            base.OnClick(e);
        }
    }
}
