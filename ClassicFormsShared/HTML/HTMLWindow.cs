#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Text;

namespace Retyped
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

        public double innerHeight { get => Get<double>(nameof(innerHeight)); set => Set(nameof(innerHeight), value); }
        public double innerWidth { get => Get<double>(nameof(innerWidth)); set => Set(nameof(innerWidth), value); }

        private void Set<T>(string name, T value)
        {
            RegisteredFunction.Invoke<T>("element_style_set", uid, name, value);
        }

        private T Get<T>(string name)
        {
            return RegisteredFunction.Invoke<T>("element_style_get", uid, name);
        }

        public Action<MouseEvent> onmousemove
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onmousemove", uid, hash);
            }
        }

        public Action<MouseEvent> onmouseup
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onmouseup", uid, hash);
            }
        }

        public Action<Event> onresize
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onresize", uid, hash);
            }
        }

    }
}
#endif