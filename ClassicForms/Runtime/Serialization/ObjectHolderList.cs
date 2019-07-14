using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    internal class ObjectHolderList
    {
        // Fields
        internal const int DefaultInitialSize = 8;
        internal int m_count;
        internal ObjectHolder[] m_values;

        // Methods
        internal ObjectHolderList() : this(8)
        {
        }

        internal ObjectHolderList(int startingSize)
        {
            this.m_count = 0;
            this.m_values = new ObjectHolder[startingSize];
        }

        internal virtual void Add(ObjectHolder value)
        {
            if (this.m_count == this.m_values.Length)
            {
                this.EnlargeArray();
            }
            int count = this.m_count;
            this.m_count = count + 1;
            this.m_values[count] = value;
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
            ObjectHolder[] destinationArray = new ObjectHolder[num];
            Array.Copy(this.m_values, destinationArray, this.m_count);
            this.m_values = destinationArray;
        }

        internal ObjectHolderListEnumerator GetFixupEnumerator() =>
            new ObjectHolderListEnumerator(this, true);

        // Properties
        internal int Count =>
            this.m_count;

        internal int Version =>
            this.m_count;
    }



}
