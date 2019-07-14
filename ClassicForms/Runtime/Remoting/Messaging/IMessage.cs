using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    public interface IMessage
    {
        // Properties
        IDictionary Properties { get; }
    }
}
