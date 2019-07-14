using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryAssembly : IStreamable
    {
        // Fields
        internal string assemblyString;
        internal int assemId;

        // Methods
        internal BinaryAssembly()
        {
        }

        public void Dump()
        {
        }

       // [Conditional("_LOGGING")]
        private void DumpInternal()
        {
           // BCLDebug.CheckEnabled("BINARY");
        }

        public void Read(__BinaryParser input)
        {
            this.assemId = input.ReadInt32();
            this.assemblyString = input.ReadString();
        }

        internal void Set(int assemId, string assemblyString)
        {
            this.assemId = assemId;
            this.assemblyString = assemblyString;
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(12);
        //    sout.WriteInt32(this.assemId);
        //    sout.WriteString(this.assemblyString);
        //}
    }
}
