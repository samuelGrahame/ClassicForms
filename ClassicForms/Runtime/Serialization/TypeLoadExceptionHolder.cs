using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    internal class TypeLoadExceptionHolder
    {
        // Fields
        private string m_typeName;

        // Methods
        internal TypeLoadExceptionHolder(string typeName)
        {
            this.m_typeName = typeName;
        }

        // Properties
        internal string TypeName =>
            this.m_typeName;
    }
}
