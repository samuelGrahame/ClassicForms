using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    public interface IMethodMessage : IMessage
    {
        // Methods
        object GetArg(int argNum);
        string GetArgName(int index);

        // Properties
        int ArgCount { get; }
        object[] Args { get; }
        bool HasVarArgs { get; }
        LogicalCallContext LogicalCallContext { get; }
        MethodBase MethodBase { get; }
        string MethodName { get; }
        object MethodSignature { get; }
        string TypeName { get; }
        string Uri { get; }
    }
}
