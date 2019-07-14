using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class MemberPrimitiveTyped : IStreamable
    {
        // Fields
        internal InternalPrimitiveTypeE primitiveTypeEnum;
        internal object value;

        // Methods
        internal MemberPrimitiveTyped()
        {
        }

        public void Dump()
        {
        }

        //[Conditional("_LOGGING")]
        private void DumpInternal()
        {
            //BCLDebug.CheckEnabled("BINARY");
        }

        //[SecurityCritical]
        public void Read(__BinaryParser input)
        {
            this.primitiveTypeEnum = (InternalPrimitiveTypeE)input.ReadByte();
            this.value = input.ReadValue(this.primitiveTypeEnum);
        }

        internal void Set(InternalPrimitiveTypeE primitiveTypeEnum, object value)
        {
            this.primitiveTypeEnum = primitiveTypeEnum;
            this.value = value;
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(8);
        //    sout.WriteByte((byte)this.primitiveTypeEnum);
        //    sout.WriteValue(this.primitiveTypeEnum, this.value);
        //}
    }
}
