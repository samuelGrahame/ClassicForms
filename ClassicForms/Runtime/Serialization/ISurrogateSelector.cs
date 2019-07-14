using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    public interface ISurrogateSelector
    {
        // Methods
        void ChainSelector(ISurrogateSelector selector);
        ISurrogateSelector GetNextSelector();
        ISerializationSurrogate GetSurrogate(Type type, StreamingContext context, out ISurrogateSelector selector);
    }
}
