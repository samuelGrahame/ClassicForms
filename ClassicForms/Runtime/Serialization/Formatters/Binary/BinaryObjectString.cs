using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryObjectString : IStreamable
    {
        // Fields
        internal int objectId;
        internal string value;

        // Methods
        internal BinaryObjectString()
        {
        }

        public void Dump()
        {
        }

       // [Conditional("_LOGGING")]
        private void DumpInternal()
        {
            //BCLDebug.CheckEnabled("BINARY");
        }

        //[SecurityCritical]
        public void Read(__BinaryParser input)
        {
            this.objectId = input.ReadInt32();
            this.value = input.ReadString();
        }

        internal void Set(int objectId, string value)
        {
            this.objectId = objectId;
            this.value = value;
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(6);
        //    sout.WriteInt32(this.objectId);
        //    sout.WriteString(this.value);
        //}
    }
}
