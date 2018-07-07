#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace Retyped
{
    public class HTMLClassList
    {
        private HTMLElement owner;

        public HTMLClassList(HTMLElement _owner)
        {
            owner = _owner;
        }

        
        public bool contains(string value)
        {
            return RegisteredFunction.Invoke<bool>("classList_contains", owner.uid, value);
        }

        public void remove(string value)
        {
            RegisteredFunction.Invoke<bool>("classList_remove", owner.uid, value);
        }
        public void add(string value)
        {
            RegisteredFunction.Invoke<bool>("classList_add", owner.uid, value);
        }
    }
}
#endif