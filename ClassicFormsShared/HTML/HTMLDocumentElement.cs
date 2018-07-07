#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Retyped
{
    public class HTMLDocumentElement : HTMLElement
    {
        public HTMLDocumentElement()
        {
            uid = RegisteredFunction.Invoke<string>("document");
            _body = new HTMLElement()
            {
                uid = RegisteredFunction.Invoke<string>("body")
            };            
        }

        public HTMLDocumentFragement createDocumentFragment()
        {
            return new HTMLDocumentFragement()
            {
                uid = RegisteredFunction.Invoke<string>("createDocumentFragment")
            };
            
        }


        private HTMLElement _body;
        public HTMLElement body => _body;

        public HTMLElement activeElement { get => new HTMLElement() {
            uid = RegisteredFunction.Invoke<string>("document_activeElement_get")
        }; set => RegisteredFunction.Invoke<object>("document_activeElement_set", value == null ? string.Empty : value.uid); }
    }
}
#endif