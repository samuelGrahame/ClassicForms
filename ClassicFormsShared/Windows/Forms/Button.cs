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

        protected override string GetDefaultTag()
        {
            var currentTag = Tag as string;

            if (Settings.IsUsingMaterial())
            {
                if (string.IsNullOrWhiteSpace(currentTag) || !currentTag.ToLower().Contains("btn-primary"))
                    return "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
                else
                    return "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
            }                
            else if(Settings.IsUsingBootStrap())
            {
                if(string.IsNullOrWhiteSpace(currentTag) || !currentTag.ToLower().Contains("btn"))
                    return "btn btn-secondary";
            }

            return base.GetDefaultTag();
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
