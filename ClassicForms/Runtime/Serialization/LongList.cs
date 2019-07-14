using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    [Serializable]
    internal class LongList
    {
        // Fields
        private const int InitialSize = 2;
        private int m_count;
        private int m_currentItem;
        private int m_totalItems;
        private long[] m_values;

        // Methods
        internal LongList() : this(2)
        {
        }

        internal LongList(int startingSize)
        {
            this.m_count = 0;
            this.m_totalItems = 0;
            this.m_values = new long[startingSize];
        }

        internal void Add(long value)
        {
            if (this.m_totalItems == this.m_values.Length)
            {
                this.EnlargeArray();
            }
            int totalItems = this.m_totalItems;
            this.m_totalItems = totalItems + 1;
            this.m_values[totalItems] = value;
            this.m_count++;
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
            long[] destinationArray = new long[num];
            Array.Copy(this.m_values, destinationArray, this.m_count);
            this.m_values = destinationArray;
        }

        internal bool MoveNext()
        {
            int num;
            do
            {
                num = this.m_currentItem + 1;
                this.m_currentItem = num;
            }
            while ((num < this.m_totalItems) && (this.m_values[this.m_currentItem] == -1L));
            if (this.m_currentItem == this.m_totalItems)
            {
                return false;
            }
            return true;
        }

        internal bool RemoveElement(long value)
        {
            int index = 0;
            while (index < this.m_totalItems)
            {
                if (this.m_values[index] == value)
                {
                    break;
                }
                index++;
            }
            if (index == this.m_totalItems)
            {
                return false;
            }
            this.m_values[index] = -1L;
            return true;
        }

        internal void StartEnumeration()
        {
            this.m_currentItem = -1;
        }

        // Properties
        internal int Count =>
            this.m_count;

        internal long Current =>
            this.m_values[this.m_currentItem];
    }
}
