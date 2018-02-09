using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassicForms
{
    public class ServerEventArgs : EventArgs
    {
        public Exception ex;
        public object Result;
    }
}
