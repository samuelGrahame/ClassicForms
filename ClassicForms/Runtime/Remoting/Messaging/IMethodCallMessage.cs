using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    public interface IMethodCallMessage : IMethodMessage, IMessage
    {
        // Methods
        object GetInArg(int argNum);
        string GetInArgName(int index);

        // Properties
        int InArgCount { get; }
        object[] InArgs { get; }
    }
}
