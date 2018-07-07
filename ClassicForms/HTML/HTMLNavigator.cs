#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassicForms.HTML
{
    public class HTMLNavigator
    {
        public string uid;
        public HTMLNavigator()
        {
            uid = RegisteredFunction.Invoke<string>("navigator");
        }
        public string userAgent => RegisteredFunction.Invoke<string>("element_get", uid, nameof(userAgent));
    }
}
#endif