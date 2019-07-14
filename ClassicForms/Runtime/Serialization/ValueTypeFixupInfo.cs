using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    internal class ValueTypeFixupInfo
    {
        // Fields
        private long m_containerID;
        private FieldInfo m_parentField;
        private int[] m_parentIndex;

        // Methods
        public ValueTypeFixupInfo(long containerID, FieldInfo member, int[] parentIndex)
        {
            if ((member == null) && (parentIndex == null))
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_MustSupplyParent"));
            }
            if ((containerID == 0) && (member == null))
            {
                this.m_containerID = containerID;
                this.m_parentField = member;
                this.m_parentIndex = parentIndex;
            }
            if (member != null)
            {
                if (parentIndex != null)
                {
                    throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_MemberAndArray"));
                }
                if (member.FieldType.IsValueType && (containerID == 0))
                {
                    throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_MustSupplyContainer"));
                }
            }
            this.m_containerID = containerID;
            this.m_parentField = member;
            this.m_parentIndex = parentIndex;
        }

        // Properties
        public long ContainerID =>
            this.m_containerID;

        public FieldInfo ParentField =>
            this.m_parentField;

        public int[] ParentIndex =>
            this.m_parentIndex;
    }
}
