using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class TypeInformation
    {
        // Fields
        private string assemblyString;
        private string fullTypeName;
        private bool hasTypeForwardedFrom;

        // Methods
        internal TypeInformation(string fullTypeName, string assemblyString, bool hasTypeForwardedFrom)
        {
            this.fullTypeName = fullTypeName;
            this.assemblyString = assemblyString;
            this.hasTypeForwardedFrom = hasTypeForwardedFrom;
        }

        // Properties
        internal string AssemblyString =>
            this.assemblyString;

        internal string FullTypeName =>
            this.fullTypeName;

        internal bool HasTypeForwardedFrom =>
            this.hasTypeForwardedFrom;
    }
}
