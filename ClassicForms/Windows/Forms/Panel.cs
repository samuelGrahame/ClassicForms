using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Retyped;

namespace System.Windows.Forms
{
    public class Panel : ContainerControl
    {
        public BorderStyle _borderStyle;
        public BorderStyle BorderStyle { get { return _borderStyle; } set {
                if(_borderStyle != value)
                {
                    _borderStyle = value;
                    switch (_borderStyle)
                    {
                        case BorderStyle.None:
                            Element.style.border = null;
                            break;
                        case BorderStyle.FixedSingle:                            
                        case BorderStyle.Fixed3D:
                            Element.style.border = "1px solid rgb(100, 100, 100)";
                            break;
                        default:
                            break;
                    }                    
                }                
            }
        }

        public bool AutoScroll
        {
            get { return Element.style.overflow == "auto"; }
            set {
                if(value)
                {
                    Element.style.overflow = "auto";
                }
                else
                {
                    Element.style.overflow = null;
                }                
            }
        }


        public Panel() : base()
        {
            TabStop = false;
        }        
    }
}
