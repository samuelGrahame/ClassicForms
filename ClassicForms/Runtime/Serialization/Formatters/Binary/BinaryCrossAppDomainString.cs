using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryCrossAppDomainString : IStreamable
    {
        // Fields
        internal int objectId;
        internal int value;

        // Methods
        internal BinaryCrossAppDomainString()
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
            this.objectId = input.ReadInt32();
            this.value = input.ReadInt32();
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(0x13);
        //    sout.WriteInt32(this.objectId);
        //    sout.WriteInt32(this.value);
        //}
    }
}
