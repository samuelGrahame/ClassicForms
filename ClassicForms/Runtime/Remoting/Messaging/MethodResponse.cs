using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    public class MethodResponse : IMethodMessage, IMessage, ISerializable, ISerializationRootObject, IInternalMessage, IMethodReturnMessage // TODO: IMethodReturnMessage
    {
        // Fields
        //private RemotingMethodCachedData _methodCache;
        private int argCount;
        //private ArgMapper argMapper;
        private LogicalCallContext callContext;
        protected IDictionary ExternalProperties;
        private Exception fault;
        private bool fSoap;
        protected IDictionary InternalProperties;
        private string methodName;
        private Type[] methodSignature;
        private MethodBase MI;
        private object[] outArgs;
        private object retVal;
        private string typeName;
        private string uri;

        // Methods
        
        //public MethodResponse(Header[] h1, IMethodCallMessage mcm)
        //{
        //    if (mcm == null)
        //    {
        //        throw new ArgumentNullException("mcm");
        //    }
        //    Message message = mcm as Message;
        //    if (message != null)
        //    {
        //        this.MI = message.GetMethodBase();
        //    }
        //    else
        //    {
        //        this.MI = mcm.MethodBase;
        //    }
        //    if (this.MI == null)
        //    {
        //        throw new Exception(string.Format(CultureInfo.CurrentCulture, EnvironmentV2.GetResourceString("Remoting_Message_MethodMissing"), mcm.MethodName, mcm.TypeName));
        //    }
        //    this._methodCache = InternalRemotingServices.GetReflectionCachedData(this.MI);
        //    this.argCount = this._methodCache.Parameters.Length;
        //    this.fSoap = true;
        //    this.FillHeaders(h1);
        //}
        
        internal MethodResponse(IMethodCallMessage msg, object handlerObject, BinaryMethodReturnMessage smuggledMrm)
        {
            if (msg != null)
            {
                this.MI = msg.MethodBase;
                //this._methodCache = InternalRemotingServices.GetReflectionCachedData(this.MI);
                this.methodName = msg.MethodName;
                this.uri = msg.Uri;
                this.typeName = msg.TypeName;
                //if (this._methodCache.IsOverloaded())
                //{
                //    this.methodSignature = (Type[])msg.MethodSignature;
                //}
                //this.argCount = this._methodCache.Parameters.Length;
            }
            this.retVal = smuggledMrm.ReturnValue;
            this.outArgs = smuggledMrm.Args;
            this.fault = smuggledMrm.Exception;
            this.callContext = smuggledMrm.LogicalCallContext;
            if (smuggledMrm.HasProperties)
            {
                smuggledMrm.PopulateMessageProperties(this.Properties);
            }
            this.fSoap = false;
        }

        
        //internal MethodResponse(IMethodCallMessage msg, SmuggledMethodReturnMessage smuggledMrm, ArrayList deserializedArgs)
        //{
        //    this.MI = msg.MethodBase;
        //    this._methodCache = InternalRemotingServices.GetReflectionCachedData(this.MI);
        //    this.methodName = msg.MethodName;
        //    this.uri = msg.Uri;
        //    this.typeName = msg.TypeName;
        //    if (this._methodCache.IsOverloaded())
        //    {
        //        this.methodSignature = (Type[])msg.MethodSignature;
        //    }
        //    this.retVal = smuggledMrm.GetReturnValue(deserializedArgs);
        //    this.outArgs = smuggledMrm.GetArgs(deserializedArgs);
        //    this.fault = smuggledMrm.GetException(deserializedArgs);
        //    this.callContext = smuggledMrm.GetCallContext(deserializedArgs);
        //    if (smuggledMrm.MessagePropertyCount > 0)
        //    {
        //        smuggledMrm.PopulateMessageProperties(this.Properties, deserializedArgs);
        //    }
        //    this.argCount = this._methodCache.Parameters.Length;
        //    this.fSoap = false;
        //}

        
        internal void FillHeader(string name, object value)
        {
            if (name.Equals("__MethodName"))
            {
                this.methodName = (string)value;
            }
            else if (name.Equals("__Uri"))
            {
                this.uri = (string)value;
            }
            else if (name.Equals("__MethodSignature"))
            {
                this.methodSignature = (Type[])value;
            }
            else if (name.Equals("__TypeName"))
            {
                this.typeName = (string)value;
            }
            else if (name.Equals("__OutArgs"))
            {
                this.outArgs = (object[])value;
            }
            else if (name.Equals("__CallContext"))
            {
                if (value is string)
                {
                    this.callContext = new LogicalCallContext();
                   // this.callContext.RemotingData.LogicalCallID = (string)value;
                }
                else
                {
                    this.callContext = (LogicalCallContext)value;
                }
            }
            else if (name.Equals("__Return"))
            {
                this.retVal = value;
            }
            else
            {
                if (this.InternalProperties == null)
                {
                    this.InternalProperties = new Dictionary<string, object>();
                }
                this.InternalProperties[name] = value;
            }
        }

        
        internal void FillHeaders(Header[] h)
        {
            this.FillHeaders(h, false);
        }

        
        private void FillHeaders(Header[] h, bool bFromHeaderHandler)
        {
            if (h != null)
            {
                if (bFromHeaderHandler && this.fSoap)
                {
                    for (int i = 0; i < h.Length; i++)
                    {
                        Header header = h[i];
                        if (header.HeaderNamespace == "http://schemas.microsoft.com/clr/soap/messageProperties")
                        {
                            this.FillHeader(header.Name, header.Value);
                        }
                        else
                        {
                            //TODO:
                            //string propertyKeyForHeader = LogicalCallContext.GetPropertyKeyForHeader(header);
                            //this.FillHeader(propertyKeyForHeader, header);
                        }
                    }
                }
                else
                {
                    for (int j = 0; j < h.Length; j++)
                    {
                        this.FillHeader(h[j].Name, h[j].Value);
                    }
                }
            }
        }

        
        public object GetArg(int argNum) =>
            this.outArgs[argNum];

        
        public string GetArgName(int index)
        {
            //if (this.MI == null)
            //{
            //    return ("__param" + index);
            //}
            //RemotingMethodCachedData reflectionCachedData = InternalRemotingServices.GetReflectionCachedData(this.MI);
            //ParameterInfo[] parameters = reflectionCachedData.Parameters;
            //if ((index < 0) || (index >= parameters.Length))
            //{
            //    throw new ArgumentOutOfRangeException("index");
            //}
            //return reflectionCachedData.Parameters[index].Name;
            //TODO
            return null;
        }

        
        internal LogicalCallContext GetLogicalCallContext()
        {
            if (this.callContext == null)
            {
                this.callContext = new LogicalCallContext();
            }
            return this.callContext;
        }

        
        public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            throw new NotSupportedException(EnvironmentV2.GetResourceString("NotSupported_Method"));
        }

        
       // public object GetOutArg(int argNum) =>
        //    this.argMapper?.GetArg(argNum);

        
        //public string GetOutArgName(int index) =>
           // this.argMapper?.GetArgName(index);

        
        public virtual object HeaderHandler(Header[] h)
        {
            return null;
            //TODO
            //SerializationMonkey uninitializedObject = (SerializationMonkey)FormatterServices.GetUninitializedObject(typeof(SerializationMonkey));
            //Header[] destinationArray = null;
            //if (((h != null) && (h.Length != 0)) && (h[0].Name == "__methodName"))
            //{
            //    if (h.Length > 1)
            //    {
            //        destinationArray = new Header[h.Length - 1];
            //        Array.Copy(h, 1, destinationArray, 0, h.Length - 1);
            //    }
            //    else
            //    {
            //        destinationArray = null;
            //    }
            //}
            //else
            //{
            //    destinationArray = h;
            //}
            //Type returnType = null;
            //MethodInfo mI = this.MI as MethodInfo;
            //if (mI != null)
            //{
            //    returnType = mI.ReturnType;
            //}
            //ParameterInfo[] parameters = this._methodCache.Parameters;
            //int length = this._methodCache.MarshalResponseArgMap.Length;
            //if ((returnType != null) && !(returnType == typeof(void)))
            //{
            //    length++;
            //}
            //Type[] typeArray = new Type[length];
            //string[] strArray = new string[length];
            //int index = 0;
            //if ((returnType != null) && !(returnType == typeof(void)))
            //{
            //    typeArray[index++] = returnType;
            //}
            //foreach (int num4 in this._methodCache.MarshalResponseArgMap)
            //{
            //    strArray[index] = parameters[num4].Name;
            //    if (parameters[num4].ParameterType.IsByRef)
            //    {
            //        typeArray[index++] = parameters[num4].ParameterType.GetElementType();
            //    }
            //    else
            //    {
            //        typeArray[index++] = parameters[num4].ParameterType;
            //    }
            //}
            //uninitializedObject.FieldTypes = typeArray;
            //uninitializedObject.FieldNames = strArray;
            //this.FillHeaders(destinationArray, true);
            //uninitializedObject._obj = this;
            //return uninitializedObject;
        }

        
        public void RootSetObjectData(SerializationInfo info, StreamingContext ctx)
        {
            this.SetObjectData(info, ctx);
        }

        internal LogicalCallContext SetLogicalCallContext(LogicalCallContext ctx)
        {
            LogicalCallContext callContext = this.callContext;
            this.callContext = ctx;
            return callContext;
        }

        
        internal void SetObjectData(SerializationInfo info, StreamingContext ctx)
        {
            if (info == null)
            {
                throw new ArgumentNullException("info");
            }
            if (this.fSoap)
            {
                this.SetObjectFromSoapData(info);
            }
            else
            {
                SerializationInfoEnumeratorV2 enumerator = info.GetEnumerator();
                bool flag = false;
                bool flag2 = false;
                while (enumerator.MoveNext())
                {
                    if (enumerator.Name.Equals("__return"))
                    {
                        flag = true;
                        break;
                    }
                    if (enumerator.Name.Equals("__fault"))
                    {
                        flag2 = true;
                        this.fault = (Exception)enumerator.Value;
                        break;
                    }
                    this.FillHeader(enumerator.Name, enumerator.Value);
                }
                if (flag2 & flag)
                {
                    throw new Exception(EnvironmentV2.GetResourceString("Remoting_Message_BadSerialization"));
                }
            }
        }

        internal void SetObjectFromSoapData(SerializationInfo info)
        {
            //TODO:
            //Dictionary<string, object> keyToNamespaceTable = (Dictionary<string, object>)info.GetValue("__keyToNamespaceTable", typeof(Dictionary<string, object>));
            //ArrayList list = (ArrayList)info.GetValue("__paramNameList", typeof(ArrayList));
            //SoapFault fault = (SoapFault)info.GetValue("__fault", typeof(SoapFault));
            //if (fault != null)
            //{
            //    ServerFault detail = fault.Detail as ServerFault;
            //    if (detail != null)
            //    {
            //        if (detail.Exception != null)
            //        {
            //            this.fault = detail.Exception;
            //        }
            //        else
            //        {
            //            Type type = Type.GetType(detail.ExceptionType, false, false);
            //            if (type == null)
            //            {
            //                StringBuilder builder = new StringBuilder();
            //                builder.Append("\nException Type: ");
            //                builder.Append(detail.ExceptionType);
            //                builder.Append("\n");
            //                builder.Append("Exception Message: ");
            //                builder.Append(detail.ExceptionMessage);
            //                builder.Append("\n");
            //                builder.Append(detail.StackTrace);
            //                this.fault = new ServerException(builder.ToString());
            //            }
            //            else
            //            {
            //                object[] args = new object[] { detail.ExceptionMessage };
            //                this.fault = (Exception)Activator.CreateInstance(type, BindingFlags.CreateInstance | BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Instance, null, args, null, null);
            //            }
            //        }
            //    }
            //    else if (((fault.Detail != null) && (fault.Detail.GetType() == typeof(string))) && (((string)fault.Detail).Length != 0))
            //    {
            //        this.fault = new ServerException((string)fault.Detail);
            //    }
            //    else
            //    {
            //        this.fault = new ServerException(fault.FaultString);
            //    }
            //}
            //else
            //{
            //    MethodInfo mI = this.MI as MethodInfo;
            //    int num = 0;
            //    if (mI != null)
            //    {
            //        Type returnType = mI.ReturnType;
            //        if (returnType != typeof(void))
            //        {
            //            num++;
            //            object obj3 = info.GetValue((string)list[0], typeof(object));
            //            if (obj3 is string)
            //            {
            //                this.retVal = Message.SoapCoerceArg(obj3, returnType, keyToNamespaceTable);
            //            }
            //            else
            //            {
            //                this.retVal = obj3;
            //            }
            //        }
            //    }
            //    ParameterInfo[] parameters = this._methodCache.Parameters;
            //    object obj2 = this.InternalProperties?["__UnorderedParams"];
            //    if (((obj2 != null) && (obj2 is bool)) && ((bool)obj2))
            //    {
            //        for (int i = num; i < list.Count; i++)
            //        {
            //            string name = (string)list[i];
            //            int index = -1;
            //            for (int j = 0; j < parameters.Length; j++)
            //            {
            //                if (name.Equals(parameters[j].Name))
            //                {
            //                    index = parameters[j].Position;
            //                }
            //            }
            //            if (index == -1)
            //            {
            //                if (!name.StartsWith("__param", StringComparison.Ordinal))
            //                {
            //                    throw new RemotingException(EnvironmentV2.GetResourceString("Remoting_Message_BadSerialization"));
            //                }
            //                index = int.Parse(name.Substring(7), CultureInfo.InvariantCulture);
            //            }
            //            if (index >= this.argCount)
            //            {
            //                throw new RemotingException(EnvironmentV2.GetResourceString("Remoting_Message_BadSerialization"));
            //            }
            //            if (this.outArgs == null)
            //            {
            //                this.outArgs = new object[this.argCount];
            //            }
            //            this.outArgs[index] = Message.SoapCoerceArg(info.GetValue(name, typeof(object)), parameters[index].ParameterType, keyToNamespaceTable);
            //        }
            //    }
            //    else
            //    {
            //        if (this.argMapper == null)
            //        {
            //            this.argMapper = new ArgMapper(this, true);
            //        }
            //        for (int k = num; k < list.Count; k++)
            //        {
            //            string str2 = (string)list[k];
            //            if (this.outArgs == null)
            //            {
            //                this.outArgs = new object[this.argCount];
            //            }
            //            int num6 = this.argMapper.Map[k - num];
            //            this.outArgs[num6] = Message.SoapCoerceArg(info.GetValue(str2, typeof(object)), parameters[num6].ParameterType, keyToNamespaceTable);
            //        }
            //    }
            //}
        }

        
        bool IInternalMessage.HasProperties()
        {
            if (this.ExternalProperties == null)
            {
                return (this.InternalProperties != null && this.InternalProperties.Count > 0);
            }
            return true;
        }

        
        void IInternalMessage.SetCallContext(LogicalCallContext newCallContext)
        {
            this.callContext = newCallContext;
        }

        
        void IInternalMessage.SetURI(string val)
        {
            this.uri = val;
        }

        public object GetOutArg(int argNum)
        {
            throw new NotImplementedException();
        }

        public string GetOutArgName(int index)
        {
            throw new NotImplementedException();
        }

        // Properties
        public int ArgCount =>
            this.outArgs?.Length ?? 0;

        public object[] Args =>
            this.outArgs;

        public Exception Exception =>
            this.fault;

        public bool HasVarArgs =>
            false;

        public LogicalCallContext LogicalCallContext =>
            this.GetLogicalCallContext();

        public MethodBase MethodBase =>
            this.MI;

        public string MethodName =>
            this.methodName;

        public object MethodSignature =>
            this.methodSignature;

        //public int OutArgCount =>
        //    this.argMapper?.ArgCount;

        //public object[] OutArgs =>
        //    this.argMapper?.Args;

        public virtual IDictionary Properties
        {
            
            get
            {
                MethodResponse response = this;
                lock (response)
                {
                    if (this.InternalProperties == null)
                    {
                        this.InternalProperties = new Dictionary<string, object>();
                    }
                    if (this.ExternalProperties == null)
                    {
                        //TODO:
                       // this.ExternalProperties = new MRMDictionary(this, this.InternalProperties);
                    }
                    return this.ExternalProperties;
                }
            }
        }

        public object ReturnValue =>
            this.retVal;

        //Identity IInternalMessage.IdentityObject
        //{
            
        //    get =>
        //        null;
            
        //    set
        //    {
        //    }
        //}

        //ServerIdentity IInternalMessage.ServerIdentityObject
        //{
            
        //    get =>
        //        null;
            
        //    set
        //    {
        //    }
        //}

        public string TypeName =>
            this.typeName;

        public string Uri
        {
            
            get =>
                this.uri;
            set =>
                this.uri = value;
        }

        public int OutArgCount => throw new NotImplementedException();

        public object[] OutArgs => throw new NotImplementedException();
    }


}
