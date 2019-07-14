using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class BinaryObjectWithMap : IStreamable
    {
        // Fields
        internal int assemId;
        internal BinaryHeaderEnum binaryHeaderEnum;
        internal string[] memberNames;
        internal string name;
        internal int numMembers;
        internal int objectId;

        // Methods
        internal BinaryObjectWithMap()
        {
        }

        internal BinaryObjectWithMap(BinaryHeaderEnum binaryHeaderEnum)
        {
            this.binaryHeaderEnum = binaryHeaderEnum;
        }

        public void Dump()
        {
        }

        private void DumpInternal()
        {
            //if (BCLDebug.CheckEnabled("BINARY"))
            //{
            //    for (int i = 0; i < this.numMembers; i++)
            //    {
            //    }
            //    BinaryHeaderEnum binaryHeaderEnum = this.binaryHeaderEnum;
            //}
        }

        public void Read(__BinaryParser input)
        {
            this.objectId = input.ReadInt32();
            this.name = input.ReadString();
            this.numMembers = input.ReadInt32();
            this.memberNames = new string[this.numMembers];
            for (int i = 0; i < this.numMembers; i++)
            {
                this.memberNames[i] = input.ReadString();
            }
            if (this.binaryHeaderEnum == BinaryHeaderEnum.ObjectWithMapAssemId)
            {
                this.assemId = input.ReadInt32();
            }
        }

        internal void Set(int objectId, string name, int numMembers, string[] memberNames, int assemId)
        {
            this.objectId = objectId;
            this.name = name;
            this.numMembers = numMembers;
            this.memberNames = memberNames;
            this.assemId = assemId;
            if (assemId > 0)
            {
                this.binaryHeaderEnum = BinaryHeaderEnum.ObjectWithMapAssemId;
            }
            else
            {
                this.binaryHeaderEnum = BinaryHeaderEnum.ObjectWithMap;
            }
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte((byte)this.binaryHeaderEnum);
        //    sout.WriteInt32(this.objectId);
        //    sout.WriteString(this.name);
        //    sout.WriteInt32(this.numMembers);
        //    for (int i = 0; i < this.numMembers; i++)
        //    {
        //        sout.WriteString(this.memberNames[i]);
        //    }
        //    if (this.assemId > 0)
        //    {
        //        sout.WriteInt32(this.assemId);
        //    }
        //}
    }
}
