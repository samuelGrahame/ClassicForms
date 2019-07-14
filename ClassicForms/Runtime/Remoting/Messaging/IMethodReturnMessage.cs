using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    public interface IMethodReturnMessage : IMethodMessage, IMessage
    {
        // Methods
        object GetOutArg(int argNum);
        string GetOutArgName(int index);

        // Properties
        Exception Exception { get; }
        int OutArgCount { get; }
        object[] OutArgs { get; }
        object ReturnValue { get; }
    }





}
