using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryObject : IStreamable
    {
        // Fields
        internal int mapId;
        internal int objectId;

        // Methods
        internal BinaryObject()
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
            this.mapId = input.ReadInt32();
        }

        internal void Set(int objectId, int mapId)
        {
            this.objectId = objectId;
            this.mapId = mapId;
        }
        //TODO: Need to support write...
        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(1);
        //    sout.WriteInt32(this.objectId);
        //    sout.WriteInt32(this.mapId);
        //}
    }

    internal interface IStreamable
    {
        // Methods
        //[SecurityCritical]
        void Read(__BinaryParser input);
        //void Write(__BinaryWriter sout);
    }
}
