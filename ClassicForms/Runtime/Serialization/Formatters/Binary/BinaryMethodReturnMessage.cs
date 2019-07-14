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
    internal class BinaryMethodReturnMessage
    {
        // Fields
        private object[] _args;
        private Exception _exception;
        private LogicalCallContext _logicalCallContext;
        private object[] _outargs;
        private object[] _properties;
        private object _returnValue;

        // Methods
        internal BinaryMethodReturnMessage(object returnValue, object[] args, Exception e, LogicalCallContext callContext, object[] properties)
        {
            this._returnValue = returnValue;
            if (args == null)
            {
                args = new object[0];
            }
            this._outargs = args;
            this._args = args;
            this._exception = e;
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

        public Exception Exception =>
            this._exception;

        public bool HasProperties =>
            this._properties != null && this._properties.Length > 0;

        public LogicalCallContext LogicalCallContext =>
            this._logicalCallContext;

        public object ReturnValue =>
            this._returnValue;
    }



}
