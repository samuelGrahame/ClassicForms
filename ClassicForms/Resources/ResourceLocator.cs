using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Resources
{
    internal struct ResourceLocator
    {
        internal object _value;
        internal int _dataPos;
        internal ResourceLocator(int dataPos, object value)
        {
            this._dataPos = dataPos;
            this._value = value;
        }

        internal int DataPosition =>
            this._dataPos;
        internal object Value
        {
            get =>
                this._value;
            set => this._value = value;
        }
        internal static bool CanCache(ResourceTypeCodeV2 value) =>
            (value <= ResourceTypeCodeV2.TimeSpan);
    }


}
