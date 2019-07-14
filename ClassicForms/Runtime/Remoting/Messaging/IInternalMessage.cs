using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    internal interface IInternalMessage
    {
        // Methods
        bool HasProperties();
        void SetCallContext(LogicalCallContext callContext);
        void SetURI(string uri);

        // Properties
        //Identity IdentityObject { [SecurityCritical] get; [SecurityCritical] set; }
        //ServerIdentity ServerIdentityObject { [SecurityCritical] get; [SecurityCritical] set; }
    }
}
