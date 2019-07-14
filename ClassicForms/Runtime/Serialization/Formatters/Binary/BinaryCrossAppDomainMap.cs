using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryCrossAppDomainMap : IStreamable
    {
        // Fields
        internal int crossAppDomainArrayIndex;

        // Methods
        internal BinaryCrossAppDomainMap()
        {
        }

        public void Dump()
        {
        }

       // [Conditional("_LOGGING")]
        private void DumpInternal()
        {
         //   BCLDebug.CheckEnabled("BINARY");
        }

      //  [SecurityCritical]
        public void Read(__BinaryParser input)
        {
            this.crossAppDomainArrayIndex = input.ReadInt32();
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(0x12);
        //    sout.WriteInt32(this.crossAppDomainArrayIndex);
        //}
    }



}
