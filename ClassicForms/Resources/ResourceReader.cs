using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
//using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;

namespace System.Resources
{
    public class ResourceReader : IEnumerable, IDisposable
    {
        // Fields
        private long _dataSectionOffset;
        private int[] _nameHashes;
        
        private int _nameHashesPtr;
        private int[] _namePositions;
        
        private int _namePositionsPtr;
        private long _nameSectionOffset;
        private int _numResources;
        private BinaryFormatter _objFormatter;
        internal Dictionary<string, ResourceLocator> _resCache;
        private bool[] _safeToDeserialize;
        private BinaryReader _store;
        //private TypeLimitingDeserializationBinder _typeLimitingBinder;
        private int[] _typeNamePositions;
        private Type[] _typeTable;
        private MemoryStream _ums;
        private byte[] _buffer = null;
        private int _version;
        private const int DefaultFileStreamBufferSize = 0x1000;
        private static readonly string[] TypesSafeForDeserialization = new string[] {
        "System.String[], mscorlib, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.DateTime[], mscorlib, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.Bitmap, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.Imaging.Metafile, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.Point, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.PointF, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.Size, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.SizeF, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.Font, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.Icon, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Drawing.Color, System.Drawing, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", "System.Windows.Forms.Cursor, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.Padding, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.LinkArea, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.ImageListStreamer, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.ListViewGroup, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089",
        "System.Windows.Forms.ListViewItem, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.ListViewItem+ListViewSubItem, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.ListViewItem+ListViewSubItem+SubItemStyle, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.OwnerDrawPropertyBag, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089", "System.Windows.Forms.TreeNode, System.Windows.Forms, Culture=neutral, PublicKeyToken=b77a5c561934e089"
    };

        // Methods        
        public ResourceReader(Stream stream, byte[] buffer)
        {
            if (stream == null)
            {
                throw new ArgumentNullException("stream");
            }
            if (!stream.CanRead)
            {
                throw new ArgumentException("Argument_StreamNotReadable");
            }
            _buffer = buffer;
            this._resCache = new Dictionary<string, ResourceLocator>();
            this._store = new BinaryReader(stream, Encoding.UTF8);
            this._ums = stream as MemoryStream;
            this.ReadResources();
        }

        //public ResourceReader(string fileName)
        //{
        //    this._resCache = new Dictionary<string, ResourceLocator>(FastResourceComparer.Default);
        //    this._store = new BinaryReader(new FileStream(fileName, FileMode.Open, FileAccess.Read, FileShare.Read, 0x1000, FileOptions.RandomAccess, Path.GetFileName(fileName), false), Encoding.UTF8);
        //    try
        //    {
        //        this.ReadResources();
        //    }
        //    catch
        //    {
        //        this._store.Close();
        //        throw;
        //    }
        //}

        //[SecurityCritical]
        //internal ResourceReader(Stream stream, Dictionary<string, ResourceLocator> resCache)
        //{
        //    this._resCache = resCache;
        //    this._store = new BinaryReader(stream, Encoding.UTF8);
        //    this._ums = stream as UnmanagedMemoryStream;
        //    this.ReadResources();
        //}

        private object _LoadObjectV1(int pos)
        {
            this._store.BaseStream.Seek(this._dataSectionOffset + pos, SeekOrigin.Begin);
            int typeIndex = Read7BitEncodedInt(this._store);
            if (typeIndex == -1)
            {
                return null;
            }
            var type = this.FindType(typeIndex);
            if (type == typeof(string))
            {
                return this._store.ReadString();
            }
            if (type == typeof(int))
            {
                return this._store.ReadInt32();
            }
            if (type == typeof(byte))
            {
                return this._store.ReadByte();
            }
            if (type == typeof(sbyte))
            {
                return this._store.ReadSByte();
            }
            if (type == typeof(short))
            {
                return this._store.ReadInt16();
            }
            if (type == typeof(long))
            {
                return this._store.ReadInt64();
            }
            if (type == typeof(ushort))
            {
                return this._store.ReadUInt16();
            }
            if (type == typeof(uint))
            {
                return this._store.ReadUInt32();
            }
            if (type == typeof(ulong))
            {
                return this._store.ReadUInt64();
            }
            if (type == typeof(float))
            {
                return this._store.ReadSingle();
            }
            if (type == typeof(double))
            {
                return this._store.ReadDouble();
            }
            if (type == typeof(DateTime))
            {
                return new DateTime(this._store.ReadInt64());
            }
            if (type == typeof(TimeSpan))
            {
                return new TimeSpan(this._store.ReadInt64());
            }
            if (type != typeof(decimal))
            {
                return this.DeserializeObject(typeIndex);
            }

            var bits = new byte[16];
            for (int i = 0; i < bits.Length; i++)
            {
                bits[i] = this._store.ReadByte();
            }
            return ByteArrayToDecimal(bits, 0);
        }
        const byte DecimalSignBit = 128;
        public static decimal ByteArrayToDecimal(byte[] src, int offset)
        {
            return new decimal(
                BitConverter.ToInt32(src, offset),
                BitConverter.ToInt32(src, offset + 4),
                BitConverter.ToInt32(src, offset + 8),
                src[offset + 15] == DecimalSignBit,
                src[offset + 14]);
        }

        internal object TryGetObject(int pos, ResourceTypeCodeV2 typeCode)
        {
            this._store.BaseStream.Seek(this._dataSectionOffset + pos, SeekOrigin.Begin);
            var x = (ResourceTypeCodeV2)Read7BitEncodedInt(this._store);

            switch (typeCode)
            {
                case ResourceTypeCodeV2.Null:
                    return null;

                case ResourceTypeCodeV2.String:
                    return this._store.ReadString();

                case ResourceTypeCodeV2.Boolean:
                    return this._store.ReadBoolean();

                case ResourceTypeCodeV2.Char:
                    return (char)this._store.ReadUInt16();

                case ResourceTypeCodeV2.Byte:
                    return this._store.ReadByte();

                case ResourceTypeCodeV2.SByte:
                    return this._store.ReadSByte();

                case ResourceTypeCodeV2.Int16:
                    return this._store.ReadInt16();

                case ResourceTypeCodeV2.UInt16:
                    return this._store.ReadUInt16();

                case ResourceTypeCodeV2.Int32:
                    return this._store.ReadInt32();

                case ResourceTypeCodeV2.UInt32:
                    return this._store.ReadUInt32();

                case ResourceTypeCodeV2.Int64:
                    return this._store.ReadInt64();

                case ResourceTypeCodeV2.UInt64:
                    return this._store.ReadUInt64();

                case ResourceTypeCodeV2.Single:
                    return this._store.ReadSingle();

                case ResourceTypeCodeV2.Double:
                    return this._store.ReadDouble();

                case ResourceTypeCodeV2.Decimal:
                    return this._store.ReadDecimal();

                case ResourceTypeCodeV2.DateTime:
                    return DateHelper.FromBinary(this._store.ReadInt64());

                case ResourceTypeCodeV2.TimeSpan:
                    return new TimeSpan(this._store.ReadInt64());

                case ResourceTypeCodeV2.ByteArray:
                    {
                        int count = this._store.ReadInt32();
                        if (count < 0)
                        {
                            object[] values = new object[] { count };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", values));
                        }
                        if (this._ums == null)
                        {
                            if (count > this._store.BaseStream.Length)
                            {
                                object[] objArray2 = new object[] { count };
                                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray2));
                            }
                            return this._store.ReadBytes(count);
                        }
                        if (count > (this._ums.Length - this._ums.Position))
                        {
                            object[] objArray3 = new object[] { count };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray3));
                        }
                        byte[] buffer = new byte[count];
                        int num5 = this._ums.Read(buffer, 0, count);
                        return buffer;
                    }
                case ResourceTypeCodeV2.Stream:
                    {
                        int num6 = this._store.ReadInt32();
                        if (num6 < 0)
                        {
                            object[] objArray4 = new object[] { num6 };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray4));
                        }
                        if (this._ums == null)
                        {
                            throw new Exception("Not Supported");
                            //return new PinnedBufferMemoryStream(this._store.ReadBytes(num6));
                        }
                        if (num6 > (this._ums.Length - this._ums.Position))
                        {
                            object[] objArray5 = new object[] { num6 };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray5));
                        }
                        return new MemoryStream(this._buffer, (int)this._ums.Position, num6, false, true);
                    }
            }
            if (typeCode < ResourceTypeCodeV2.StartOfUserTypes)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_TypeMismatch"));
            }
            int typeIndex = ((int)typeCode) - 0x40;
            return this.DeserializeObject(typeIndex);
        }

        private object _LoadObjectV2(int pos, out ResourceTypeCodeV2 typeCode)
        {
            this._store.BaseStream.Seek(this._dataSectionOffset + pos, SeekOrigin.Begin);
            typeCode = (ResourceTypeCodeV2)Read7BitEncodedInt(this._store);
            switch (typeCode)
            {
                case ResourceTypeCodeV2.Null:
                    return null;

                case ResourceTypeCodeV2.String:
                    return this._store.ReadString();

                case ResourceTypeCodeV2.Boolean:
                    return this._store.ReadBoolean();

                case ResourceTypeCodeV2.Char:
                    return (char)this._store.ReadUInt16();

                case ResourceTypeCodeV2.Byte:
                    return this._store.ReadByte();

                case ResourceTypeCodeV2.SByte:
                    return this._store.ReadSByte();

                case ResourceTypeCodeV2.Int16:
                    return this._store.ReadInt16();

                case ResourceTypeCodeV2.UInt16:
                    return this._store.ReadUInt16();

                case ResourceTypeCodeV2.Int32:
                    return this._store.ReadInt32();

                case ResourceTypeCodeV2.UInt32:
                    return this._store.ReadUInt32();

                case ResourceTypeCodeV2.Int64:
                    return this._store.ReadInt64();

                case ResourceTypeCodeV2.UInt64:
                    return this._store.ReadUInt64();

                case ResourceTypeCodeV2.Single:
                    return this._store.ReadSingle();

                case ResourceTypeCodeV2.Double:
                    return this._store.ReadDouble();

                case ResourceTypeCodeV2.Decimal:
                    return this._store.ReadDecimal();

                case ResourceTypeCodeV2.DateTime:
                    return DateHelper.FromBinary(this._store.ReadInt64());

                case ResourceTypeCodeV2.TimeSpan:
                    return new TimeSpan(this._store.ReadInt64());

                case ResourceTypeCodeV2.ByteArray:
                    {
                        int count = this._store.ReadInt32();
                        if (count < 0)
                        {
                            object[] values = new object[] { count };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", values));
                        }
                        if (this._ums == null)
                        {
                            if (count > this._store.BaseStream.Length)
                            {
                                object[] objArray2 = new object[] { count };
                                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray2));
                            }
                            return this._store.ReadBytes(count);
                        }
                        if (count > (this._ums.Length - this._ums.Position))
                        {
                            object[] objArray3 = new object[] { count };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray3));
                        }
                        byte[] buffer = new byte[count];
                        int num5 = this._ums.Read(buffer, 0, count);
                        return buffer;
                    }
                case ResourceTypeCodeV2.Stream:
                    {
                        int num6 = this._store.ReadInt32();
                        if (num6 < 0)
                        {
                            object[] objArray4 = new object[] { num6 };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray4));
                        }
                        if (this._ums == null)
                        {
                            throw new Exception("Not Supported");
                            //return new PinnedBufferMemoryStream(this._store.ReadBytes(num6));
                        }
                        if (num6 > (this._ums.Length - this._ums.Position))
                        {
                            object[] objArray5 = new object[] { num6 };
                            throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceDataLengthInvalid", objArray5));
                        }
                        return new MemoryStream(this._buffer, (int)this._ums.Position, num6, false, true);
                    }
            }
            if (typeCode < ResourceTypeCodeV2.StartOfUserTypes)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_TypeMismatch"));
            }
            int typeIndex = ((int)typeCode) - 0x40;
            return this.DeserializeObject(typeIndex);
        }

        

        private const int MagicNumber = -1091581234;
        
        private void _ReadResources()
        {
            if (this._store.ReadInt32() != MagicNumber)
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("Resources_StreamNotValid"));
            }
            int num2 = this._store.ReadInt32();
            int num3 = this._store.ReadInt32();
            if ((num3 < 0) || (num2 < 0))
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
            }
            if (num2 > 1)
            {
                this._store.BaseStream.Seek((long)num3, SeekOrigin.Current);
            }
            else
            {
                string str = this._store.ReadString();
                //TODO: VALIDATE FILE
                //AssemblyName name = new AssemblyName(ResourceManager.MscorlibName);
                //if (!ResourceManager.CompareNames(str, ResourceManager.ResReaderTypeName, name))
                //{
                //    object[] values = new object[] { str };
                //    throw new NotSupportedException(EnvironmentV2.GetResourceString("NotSupported_WrongResourceReader_Type", values));
                //}
                this.SkipString();
            }
            int num4 = this._store.ReadInt32();
            if ((num4 != 2) && (num4 != 1))
            {
                object[] objArray2 = new object[] { 2, num4 };
                throw new ArgumentException(EnvironmentV2.GetResourceString("Arg_ResourceFileUnsupportedVersion", objArray2));
            }
            this._version = num4;
            this._numResources = this._store.ReadInt32();
            if (this._numResources < 0)
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
            }
            int num5 = this._store.ReadInt32();
            if (num5 < 0)
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
            }
            this._typeTable = new Type[num5];
            this._typeNamePositions = new int[num5];
            for (int i = 0; i < num5; i++)
            {
                this._typeNamePositions[i] = (int)this._store.BaseStream.Position;
                this.SkipString();
            }
            int num7 = ((int)this._store.BaseStream.Position) & 7;
            if (num7 != 0)
            {
                for (int j = 0; j < (8 - num7); j++)
                {
                    this._store.ReadByte();
                }
            }
            if (this._ums == null)
            {
                this._nameHashes = new int[this._numResources];
                for (int k = 0; k < this._numResources; k++)
                {
                    this._nameHashes[k] = this._store.ReadInt32();
                }
            }
            else
            {
                if ((this._numResources & 0xe0000000L) != 0)
                {
                    throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
                }
                int num11 = 4 * this._numResources;
                this._nameHashesPtr = (int)this._ums.Position;
                this._ums.Seek((long)num11, SeekOrigin.Current);
                //byte* positionPointer = this._ums.Position;
            }
            if (this._ums == null)
            {
                this._namePositions = new int[this._numResources];
                for (int m = 0; m < this._numResources; m++)
                {
                    int num13 = this._store.ReadInt32();
                    if (num13 < 0)
                    {
                        throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
                    }
                    this._namePositions[m] = num13;
                }
            }
            else
            {
                if ((this._numResources & 0xe0000000L) != 0)
                {
                    throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
                }
                int num14 = 4 * this._numResources;
                this._namePositionsPtr = (int)this._ums.Position;
                this._ums.Seek((long)num14, SeekOrigin.Current);
                //byte* numPtr2 = this._ums.PositionPointer;
            }
            this._dataSectionOffset = this._store.ReadInt32();
            if (this._dataSectionOffset < 0L)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
            }
            this._nameSectionOffset = this._store.BaseStream.Position;
            if (this._dataSectionOffset < this._nameSectionOffset)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesHeaderCorrupted"));
            }
        }

        private string AllocateStringForNameIndex(int index, out int dataOffset)
        {
            byte[] buffer;
            int num;
            long namePosition = this.GetNamePosition(index);
            ResourceReader reader = this;
            lock (reader)
            {
                int num4;
                this._store.BaseStream.Seek(namePosition + this._nameSectionOffset, SeekOrigin.Begin);
                num = Read7BitEncodedInt(this._store);
                if (num < 0)
                {
                    throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_NegativeStringLength"));
                }
                if (this._ums != null)
                {
                    if (this._ums.Position > (this._ums.Length - num))
                    {
                        object[] objArray1 = new object[] { index };
                        throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesIndexTooLong", objArray1));
                    }
                    string str = null;
                    
                    var cBu = new StringBuilder();
                    var arr = new byte[2];

                    for (int i = 0; i < num / 2; i+=2)
                    {
                        arr[0] = (byte)this._ums.ReadByte();
                        arr[1] = (byte)this._ums.ReadByte();

                        cBu.Append(BitConverter.ToChar(arr, 0));                        
                    }

                    str = cBu.ToString(); //new string((char*)this._ums.PositionPointer, 0, num / 2);
                    this._ums.Position += num;
                    dataOffset = this._store.ReadInt32();
                    if ((dataOffset >= 0) && (((long)dataOffset) < (this._store.BaseStream.Length - this._dataSectionOffset)))
                    {
                        return str;
                    }
                    object[] values = new object[] { (int)dataOffset };
                    throw new FormatException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesDataInvalidOffset", values));
                }
                buffer = new byte[num];
                for (int i = num; i > 0; i -= num4)
                {
                    num4 = this._store.Read(buffer, num - i, i);
                    if (num4 == 0)
                    {
                        object[] objArray3 = new object[] { index };
                        throw new EndOfStreamException(EnvironmentV2.GetResourceString("BadImageFormat_ResourceNameCorrupted_NameIndex", objArray3));
                    }
                }
                dataOffset = this._store.ReadInt32();
                if ((dataOffset < 0) || (((long)dataOffset) >= (this._store.BaseStream.Length - this._dataSectionOffset)))
                {
                    object[] objArray4 = new object[] { (int)dataOffset };
                    throw new FormatException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesDataInvalidOffset", objArray4));
                }
            }
            return Encoding.Unicode.GetString(buffer, 0, num);
        }

        public void Close()
        {
            this.Dispose(true);
        }

        private bool CompareStringEqualsName(string name)
        {
            int num3;
            int byteLen = Read7BitEncodedInt(this._store);
            if (byteLen < 0)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_NegativeStringLength"));
            }
            if (this._ums != null)
            {

                var pos = this._ums.Position;
                this._ums.Seek((long)byteLen, SeekOrigin.Current);
                if (this._ums.Position > this._ums.Length)
                {
                    throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesNameTooLong"));
                }

                var barr = new byte[byteLen / 2];
                var index = 0;
                for (int i = 0; i < byteLen; i+=2)
                {
                    barr[index] = this._buffer[i + pos];
                    index++;
                }

                return (FastResourceComparer.CompareOrdinal(barr, byteLen / 2, name) == 0);
            }

            byte[] buffer = new byte[byteLen];
            for (int i = byteLen; i > 0; i -= num3)
            {
                num3 = this._store.Read(buffer, byteLen - i, i);
                if (num3 == 0)
                {
                    throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResourceNameCorrupted"));
                }
            }

            return (FastResourceComparer.CompareOrdinal(buffer, byteLen / 2, name) == 0);
        }

        private object DeserializeObject(int typeIndex)
        {
            //return null;
            object obj2;
            Type type = this.FindType(typeIndex);
            //if (this._safeToDeserialize == null)
            //{
            //    this.InitSafeToDeserializeArray();
            //}
            //if (this._safeToDeserialize[typeIndex])
            //{
            //    this._objFormatter = new BinaryFormatter();
            //   // this._objFormatter.Binder = this._typeLimitingBinder;
            //    //this._typeLimitingBinder.ExpectingToDeserialize(type);
            //    obj2 = this._objFormatter.UnsafeDeserialize(this._store.BaseStream, null);
            //}
            //else
            //{
            //    this._objFormatter.Binder = null;
            //}
            if (this._objFormatter == null)
            {
                this._objFormatter = new BinaryFormatter();
            }

            obj2 = this._objFormatter.Deserialize(this._store.BaseStream);

            if (obj2.GetType() != type)
            {
                object[] values = new object[] { type.FullName, obj2.GetType().FullName };
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResType&SerBlobMismatch", values));
            }
            return obj2;
        }

        public void Dispose()
        {
            this.Close();
        }

        private void Dispose(bool disposing)
        {
            // NOT NEEDED
            //if (this._store != null)
            //{
            //    this._resCache = null;
            //    if (disposing)
            //    {
            //        BinaryReader reader = this._store;
            //        this._store = null;
            //        if (reader != null)
            //        {
            //            reader.Close();
            //        }
            //    }
            //    this._store = null;
            //    this._namePositions = null;
            //    this._nameHashes = null;
            //    this._ums = null;
            //    this._namePositionsPtr = null;
            //    this._nameHashesPtr = null;
            //}
        }

        internal int FindPosForResource(string name)
        {
            int num = FastResourceComparer.HashFunction(name);
            int num2 = 0;
            int num3 = this._numResources - 1;
            int index = -1;
            bool flag = false;
            while (num2 <= num3)
            {
                int num6;
                index = (num2 + num3) >> 1;
                int nameHash = this.GetNameHash(index);
                if (nameHash == num)
                {
                    num6 = 0;
                }
                else if (nameHash < num)
                {
                    num6 = -1;
                }
                else
                {
                    num6 = 1;
                }
                if (num6 == 0)
                {
                    flag = true;
                    break;
                }
                if (num6 < 0)
                {
                    num2 = index + 1;
                }
                else
                {
                    num3 = index - 1;
                }
            }
            if (flag)
            {
                if (num2 != index)
                {
                    num2 = index;
                    while ((num2 > 0) && (this.GetNameHash(num2 - 1) == num))
                    {
                        num2--;
                    }
                }
                if (num3 != index)
                {
                    num3 = index;
                    while ((num3 < (this._numResources - 1)) && (this.GetNameHash(num3 + 1) == num))
                    {
                        num3++;
                    }
                }
                ResourceReader reader = this;
                lock (reader)
                {
                    for (int i = num2; i <= num3; i++)
                    {
                        this._store.BaseStream.Seek(this._nameSectionOffset + this.GetNamePosition(i), SeekOrigin.Begin);
                        if (this.CompareStringEqualsName(name))
                        {
                            int num8 = this._store.ReadInt32();
                            if ((num8 >= 0) && (num8 < (this._store.BaseStream.Length - this._dataSectionOffset)))
                            {
                                return num8;
                            }
                            object[] values = new object[] { num8 };
                            throw new FormatException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesDataInvalidOffset", values));
                        }
                    }
                }
            }
            return -1;
        }        

        public Type FindType(int typeIndex)
        {
            if ((typeIndex < 0) || (typeIndex >= this._typeTable.Length))
            {
                throw new Exception(("BadImageFormat_InvalidType"));
            }
            if (this._typeTable[typeIndex] == null)
            {
                long position = this._store.BaseStream.Position;
                try
                {
                    this._store.BaseStream.Position = this._typeNamePositions[typeIndex];
                    string typeName = this._store.ReadString();
                    if(typeName.Contains(","))
                    {
                        typeName = typeName.Split(',').FirstOrDefault();
                    }
                    this._typeTable[typeIndex] = Type.GetType(typeName);
                }
                finally
                {
                    this._store.BaseStream.Position = position;
                }
            }
            return this._typeTable[typeIndex];
        }

        public IDictionaryEnumerator GetEnumerator()
        {
            if (this._resCache == null)
            {
                throw new InvalidOperationException(("ResourceReaderIsClosed"));
            }
            return new ResourceEnumerator(this);
        }

        internal ResourceEnumerator GetEnumeratorInternal() =>
            new ResourceEnumerator(this);

        private int GetNameHash(int index)
        {
            if (this._ums == null)
            {
                return this._nameHashes[index];
            }
            return ReadUnalignedI4(this, this._nameHashesPtr + index);
        }

        private int GetNamePosition(int index)
        {
            int num;
            if (this._ums == null)
            {
                num = this._namePositions[index];
            }
            else
            {
                num = ReadUnalignedI4(this, this._namePositionsPtr + index);
            }
            if ((num >= 0) && (num <= (this._dataSectionOffset - this._nameSectionOffset)))
            {
                return num;
            }
            object[] values = new object[] { num };
            throw new FormatException(("BadImageFormat_ResourcesNameInvalidOffset"));
        }

        public void GetResourceData(string resourceName, out string resourceType, out byte[] resourceData)
        {
            if (resourceName == null)
            {
                throw new ArgumentNullException("resourceName");
            }
            if (this._resCache == null)
            {
                throw new InvalidOperationException(EnvironmentV2.GetResourceString("ResourceReaderIsClosed"));
            }
            int[] array = new int[this._numResources];
            int num = this.FindPosForResource(resourceName);
            if (num == -1)
            {
                object[] values = new object[] { resourceName };
                throw new ArgumentException(EnvironmentV2.GetResourceString("Arg_ResourceNameNotExist", values));
            }
            ResourceReader reader = this;
            lock (reader)
            {
                for (int i = 0; i < this._numResources; i++)
                {
                    this._store.BaseStream.Position = this._nameSectionOffset + this.GetNamePosition(i);
                    int num6 = Read7BitEncodedInt(this._store);
                    if (num6 < 0)
                    {
                        object[] objArray2 = new object[] { num6 };
                        throw new FormatException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesNameInvalidOffset", objArray2));
                    }
                    Stream baseStream = this._store.BaseStream;
                    baseStream.Position += num6;
                    int num7 = this._store.ReadInt32();
                    if ((num7 < 0) || (num7 >= (this._store.BaseStream.Length - this._dataSectionOffset)))
                    {
                        object[] objArray3 = new object[] { num7 };
                        throw new FormatException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesDataInvalidOffset", objArray3));
                    }
                    array[i] = num7;
                }
                Array.Sort<int>(array);
                int num2 = Array.BinarySearch<int>(array, num);
                long num3 = (num2 < (this._numResources - 1)) ? (array[num2 + 1] + this._dataSectionOffset) : this._store.BaseStream.Length;
                int count = (int)(num3 - (num + this._dataSectionOffset));
                this._store.BaseStream.Position = this._dataSectionOffset + num;
                ResourceTypeCodeV2 typeCode = (ResourceTypeCodeV2)Read7BitEncodedInt(this._store);
                if ((typeCode < ResourceTypeCodeV2.Null) || ((int)typeCode >= (0x40 + this._typeTable.Length)))
                {
                    throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_InvalidType"));
                }
                resourceType = this.TypeNameFromTypeCode(typeCode);
                count -= (int)(this._store.BaseStream.Position - (this._dataSectionOffset + num));
                byte[] buffer = this._store.ReadBytes(count);
                if (buffer.Length != count)
                {
                    throw new FormatException(EnvironmentV2.GetResourceString("BadImageFormat_ResourceNameCorrupted"));
                }
                resourceData = buffer;
            }
        }

        private object GetValueForNameIndex(int index)
        {
            long namePosition = this.GetNamePosition(index);
            ResourceReader reader = this;
            lock (reader)
            {
                this._store.BaseStream.Seek(namePosition + this._nameSectionOffset, SeekOrigin.Begin);
                this.SkipString();
                int pos = this._store.ReadInt32();
                if ((pos < 0) || (pos >= (this._store.BaseStream.Length - this._dataSectionOffset)))
                {
                    object[] values = new object[] { pos };
                    throw new FormatException(EnvironmentV2.GetResourceString("BadImageFormat_ResourcesDataInvalidOffset", values));
                }
                if (this._version == 1)
                {
                    return this.LoadObjectV1(pos);
                }
                return this.LoadObjectV2(pos, out _);
            }
        }

        private void InitSafeToDeserializeArray()
        {
            //return;
            this._safeToDeserialize = new bool[this._typeTable.Length];
            for (int i = 0; i < this._typeTable.Length; i++)
            {
                string str;
                //AssemblyName name;
                string fullName;
                long position = this._store.BaseStream.Position;
                try
                {
                    this._store.BaseStream.Position = this._typeNamePositions[i];
                    str = this._store.ReadString();
                }
                finally
                {
                    this._store.BaseStream.Position = position;
                }
                Type type = Type.GetType(str);
                if (type == null)
                {
                    //name = null;
                    fullName = str;
                }
                else
                {
                    if (type.BaseType == typeof(Enum))
                    {
                        this._safeToDeserialize[i] = true;
                        continue;
                    }
                    fullName = type.FullName;
                    //name = new AssemblyName();
                    //RuntimeAssembly assembly = (RuntimeAssembly)type.Assembly;
                    //name.Init(assembly.GetSimpleName(), assembly.GetPublicKey(), null, null, assembly.GetLocale(), AssemblyHashAlgorithm.None, AssemblyVersionCompatibility.SameMachine, null, AssemblyNameFlags.PublicKey, null);
                }
                foreach (string str3 in TypesSafeForDeserialization)
                {
                    this._safeToDeserialize[i] = true;

                    //if (ResourceManager.CompareNames(str3, fullName, name))
                    //{
                    //    this._safeToDeserialize[i] = true;
                    //}
                }
            }
        }

        internal object LoadObject(int pos)
        {
            if (this._version == 1)
            {
                return this.LoadObjectV1(pos);
            }
            return this.LoadObjectV2(pos, out _);
        }

        internal object LoadObject(int pos, out ResourceTypeCodeV2 typeCode)
        {
            if (this._version == 1)
            {
                object obj2 = this.LoadObjectV1(pos);
                typeCode = (obj2 is string) ? ResourceTypeCodeV2.String : ResourceTypeCodeV2.StartOfUserTypes;
                return obj2;
            }
            return this.LoadObjectV2(pos, out typeCode);
        }

        internal object LoadObjectV1(int pos)
        {
            object obj2;
            try
            {
                obj2 = this._LoadObjectV1(pos);
            }
            catch (EndOfStreamException exception)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_TypeMismatch"), exception);
            }
            catch (ArgumentOutOfRangeException exception2)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_TypeMismatch"), exception2);
            }
            return obj2;
        }

        internal object LoadObjectV2(int pos, out ResourceTypeCodeV2 typeCode)
        {
            object obj2;
            try
            {
                obj2 = this._LoadObjectV2(pos, out typeCode);
            }
            catch (EndOfStreamException exception)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_TypeMismatch"), exception);
            }
            catch (ArgumentOutOfRangeException exception2)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_TypeMismatch"), exception2);
            }
            return obj2;
        }

        public Type GetTypeFromPos(int pos)
        {
            this._store.BaseStream.Seek(this._dataSectionOffset + pos, SeekOrigin.Begin);
            int typeIndex = Read7BitEncodedInt(this._store);
            if (this._version == 1)
            {
                if (typeIndex == -1)
                {
                    return null;
                }
                if (this.FindType(typeIndex) != typeof(string))
                {
                    object[] objArray1 = new object[] { this.FindType(typeIndex).FullName };
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_ResourceNotString_Type", objArray1));
                }
                return typeof(string);
            }
            ResourceTypeCodeV2 code = (ResourceTypeCodeV2)typeIndex;
            switch (code)
            {
                case ResourceTypeCodeV2.String:
                case ResourceTypeCodeV2.Null:
                    if (code == ResourceTypeCodeV2.String)
                    {
                        return typeof(string);
                    }
                    return null;
            }
            if (code < ResourceTypeCodeV2.StartOfUserTypes)
            {
                return Type.GetType($"System.{code.ToString()}");
            }
            else
            {
                return this.FindType(((int)code) - 0x40);
            }            
        }

        internal string LoadString(int pos)
        {
            string fullName;
            this._store.BaseStream.Seek(this._dataSectionOffset + pos, SeekOrigin.Begin);
            string str = null;
            int typeIndex = Read7BitEncodedInt(this._store);
            if (this._version == 1)
            {
                if (typeIndex == -1)
                {
                    return null;
                }
                if (this.FindType(typeIndex) != typeof(string))
                {
                    object[] objArray1 = new object[] { this.FindType(typeIndex).FullName };
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_ResourceNotString_Type", objArray1));
                }
                return this._store.ReadString();
            }
            ResourceTypeCodeV2 code = (ResourceTypeCodeV2)typeIndex;
            switch (code)
            {
                case ResourceTypeCodeV2.String:
                case ResourceTypeCodeV2.Null:
                    if (code == ResourceTypeCodeV2.String)
                    {
                        str = this._store.ReadString();
                    }
                    return str;
            }
            if (code < ResourceTypeCodeV2.StartOfUserTypes)
            {
                fullName = code.ToString();
            }
            else
            {
                fullName = this.FindType(((int)code) - 0x40).FullName;
            }
            object[] values = new object[] { fullName };
            throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_ResourceNotString_Type", values));
        }

        private void ReadResources()
        {
            //BinaryFormatter formatter = new BinaryFormatter(null, new StreamingContext(StreamingContextStates.Persistence | StreamingContextStates.File));
           // this._typeLimitingBinder = new TypeLimitingDeserializationBinder();
            //formatter.Binder = this._typeLimitingBinder;
            //this._objFormatter = formatter;
            try
            {
                this._ReadResources();
            }
            catch (EndOfStreamException)
            {
                throw new Exception(("BadImageFormat_ResourcesHeaderCorrupted"));
            }
            catch (IndexOutOfRangeException)
            {
                throw new Exception(("BadImageFormat_ResourcesHeaderCorrupted"));
            }
        }
        
        internal static int ReadUnalignedI4(ResourceReader rs, int p)
        {
            
            //byte[] numPtr = BitConverter.GetBytes(p);
            return (((rs._buffer[p] | (rs._buffer[p + 1] << 8)) | (rs._buffer[p + 2] << 0x10)) | (rs._buffer[p + 3] << 0x18));
        }

        private void SkipInt32()
        {
            this._store.BaseStream.Seek(4L, SeekOrigin.Current);
        }

        private static int Read7BitEncodedInt(BinaryReader _store)
        {
            byte num3;
            int num = 0;
            int num2 = 0;
            do
            {
                if (num2 == 0x23)
                {
                    throw new FormatException(("Format_Bad7BitInt32"));
                }
                num3 = _store.ReadByte();
                num |= (num3 & 0x7f) << num2;
                num2 += 7;
            }
            while ((num3 & 0x80) != 0);
            return num;
        }

        //128 0x80
        private void SkipString()
        {

            int num = Read7BitEncodedInt(this._store);
            if (num < 0)
            {
                throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_NegativeStringLength"));
            }
            this._store.BaseStream.Seek((long)num, SeekOrigin.Current);
        }

        IEnumerator IEnumerable.GetEnumerator() =>
            this.GetEnumerator();

        private string TypeNameFromTypeCode(ResourceTypeCodeV2 typeCode)
        {
            string str;
            if (typeCode < ResourceTypeCodeV2.StartOfUserTypes)
            {
                return ("ResourceTypeCodeV2." + typeCode.ToString());
            }
            int index = ((int)typeCode) - 0x40;
            long position = this._store.BaseStream.Position;
            try
            {
                this._store.BaseStream.Position = this._typeNamePositions[index];
                str = this._store.ReadString();
            }
            finally
            {
                this._store.BaseStream.Position = position;
            }
            return str;
        }

        // Nested Types
        internal sealed class ResourceEnumerator : IDictionaryEnumerator, IEnumerator
        {
            // Fields
            private bool _currentIsValid;
            private int _currentName = -1;
            private int _dataPosition;
            private ResourceReader _reader;
            private const int ENUM_DONE = -2147483648;
            private const int ENUM_NOT_STARTED = -1;

            // Methods
            internal ResourceEnumerator(ResourceReader reader)
            {
                this._reader = reader;
                this._dataPosition = -2;
            }

            public bool MoveNext()
            {
                if ((this._currentName == (this._reader._numResources - 1)) || (this._currentName == -2147483648))
                {
                    this._currentIsValid = false;
                    this._currentName = -2147483648;
                    return false;
                }
                this._currentIsValid = true;
                this._currentName++;
                return true;
            }

            public void Reset()
            {
                if (this._reader._resCache == null)
                {
                    throw new InvalidOperationException(EnvironmentV2.GetResourceString("ResourceReaderIsClosed"));
                }
                this._currentIsValid = false;
                this._currentName = -1;
            }

            // Properties
            public object Current =>
                this.Entry;

            internal int DataPosition =>
                this._dataPosition;

            public DictionaryEntry Entry
            {
                get
                {
                    string str;
                    if (this._currentName == -2147483648)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumEnded"));
                    }
                    if (!this._currentIsValid)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumNotStarted"));
                    }
                    if (this._reader._resCache == null)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("ResourceReaderIsClosed"));
                    }
                    object valueForNameIndex = null;
                    ResourceReader reader = this._reader;
                    lock (reader)
                    {
                        Dictionary<string, ResourceLocator> dictionary = this._reader._resCache;
                        lock (dictionary)
                        {
                            str = this._reader.AllocateStringForNameIndex(this._currentName, out this._dataPosition);
                            if (this._reader._resCache.TryGetValue(str, out ResourceLocator locator))
                            {
                                valueForNameIndex = locator.Value;
                            }
                            if (valueForNameIndex == null)
                            {
                                if (this._dataPosition == -1)
                                {
                                    valueForNameIndex = this._reader.GetValueForNameIndex(this._currentName);
                                }
                                else
                                {
                                    valueForNameIndex = this._reader.LoadObject(this._dataPosition);
                                }
                            }
                        }
                    }
                    return new DictionaryEntry(str, valueForNameIndex);
                }
            }

            public object Key
            {
                get
                {
                    if (this._currentName == -2147483648)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumEnded"));
                    }
                    if (!this._currentIsValid)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumNotStarted"));
                    }
                    if (this._reader._resCache == null)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("ResourceReaderIsClosed"));
                    }
                    return this._reader.AllocateStringForNameIndex(this._currentName, out this._dataPosition);
                }
            }

            public object Value
            {
                get
                {
                    if (this._currentName == -2147483648)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumEnded"));
                    }
                    if (!this._currentIsValid)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("InvalidOperation_EnumNotStarted"));
                    }
                    if (this._reader._resCache == null)
                    {
                        throw new InvalidOperationException(EnvironmentV2.GetResourceString("ResourceReaderIsClosed"));
                    }
                    return this._reader.GetValueForNameIndex(this._currentName);
                }
            }
        }

        //internal sealed class TypeLimitingDeserializationBinder : SerializationBinder
        //{
        //    // Fields
        //    private ObjectReader _objectReader;
        //    private Type _typeToDeserialize;

        //    // Methods
        //    public override Type BindToType(string assemblyName, string typeName)
        //    {
        //        AssemblyName name = new AssemblyName(assemblyName);
        //        bool flag = false;
        //        foreach (string str in ResourceReader.TypesSafeForDeserialization)
        //        {
        //            if (ResourceManager.CompareNames(str, typeName, name))
        //            {
        //                flag = true;
        //                break;
        //            }
        //        }
        //        if (this.ObjectReader.FastBindToType(assemblyName, typeName).IsEnum)
        //        {
        //            flag = true;
        //        }
        //        if (flag)
        //        {
        //            return null;
        //        }
        //        object[] values = new object[] { this._typeToDeserialize.FullName, typeName };
        //        throw new Exception(EnvironmentV2.GetResourceString("BadImageFormat_ResType&SerBlobMismatch", values));
        //    }

        //    internal void ExpectingToDeserialize(Type type)
        //    {
        //        this._typeToDeserialize = type;
        //    }

        //    // Properties
        //    internal ObjectReader ObjectReader
        //    {
        //        get =>
        //            this._objectReader;
        //        set => this._objectReader = value;
        //    }
        //}
    }

}
