using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    internal interface ISerializationRootObject
    {
        // Methods
        void RootSetObjectData(SerializationInfo info, StreamingContext ctx);
    }
}
