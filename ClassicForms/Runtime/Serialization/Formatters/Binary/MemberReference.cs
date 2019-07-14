using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class MemberReference : IStreamable
    {
        // Fields
        internal int idRef;

        // Methods
        internal MemberReference()
        {
        }

        public void Dump()
        {
        }

      //  [Conditional("_LOGGING")]
        private void DumpInternal()
        {
            //BCLDebug.CheckEnabled("BINARY");
        }

        //[SecurityCritical]
        public void Read(__BinaryParser input)
        {
            this.idRef = input.ReadInt32();
        }

        internal void Set(int idRef)
        {
            this.idRef = idRef;
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(9);
        //    sout.WriteInt32(this.idRef);
        //}
    }
}
