#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassicForms.HTML
{
    public class HTMLLabelElement : HTMLElement
    {
        public HTMLLabelElement() : base("label")
        {
            //htmlFor
        }

        public string htmlFor
        {
            get =>
RegisteredFunction.Invoke<string>("element_get", uid, nameof(htmlFor));
            set =>
                RegisteredFunction.Invoke<string>("element_set", uid, nameof(htmlFor), value);
        }
    }
}
#endif