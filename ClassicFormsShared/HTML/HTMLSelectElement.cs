#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace Retyped
{
    public class HTMLSelectElement : HTMLElement
    {
        public HTMLSelectElement() : base("select")
        {

        }

        public bool multiple
        {
            get =>
                RegisteredFunction.Invoke<bool>("element_get", uid, nameof(multiple));
            set =>
                RegisteredFunction.Invoke<bool>("element_set", uid, nameof(multiple), value);
        }
    }
}
#endif