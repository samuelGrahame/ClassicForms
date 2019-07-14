using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class MemberPrimitiveUnTyped : IStreamable
    {
        // Fields
        internal InternalPrimitiveTypeE typeInformation;
        internal object value;

        // Methods
        internal MemberPrimitiveUnTyped()
        {
        }

        public void Dump()
        {
        }

       // [Conditional("_LOGGING")]
        private void DumpInternal()
        {
            //if (BCLDebug.CheckEnabled("BINARY"))
            //{
            //    string str = Converter.ToComType(this.typeInformation);
            //}
        }

      //  [SecurityCritical]
        public void Read(__BinaryParser input)
        {
            this.value = input.ReadValue(this.typeInformation);
        }

        internal void Set(InternalPrimitiveTypeE typeInformation)
        {
            this.typeInformation = typeInformation;
        }

        internal void Set(InternalPrimitiveTypeE typeInformation, object value)
        {
            this.typeInformation = typeInformation;
            this.value = value;
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteValue(this.typeInformation, this.value);
        //}
    }
}
