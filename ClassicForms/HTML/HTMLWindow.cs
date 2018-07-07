#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassicForms.HTML
{
    public class HTMLWindow
    {
        public string uid;
        public HTMLWindow()
        {
            uid = RegisteredFunction.Invoke<string>("window");
            _nav = new HTMLNavigator();

        }
        private HTMLNavigator _nav;
        public HTMLNavigator navigator => _nav;

        public Action<MouseEvent> onmousemove
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                HTMLStatic.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onmousemove", uid, hash);
            }
        }

        public Action<MouseEvent> onmouseup
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                HTMLStatic.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onmouseup", uid, hash);
            }
        }

    }
}
#endif