using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class MessageEnd : IStreamable
    {
        // Methods
        internal MessageEnd()
        {
        }

        public void Dump()
        {
        }

        public void Dump(Stream sout)
        {
        }

        private void DumpInternal(Stream sout)
        {
            //if (BCLDebug.CheckEnabled("BINARY"))
            //{
            //    long length = -1L;
            //    if ((sout != null) && sout.CanSeek)
            //    {
            //        length = sout.Length;
            //    }
            //}
        }

        public void Read(__BinaryParser input)
        {
        }

        //public void Write(__BinaryWriter sout)
        //{
        //    sout.WriteByte(11);
        //}
    }
}
