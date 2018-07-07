#if BLAZOR
using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Retyped
{
    public class HTMLElement
    {
        public string uid;

        public HTMLStyleCollection style;
        public HTMLClassList classList;
        public HTMLChildNodes childNodes;

        public string value
        {
            get =>
                RegisteredFunction.Invoke<string>("element_get", uid, nameof(value));
            set =>
                RegisteredFunction.Invoke<string>("element_set", uid, nameof(value), value);
        }

        public string innerText
        {
            get =>
                RegisteredFunction.Invoke<string>("element_get", uid, nameof(innerText));
            set =>
                RegisteredFunction.Invoke<string>("element_set", uid, nameof(innerText), value);
        }

        public Action<MouseEvent> onmousedown
        {
            set {
                string hash = Guid.NewGuid().ToString();
                dom.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onmousedown", uid, hash);
            }                
        }

        public Action<MouseEvent> ondblclick
        {
            set {
                string hash = Guid.NewGuid().ToString();
                dom.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("ondblclick", uid, hash);
            }                
        }

        public Action<Event> onchange
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onchange", uid, hash);
            }
        }
        public Action<Event> onpaste
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onpaste", uid, hash);
            }
        }

        public Action<Event> onkeydown
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onkeydown", uid, hash);
            }
        }

        public Action<Event> onkeyup
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onkeyup", uid, hash);
            }
        }

        public Action<Event> onclick
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onclick", uid, hash);
            }
        }
        public Action<Event> onblur
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onblur", uid, hash);
            }
        }
        public Action<MouseEvent> onmouseenter
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onmouseenter", uid, hash);
            }
        }
        public Action<MouseEvent> onmouseleave
        {
            set
            {
                string hash = Guid.NewGuid().ToString();
                dom.normalMouseEvent.Add(hash, value);
                RegisteredFunction.Invoke<object>("onmouseleave", uid, hash);
            }
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
        //innerText
        public HTMLElement parentElement
        {
            get
            {
                var ruid = RegisteredFunction.Invoke<string>("element_parentElement_get", uid);
                if(string.IsNullOrWhiteSpace(ruid))
                {
                    return null;
                }
                else
                {
                    return new HTMLElement() { uid = ruid };
                }
            }                 
            set =>
                RegisteredFunction.Invoke<string>("element_parentElement_set", uid, value);
        }

        public HTMLElement(string tag) : this()
        {
            uid = RegisteredFunction.Invoke<string>("createElement", tag);
        }

        public int tabIndex
        {
            get =>
RegisteredFunction.Invoke<int>("element_get", uid, nameof(tabIndex));
            set =>
                RegisteredFunction.Invoke<int>("element_set", uid, nameof(tabIndex), value);
        }

        public string textContent
        {
            get =>
RegisteredFunction.Invoke<string>("element_get", uid, nameof(textContent));
            set =>
                RegisteredFunction.Invoke<string>("element_set", uid, nameof(textContent), value);
        }

        public string id
        {
            get =>
RegisteredFunction.Invoke<string>("element_get", uid, nameof(id));
            set =>
                RegisteredFunction.Invoke<string>("element_set", uid, nameof(id), value);
        }

        public HTMLElement()
        {
            style = new HTMLStyleCollection(this);
            classList = new HTMLClassList(this);
            childNodes = new HTMLChildNodes(this);
        }

        public void appendChild(HTMLElement child)
        {
            RegisteredFunction.Invoke<object>("appendChild", uid, child.uid);
        }

        public void removeChild(HTMLElement child)
        {
            RegisteredFunction.Invoke<object>("removeChild", uid, child.uid);
        }

        public T As<T>() where T : HTMLElement
        {
            return (T)this;
        }


        public void insertBefore(HTMLElement child, HTMLElement child2)
        {
            RegisteredFunction.Invoke<object>("insertBefore", uid, child.uid, child2.uid);
        }
        public string innerHTML { get =>
                RegisteredFunction.Invoke<string>("innerHTML_get", uid);
            set => 
                RegisteredFunction.Invoke<string>("innerHTML_set", uid, value);
        }

        public string className
        {
            get =>
RegisteredFunction.Invoke<string>("element_get", uid, nameof(className));
            set =>
                RegisteredFunction.Invoke<string>("element_set", uid, nameof(className), value);
        }


        public DOMRect getBoundingClientRect()
        {
            var domRect = RegisteredFunction.Invoke<string>("getBoundingClientRect", uid).Split(',');
            var domRectR = new DOMRect();
            domRectR.left = Convert.ToDouble(domRect[0]);
            domRectR.top = Convert.ToDouble(domRect[1]);
            domRectR.right = Convert.ToDouble(domRect[2]);
            domRectR.bottom = Convert.ToDouble(domRect[3]);

            domRectR.x = Convert.ToDouble(domRect[4]);
            domRectR.y = Convert.ToDouble(domRect[5]);
            domRectR.width = Convert.ToDouble(domRect[6]);
            domRectR.height = Convert.ToDouble(domRect[7]);
            
            return domRectR;
        }

        public void focus()
        {
            RegisteredFunction.Invoke<string>("element_call", uid, nameof(focus));
        }

        public void blur()
        {
            RegisteredFunction.Invoke<string>("element_call", uid, nameof(blur));
        }

        public string getAttribute(string name)
        {
            return RegisteredFunction.Invoke<string>("getAttribute", uid, name);
        }

        public string removeAttribute(string name)
        {
            return RegisteredFunction.Invoke<string>("removeAttribute", uid, name);
        }

        public void setAttribute(string name, string value)
        {
            RegisteredFunction.Invoke<string>("setAttribute", uid, name, value);
        }
    }
}
#endif