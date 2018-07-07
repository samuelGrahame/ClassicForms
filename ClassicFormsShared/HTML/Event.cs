#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace Retyped
{
    public class Event
    {
        public HTMLElement currentTarget;
        public string uid;

        public void stopPropagation()
        {
            RegisteredFunction.Invoke<object>("stopPropagation", uid);
        }
        //public void stopImmediatePropagation()
        //{
        //    RegisteredFunction.Invoke<string>("element_call", uid, nameof(stopImmediatePropagation));
        //}
        public void preventDefault()
        {
            RegisteredFunction.Invoke<object>("element_call", uid, nameof(preventDefault));
        }


    }
}
#endif