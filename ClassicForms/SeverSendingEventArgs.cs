using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassicForms
{
    public class SeverSendingEventArgs : EventArgs
    {
        public string ContentType;
        public object Data;
        public string DataType;

        public string Password;
        public string Username;
        public string Url;
        public string Method;

        public bool Cancel;
    }
}
