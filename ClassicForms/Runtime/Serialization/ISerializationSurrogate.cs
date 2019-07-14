using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    public interface ISerializationSurrogate
    {
        // Methods
        void GetObjectData(object obj, SerializationInfo info, StreamingContext context);
        object SetObjectData(object obj, SerializationInfo info, StreamingContext context, ISurrogateSelector selector);
    }
}
