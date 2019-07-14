using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class SerObjectInfoCache
    {
        // Fields
        internal string assemblyString;
        internal string fullTypeName;
        internal bool hasTypeForwardedFrom;
        internal MemberInfo[] memberInfos;
        internal string[] memberNames;
        internal Type[] memberTypes;

        // Methods
        internal SerObjectInfoCache(Type type)
        {
            
            //TypeInformation typeInformation = BinaryFormatter.GetTypeInformation(type);
            this.fullTypeName = type.FullName;
            this.assemblyString = type.Assembly.FullName;
            this.hasTypeForwardedFrom = false;
        }

        internal SerObjectInfoCache(string typeName, string assemblyName, bool hasTypeForwardedFrom)
        {
            this.fullTypeName = typeName;
            this.assemblyString = assemblyName;
            this.hasTypeForwardedFrom = hasTypeForwardedFrom;
        }
    }
}
