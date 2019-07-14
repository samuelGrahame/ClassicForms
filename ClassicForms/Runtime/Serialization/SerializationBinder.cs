using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    public abstract class SerializationBinder
    {
        // Methods
        protected SerializationBinder()
        {
        }

        public virtual void BindToName(Type serializedType, out string assemblyName, out string typeName)
        {
            assemblyName = null;
            typeName = null;
        }

        public abstract Type BindToType(string assemblyName, string typeName);
    }
}
