#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassicForms.HTML
{
    public class HTMLInputElement : HTMLElement
    {
        public HTMLInputElement() : base("input")
        {
            
        }

        public bool @checked
        {
            get =>
RegisteredFunction.Invoke<bool>("element_get", uid, "checked");
            set =>
                RegisteredFunction.Invoke<bool>("element_set", uid, "checked", value);
        }

        public string type
        {
            get =>
RegisteredFunction.Invoke<string>("element_get", uid, nameof(type));
            set =>
                RegisteredFunction.Invoke<string>("element_set", uid, nameof(type), value);
        }
    }
}
#endif