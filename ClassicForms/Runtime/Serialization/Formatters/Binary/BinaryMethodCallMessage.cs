using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    [Serializable]
    internal sealed class BinaryMethodCallMessage
    {
        // Fields
        private object[] _args;
        private object[] _inargs;
        private Type[] _instArgs;
        private LogicalCallContext _logicalCallContext;
        private string _methodName;
        private object _methodSignature;
        private object[] _properties;
        private string _typeName;

        // Methods
        internal BinaryMethodCallMessage(string uri, string methodName, string typeName, Type[] instArgs, object[] args, object methodSignature, LogicalCallContext callContext, object[] properties)
        {
            this._methodName = methodName;
            this._typeName = typeName;
            if (args == null)
            {
                args = new object[0];
            }
            this._inargs = args;
            this._args = args;
            this._instArgs = instArgs;
            this._methodSignature = methodSignature;
            if (callContext == null)
            {
                this._logicalCallContext = new LogicalCallContext();
            }
            else
            {
                this._logicalCallContext = callContext;
            }
            this._properties = properties;
        }

        internal void PopulateMessageProperties(IDictionary dict)
        {
            foreach (DictionaryEntry entry in this._properties)
            {
                dict[entry.Key] = entry.Value;
            }
        }

        // Properties
        public object[] Args =>
            this._args;

        public bool HasProperties =>
            (this._properties != null && this._properties.Length > 0);

        public Type[] InstantiationArgs =>
            this._instArgs;

        //public LogicalCallContext LogicalCallContext =>
        //    this._logicalCallContext;

        public string MethodName =>
            this._methodName;

        public object MethodSignature =>
            this._methodSignature;

        public string TypeName =>
            this._typeName;
    }
}
