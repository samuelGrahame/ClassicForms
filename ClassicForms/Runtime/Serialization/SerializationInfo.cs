using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization
{
    public sealed class SerializationInfo
    {
        // Fields
        private const int defaultSize = 4;
        private bool isAssemblyNameSetExplicit;
        private bool isFullTypeNameSetExplicit;
        private string m_assemName;
        internal IFormatterConverter m_converter;
        internal int m_currMember;
        internal object[] m_data;
        private string m_fullTypeName;
        internal string[] m_members;
        private Dictionary<string, int> m_nameToIndex;
        internal Type[] m_types;
        private Type objectType;
        private bool requireSameTokenInPartialTrust;
        private const string s_mscorlibAssemblySimpleName = "mscorlib";
        private const string s_mscorlibFileName = "mscorlib.dll";

        // Methods
        //
        public SerializationInfo(Type type, IFormatterConverter converter) : this(type, converter, false)
        {
        }

       // 
        public SerializationInfo(Type type, IFormatterConverter converter, bool requireSameTokenInPartialTrust)
        {
            if (type == null)
            {
                throw new ArgumentNullException("type");
            }
            if (converter == null)
            {
                throw new ArgumentNullException("converter");
            }
            this.objectType = type;
            this.m_fullTypeName = type.FullName;
            this.m_assemName = type.Assembly.FullName;
            this.m_members = new string[4];
            this.m_data = new object[4];
            this.m_types = new Type[4];
            this.m_nameToIndex = new Dictionary<string, int>();
            this.m_converter = converter;
            this.requireSameTokenInPartialTrust = requireSameTokenInPartialTrust;
        }

        public void AddValue(string name, bool value)
        {
            this.AddValue(name, value, typeof(bool));
        }

        public void AddValue(string name, byte value)
        {
            this.AddValue(name, value, typeof(byte));
        }

        public void AddValue(string name, char value)
        {
            this.AddValue(name, value, typeof(char));
        }

        public void AddValue(string name, DateTime value)
        {
            this.AddValue(name, value, typeof(DateTime));
        }

        public void AddValue(string name, decimal value)
        {
            this.AddValue(name, value, typeof(decimal));
        }

        public void AddValue(string name, double value)
        {
            this.AddValue(name, value, typeof(double));
        }

        public void AddValue(string name, short value)
        {
            this.AddValue(name, value, typeof(short));
        }

        public void AddValue(string name, int value)
        {
            this.AddValue(name, value, typeof(int));
        }

        public void AddValue(string name, long value)
        {
            this.AddValue(name, value, typeof(long));
        }

        public void AddValue(string name, object value)
        {
            if (value == null)
            {
                this.AddValue(name, value, typeof(object));
            }
            else
            {
                this.AddValue(name, value, value.GetType());
            }
        }

        
        public void AddValue(string name, sbyte value)
        {
            this.AddValue(name, value, typeof(sbyte));
        }

        public void AddValue(string name, float value)
        {
            this.AddValue(name, value, typeof(float));
        }

        
        public void AddValue(string name, ushort value)
        {
            this.AddValue(name, value, typeof(ushort));
        }

        
        public void AddValue(string name, uint value)
        {
            this.AddValue(name, value, typeof(uint));
        }

        
        public void AddValue(string name, ulong value)
        {
            this.AddValue(name, value, typeof(ulong));
        }

        public void AddValue(string name, object value, Type type)
        {
            if (name == null)
            {
                throw new ArgumentNullException("name");
            }
            if (type == null)
            {
                throw new ArgumentNullException("type");
            }
            this.AddValueInternal(name, value, type);
        }

        internal void AddValueInternal(string name, object value, Type type)
        {
            if (this.m_nameToIndex.ContainsKey(name))
            {
                throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_SameNameTwice"));
            }
            this.m_nameToIndex.Add(name, this.m_currMember);
            if (this.m_currMember >= this.m_members.Length)
            {
                this.ExpandArrays();
            }
            this.m_members[this.m_currMember] = name;
            this.m_data[this.m_currMember] = value;
            this.m_types[this.m_currMember] = type;
            this.m_currMember++;
        }

        private static bool Compare(byte[] a, byte[] b)
        {
            if (((a == null) || (b == null)) || (((a.Length == 0) || (b.Length == 0)) || (a.Length != b.Length)))
            {
                return false;
            }
            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] != b[i])
                {
                    return false;
                }
            }
            return true;
        }

        
        internal static void DemandForUnsafeAssemblyNameAssignments(string originalAssemblyName, string newAssemblyName)
        {
            if (!IsAssemblyNameAssignmentSafe(originalAssemblyName, newAssemblyName))
            {
                //TODO...
                //CodeAccessPermission.Demand(PermissionType.SecuritySerialization);
            }
        }

        private void ExpandArrays()
        {
            int num = this.m_currMember * 2;
            if ((num < this.m_currMember) && (0x7fffffff > this.m_currMember))
            {
                num = 0x7fffffff;
            }
            string[] destinationArray = new string[num];
            object[] objArray = new object[num];
            Type[] typeArray = new Type[num];
            Array.Copy(this.m_members, destinationArray, this.m_currMember);
            Array.Copy(this.m_data, objArray, this.m_currMember);
            Array.Copy(this.m_types, typeArray, this.m_currMember);
            this.m_members = destinationArray;
            this.m_data = objArray;
            this.m_types = typeArray;
        }

        private int FindElement(string name)
        {
            if (name == null)
            {
                throw new ArgumentNullException("name");
            }
            if (this.m_nameToIndex.TryGetValue(name, out int num))
            {
                return num;
            }
            return -1;
        }

        public bool GetBoolean(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(bool))
            {
                return (bool)element;
            }
            return this.m_converter.ToBoolean(element);
        }

        public byte GetByte(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(byte))
            {
                return (byte)element;
            }
            return this.m_converter.ToByte(element);
        }

        public char GetChar(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(char))
            {
                return (char)element;
            }
            return this.m_converter.ToChar(element);
        }

        public DateTime GetDateTime(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(DateTime))
            {
                return (DateTime)element;
            }
            return this.m_converter.ToDateTime(element);
        }

        public decimal GetDecimal(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(decimal))
            {
                return (decimal)element;
            }
            return this.m_converter.ToDecimal(element);
        }

        public double GetDouble(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(double))
            {
                return (double)element;
            }
            return this.m_converter.ToDouble(element);
        }

        private object GetElement(string name, out Type foundType)
        {
            int index = this.FindElement(name);
            if (index == -1)
            {
                object[] values = new object[] { name };
                throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_NotFound", values));
            }
            foundType = this.m_types[index];
            return this.m_data[index];
        }

        
        private object GetElementNoThrow(string name, out Type foundType)
        {
            int index = this.FindElement(name);
            if (index == -1)
            {
                foundType = null;
                return null;
            }
            foundType = this.m_types[index];
            return this.m_data[index];
        }

        public SerializationInfoEnumeratorV2 GetEnumerator() =>
            new SerializationInfoEnumeratorV2(this.m_members, this.m_data, this.m_types, this.m_currMember);

        public short GetInt16(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(short))
            {
                return (short)element;
            }
            return this.m_converter.ToInt16(element);
        }

        public int GetInt32(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(int))
            {
                return (int)element;
            }
            return this.m_converter.ToInt32(element);
        }

        public long GetInt64(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(long))
            {
                return (long)element;
            }
            return this.m_converter.ToInt64(element);
        }

        
        public sbyte GetSByte(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(sbyte))
            {
                return (sbyte)element;
            }
            return this.m_converter.ToSByte(element);
        }

        public float GetSingle(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(float))
            {
                return (float)element;
            }
            return this.m_converter.ToSingle(element);
        }

        public string GetString(string name)
        {
            object element = this.GetElement(name, out Type type);
            if ((type != typeof(string)) && (element != null))
            {
                return this.m_converter.ToString(element);
            }
            return (string)element;
        }

        
        public ushort GetUInt16(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(ushort))
            {
                return (ushort)element;
            }
            return this.m_converter.ToUInt16(element);
        }

        
        public uint GetUInt32(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(uint))
            {
                return (uint)element;
            }
            return this.m_converter.ToUInt32(element);
        }

        
        public ulong GetUInt64(string name)
        {
            object element = this.GetElement(name, out Type type);
            if (type == typeof(ulong))
            {
                return (ulong)element;
            }
            return this.m_converter.ToUInt64(element);
        }

        
        public object GetValue(string name, Type type)
        {
            if (type == null)
            {
                throw new ArgumentNullException("type");
            }
            Type castType = type as Type;
            if (castType == null)
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_MustBeRuntimeType"));
            }
            object element = this.GetElement(name, out Type type3);
            // TODO: How does this effect in js not such thing as remoting and a proxy object...
            //if (RemotingServices.IsTransparentProxy(element))
            //{
            //    if (RemotingServices.ProxyCheckCast(RemotingServices.GetRealProxy(element), castType))
            //    {
            //        return element;
            //    }
            //}
            //else
            if (((type3 == type) || type.IsAssignableFrom(type3)) || (element == null))
            {
                return element;
            }
            return this.m_converter.Convert(element, type);
        }
        
        internal object GetValueNoThrow(string name, Type type)
        {
            object elementNoThrow = this.GetElementNoThrow(name, out Type type2);
            if (elementNoThrow == null)
            {
                return null;
            }
            // TODO: How does this effect in js not such thing as remoting and a proxy object...
            //if (RemotingServices.IsTransparentProxy(elementNoThrow))
            //{
            //    if (RemotingServices.ProxyCheckCast(RemotingServices.GetRealProxy(elementNoThrow), (RuntimeType)type))
            //    {
            //        return elementNoThrow;
            //    }
            //}
            //else 
            if (((type2 == type) || type.IsAssignableFrom(type2)) || (elementNoThrow == null))
            {
                return elementNoThrow;
            }
            return this.m_converter.Convert(elementNoThrow, type);
        }

        internal static bool IsAssemblyNameAssignmentSafe(string originalAssemblyName, string newAssemblyName)
        {
            if (originalAssemblyName == newAssemblyName)
            {
                return true;
            }
            return false;
            //TODO: WE DO NOT HAVE ASSEMBLY NAME
            //AssemblyName name = new AssemblyName(originalAssemblyName);
            //AssemblyName name2 = new AssemblyName(newAssemblyName);
            //return ((!string.Equals(name2.Name, "mscorlib", StringComparison.OrdinalIgnoreCase) && !string.Equals(name2.Name, "mscorlib.dll", StringComparison.OrdinalIgnoreCase)) && Compare(name.GetPublicKeyToken(), name2.GetPublicKeyToken()));
        }

        
        public void SetType(Type type)
        {
            if (type == null)
            {
                throw new ArgumentNullException("type");
            }
            if (this.requireSameTokenInPartialTrust)
            {
                DemandForUnsafeAssemblyNameAssignments(this.ObjectType.Assembly.FullName, type.Assembly.FullName);
            }
            if (this.objectType != type)
            {
                this.objectType = type;
                this.m_fullTypeName = type.FullName;
                this.m_assemName = type.Assembly.FullName;
                this.isFullTypeNameSetExplicit = false;
                this.isAssemblyNameSetExplicit = false;
            }
        }

        internal void UpdateValue(string name, object value, Type type)
        {
            int index = this.FindElement(name);
            if (index < 0)
            {
                this.AddValueInternal(name, value, type);
            }
            else
            {
                this.m_data[index] = value;
                this.m_types[index] = type;
            }
        }

        // Properties
        public string AssemblyName
        {
            get =>
                this.m_assemName;
            
            set
            {
                if (value == null)
                {
                    throw new ArgumentNullException("value");
                }
                if (this.requireSameTokenInPartialTrust)
                {
                    DemandForUnsafeAssemblyNameAssignments(this.m_assemName, value);
                }
                this.m_assemName = value;
                this.isAssemblyNameSetExplicit = true;
            }
        }

        public string FullTypeName
        {
            get =>
                this.m_fullTypeName;
            set
            {
                if (value == null)
                {
                    throw new ArgumentNullException("value");
                }
                this.m_fullTypeName = value;
                this.isFullTypeNameSetExplicit = true;
            }
        }

        public bool IsAssemblyNameSetExplicit =>
            this.isAssemblyNameSetExplicit;

        public bool IsFullTypeNameSetExplicit =>
            this.isFullTypeNameSetExplicit;

        public int MemberCount =>
            this.m_currMember;

        internal string[] MemberNames =>
            this.m_members;

        internal object[] MemberValues =>
            this.m_data;

        public Type ObjectType =>
            this.objectType;
    }
}
