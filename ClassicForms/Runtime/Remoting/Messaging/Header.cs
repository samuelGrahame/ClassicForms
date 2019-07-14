using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Remoting.Messaging
{
    public class Header
    {
        // Fields
        public string HeaderNamespace;
        public bool MustUnderstand;
        public string Name;
        public object Value;

        // Methods
        public Header(string _Name, object _Value) : this(_Name, _Value, true)
        {
        }

        public Header(string _Name, object _Value, bool _MustUnderstand)
        {
            this.Name = _Name;
            this.Value = _Value;
            this.MustUnderstand = _MustUnderstand;
        }

        public Header(string _Name, object _Value, bool _MustUnderstand, string _HeaderNamespace)
        {
            this.Name = _Name;
            this.Value = _Value;
            this.MustUnderstand = _MustUnderstand;
            this.HeaderNamespace = _HeaderNamespace;
        }
    }
}
