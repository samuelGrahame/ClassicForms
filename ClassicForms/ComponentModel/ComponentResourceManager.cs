using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Resources;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using static Retyped.es5;
using Bridge;

namespace System.ComponentModel
{
    public class ComponentResourceManager
    {
        public Type Type;
        public string Path;
        private ResourceReader resourceReader;

        public static Dictionary<Type, ResourceReader> resourceCache = new Dictionary<Type, ResourceReader>();

        public ComponentResourceManager()
        {

        }

        public ComponentResourceManager(Type type)
        {
            AssignType(type);
        }

        public void AssignType(Type type)
        {
            Type = type;

            Path = $"/resources/{Type.FullName}/";

            if (!resourceCache.ContainsKey(Type))
            {
                throw new Exception("Please call Form.LoadResourcesAsync() before using ComponentResourceManager.");
            }
            else
            {
                resourceReader = resourceCache[Type];
            }
        }

        public UInt8Holder GetObject(string name)
        {
            return new UInt8Holder() { Array = resourceReader.GetObject(name) };
        }
        public string GetString(string name)
        {
            return resourceReader.GetString(name);            
        }
    }

    public class ResourceReader
    {
        public Dictionary<string, object> Data = new Dictionary<string, object>();


        public string GetString(string name)
        {
            return Data[name].As<string>();
        }

        public Uint8Array GetObject(string name)
        {
            return Data[name].As<Uint8Array>();
        }
    }

    public class BinaryReader
    {
        public BinaryReader(Uint8Array data)
        {
            Data = data;
        }

        public Uint8Array Data;
        public uint Position;

        public string ReadString()
        {
            var length = ReadInt();
            var charArry = new char[length];

            for (int i = 0; i < length; i++)
            {
                charArry[i] = ReadChar();
            }

            return new string(charArry);
        }

        public char ReadChar()
        {
            return (char)Data[Position++];
        }

        public byte ReadByte()
        {
            return Data[Position++];
        }

        public int ReadInt()
        {            
            return BitConverter.ToInt32(
                new byte[] { Data[Position++], Data[Position++], Data[Position++], Data[Position++] }, 0);
        }

        public Uint8Array ReadBinary()
        {
            var length = (uint)ReadInt();
            var byteArry = new Uint8Array(length);

            for (uint i = 0; i < length; i++)
            {
                byteArry[i] = Data[i + Position];
            }
            Position += length;

            return byteArry;
        }


    }

}
