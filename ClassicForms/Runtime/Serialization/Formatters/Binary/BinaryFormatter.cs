using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    public sealed class BinaryFormatter
    {
        // Fields        
        
        
        internal object Deserialize(Stream serializationStream)
        {
            return null;
            //if (serializationStream == null)
            //{
            //    object[] values = new object[] { serializationStream };
            //    throw new ArgumentNullException("serializationStream", EnvironmentV2.GetResourceString("ArgumentNull_WithParamName", values));
            //}
            //if (serializationStream.CanSeek && (serializationStream.Length == 0))
            //{
            //    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_Stream"));
            //}
            ////ObjectReader objectReader = new ObjectReader(serializationStream, this.m_surrogates, this.m_context, formatterEnums, this.m_binder);

            //return objectReader.Deserialize(handler, new __BinaryParser(serializationStream, objectReader), fCheck, isCrossAppDomain, methodCallMessage);
        }
    }
}
