using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryAssemblyInfo
    {
        // Fields
        private Assembly assembly;
        internal string assemblyString;

        // Methods
        internal BinaryAssemblyInfo(string assemblyString)
        {
            this.assemblyString = assemblyString;
        }

        internal BinaryAssemblyInfo(string assemblyString, Assembly assembly)
        {
            this.assemblyString = assemblyString;
            this.assembly = assembly;
        }

        internal Assembly GetAssembly()
        {
            if (this.assembly == null)
            {
                this.assembly = Assembly.Load(this.assemblyString); // FormatterServices.LoadAssemblyFromStringNoThrow(this.assemblyString);
                if (this.assembly == null)
                {
                    object[] values = new object[] { this.assemblyString };
                    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_AssemblyNotFound", values));
                }
            }
            return this.assembly;
        }
    }
}
