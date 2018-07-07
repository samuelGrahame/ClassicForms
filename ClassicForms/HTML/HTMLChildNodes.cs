#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassicForms.HTML
{
    public class HTMLChildNodes
    {
        private HTMLElement owner;

        public HTMLChildNodes(HTMLElement _owner)
        {
            owner = _owner;
        }

        public HTMLElement this[int index]    // Indexer declaration  
        {
            get
            {
                return new HTMLElement()
                {
                    uid = RegisteredFunction.Invoke<string>("element_childnode", owner.uid, index)
                };
            }
        }
    }
}
#endif