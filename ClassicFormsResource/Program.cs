using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing;
using System.IO;
using System.Resources;

namespace ClassicFormsResource
{
    class Program
    {
        public static byte[] ImageToByte(Image img)
        {
            using (var stream = new MemoryStream())
            {
                img.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
                return stream.ToArray();
            }
        }

        static void Main(string[] args)
        {
            if (args == null || args.Length == 0)
                return;//args = new string[] { @"C:\Users\samuel grahame\Source\Repos\ClassicForms.Showcase3\ClassicForms.Showcase3.UI\bin\Debug\ClassicForms.Showcase3.UI.dll" };

            var assmbly = Assembly.LoadFile(args.FirstOrDefault());

            if(!System.IO.Directory.Exists("Resources"))
                System.IO.Directory.CreateDirectory("Resources");

            var types = assmbly.GetTypes().Where(o => o.BaseType == typeof(Form));

            if (types == null)
                return;


            foreach (var item in types)
            {
                var binaryWriter = new BinaryWriter();
                
                var rm = new ResourceManager(item);

                var resourceSet = rm.GetResourceSet(CultureInfo.CurrentCulture, true, true);

                if(resourceSet != null)
                {
                    binaryWriter.WriteChar('S');
                    binaryWriter.WriteChar('G');

                    var length = 0;
                    foreach (DictionaryEntry entry in resourceSet)
                    {
                        length++;
                    }

                    binaryWriter.WriteInt(length);

                    foreach (DictionaryEntry entry in resourceSet)
                    {
                        binaryWriter.WriteString((string)entry.Key);

                        if (entry.Value is string)
                        {
                            binaryWriter.WriteInt(0);
                            binaryWriter.WriteString((string)entry.Value);
                        }
                        else if (entry.Value is Image)
                        {
                            binaryWriter.WriteInt(1);
                            binaryWriter.WriteBinary(ImageToByte((Image)entry.Value));
                        }
                    }
                    File.WriteAllBytes($"Resources\\{item.FullName}.bin", binaryWriter.Data.ToArray());
                }
            }
        }

        public class BinaryWriter
        {
            public List<byte> Data = new List<byte>();

            public void WriteString(string value)
            {
                WriteInt(value.Length);
                Data.AddRange(Encoding.UTF8.GetBytes(value));
            }

            public void WriteBinary(byte[] value)
            {
                WriteInt(value.Length);
                Data.AddRange(value);
            }

            public void WriteInt(int value)
            {
                Data.AddRange(BitConverter.GetBytes(value));
            }

            public void WriteChar(char value)
            {
                Data.Add((byte)value);
            }
        }
    }
}
