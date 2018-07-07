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

        public double innerHeight { get => Convert.ToDouble(Get(nameof(innerHeight))); set => Set(nameof(innerHeight), (long)value); }
        public double innerWidth { get => Convert.ToDouble(Get(nameof(innerWidth))); set => Set(nameof(innerWidth), (long)value); }

        private void Set(string name, long value)
        {
            RegisteredFunction.Invoke<object>("element_set", uid, name, value);
        }

        private long Get(string name)
        {
            return RegisteredFunction.Invoke<long>("element_get", uid, name);
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