#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassicForms.HTML
{
    public class HTMLStyleCollection
    {
        private HTMLElement owner;

        public HTMLStyleCollection(HTMLElement _owner)
        {
            owner = _owner;
        }

        private void Set(string name, string value)
        {
            RegisteredFunction.Invoke<object>("element_style_set", owner.uid, name, value);
        }

        private string Get(string name)
        {
            return RegisteredFunction.Invoke<string>("element_style_get", owner.uid, name);
        }

        public string overflow { get => Get(nameof(overflow)); set => Set(nameof(overflow), value); }
        public string position { get => Get(nameof(position)); set => Set(nameof(position), value); }

        public string boxSizing { get => Get(nameof(boxSizing)); set => Set(nameof(boxSizing), value); }
        public string padding { get => Get(nameof(padding)); set => Set(nameof(padding), value); }
        public string fontSize { get => Get(nameof(fontSize)); set => Set(nameof(fontSize), value); }
        public string fontFamily { get => Get(nameof(fontFamily)); set => Set(nameof(fontFamily), value); }
        public string backgroundColor { get => Get(nameof(backgroundColor)); set => Set(nameof(backgroundColor), value); }

        public string borderTopWidth { get => Get(nameof(borderTopWidth)); set => Set(nameof(borderTopWidth), value); }
        public string borderBottomWidth { get => Get(nameof(borderBottomWidth)); set => Set(nameof(borderBottomWidth), value); }
        public string borderLeftWidth { get => Get(nameof(borderLeftWidth)); set => Set(nameof(borderLeftWidth), value); }
        public string borderRightWidth { get => Get(nameof(borderRightWidth)); set => Set(nameof(borderRightWidth), value); }
        public string cursor { get => Get(nameof(cursor)); set => Set(nameof(cursor), value); }
        public string width { get => Get(nameof(width)); set => Set(nameof(width), value); }
        public string height { get => Get(nameof(height)); set => Set(nameof(height), value); }
        public string left { get => Get(nameof(left)); set => Set(nameof(left), value); }
        public string top { get => Get(nameof(top)); set => Set(nameof(top), value); }

        public string opacity { get => Get(nameof(opacity)); set => Set(nameof(opacity), value); }

        public string visibility { get => Get(nameof(visibility)); set => Set(nameof(visibility), value); }
        public string zIndex { get => Get(nameof(zIndex)); set => Set(nameof(zIndex), value); }        

        public string userSelect { get => Get(nameof(userSelect)); set => Set(nameof(userSelect), value); }        
        public string outline { get => Get(nameof(outline)); set => Set(nameof(outline), value); }        
        public string margin { get => Get(nameof(margin)); set => Set(nameof(margin), value); }  
        public string borderBottom { get => Get(nameof(borderBottom)); set => Set(nameof(borderBottom), value); } 



    }
}
#endif