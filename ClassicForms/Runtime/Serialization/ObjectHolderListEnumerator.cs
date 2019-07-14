using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    internal class ObjectHolderListEnumerator
    {
        // Fields
        private int m_currPos;
        private bool m_isFixupEnumerator;
        private ObjectHolderList m_list;
        private int m_startingVersion;

        // Methods
        internal ObjectHolderListEnumerator(ObjectHolderList list, bool isFixupEnumerator)
        {
            this.m_list = list;
            this.m_startingVersion = this.m_list.Version;
            this.m_currPos = -1;
            this.m_isFixupEnumerator = isFixupEnumerator;
        }

        internal bool MoveNext()
        {
            if (this.m_isFixupEnumerator)
            {
                int num;
                do
                {
                    num = this.m_currPos + 1;
                    this.m_currPos = num;
                }
                while ((num < this.m_list.Count) && this.m_list.m_values[this.m_currPos].CompletelyFixed);
                if (this.m_currPos == this.m_list.Count)
                {
                    return false;
                }
                return true;
            }
            this.m_currPos++;
            if (this.m_currPos == this.m_list.Count)
            {
                return false;
            }
            return true;
        }

        // Properties
        internal ObjectHolder Current =>
            this.m_list.m_values[this.m_currPos];
    }
}
