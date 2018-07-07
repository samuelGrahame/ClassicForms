#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassicForms.HTML
{
    public class HTMLTableElement : HTMLElement
    {
        public HTMLTableElement() : base("table")
        {

        }

        public HTMLTableSectionElement createTBody()
        {
            return new HTMLTableSectionElement() { uid = RegisteredFunction.Invoke<string>("createElement", "tbody") };       
        }
        public HTMLTableSectionElement createTHead()
        {
            return new HTMLTableSectionElement() { uid = RegisteredFunction.Invoke<string>("createElement", "thead") };       
        }
    }
}
#endif