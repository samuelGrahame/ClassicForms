using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    [Serializable]
    internal class FixupHolderList
    {
        // Fields
        internal const int InitialSize = 2;
        internal int m_count;
        internal FixupHolder[] m_values;

        // Methods
        internal FixupHolderList() : this(2)
        {
        }

        internal FixupHolderList(int startingSize)
        {
            this.m_count = 0;
            this.m_values = new FixupHolder[startingSize];
        }

        internal virtual void Add(FixupHolder fixup)
        {
            if (this.m_count == this.m_values.Length)
            {
                this.EnlargeArray();
            }
            int count = this.m_count;
            this.m_count = count + 1;
            this.m_values[count] = fixup;
        }

        internal virtual void Add(long id, object fixupInfo)
        {
            if (this.m_count == this.m_values.Length)
            {
                this.EnlargeArray();
            }
            this.m_values[this.m_count].m_id = id;
            int count = this.m_count;
            this.m_count = count + 1;
            this.m_values[count].m_fixupInfo = fixupInfo;
        }

        private void EnlargeArray()
        {
            int num = this.m_values.Length * 2;
            if (num < 0)
            {
                if (num == 0x7fffffff)
                {
                    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_TooManyElements"));
                }
                num = 0x7fffffff;
            }
            FixupHolder[] destinationArray = new FixupHolder[num];
            Array.Copy(this.m_values, destinationArray, this.m_count);
            this.m_values = destinationArray;
        }
    }
}
