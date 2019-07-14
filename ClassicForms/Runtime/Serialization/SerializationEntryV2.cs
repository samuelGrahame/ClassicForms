using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    public struct SerializationEntryV2
    {
        private Type m_type;
        private object m_value;
        private string m_name;
        public object Value =>
            this.m_value;
        public string Name =>
            this.m_name;
        public Type ObjectType =>
            this.m_type;
        internal SerializationEntryV2(string entryName, object entryValue, Type entryType)
        {
            this.m_value = entryValue;
            this.m_name = entryName;
            this.m_type = entryType;
        }
    }
}
