﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace System.Windows.Forms
{
    public class Button : ButtonBase
    {
        public Button() : base(new HTMLButtonElement())
        {

        }        
    }
}
