using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryCrossAppDomainAssembly : IStreamable
    {
        // Fields
        internal int assemblyIndex;
        internal int assemId;

        // Methods
        internal BinaryCrossAppDomainAssembly()
        {
        }

        public void Dump()
        {
        }

        //[Conditional("_LOGGING")]
        private void DumpInternal()
        {
           // BCLDebug.CheckEnabled("BINARY");
        }

        //[SecurityCritical]
        public void Read(__BinaryParser input)
        {
            this.assemId = input.ReadInt32();
            this.assemblyIndex = input.ReadInt32();
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(20);
        //    sout.WriteInt32(this.assemId);
        //    sout.WriteInt32(this.assemblyIndex);
        //}
    }
}
