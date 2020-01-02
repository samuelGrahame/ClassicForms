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
using System.Diagnostics;

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

        static void CreateBin(string startingPath, ResourceSet resourceSet, string name)
        {            
            try
            {                
                var binaryWriter = new BinaryWriter();
                if (resourceSet != null)
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
                    File.WriteAllBytes(startingPath + $"Resources\\{name}.bin", binaryWriter.Data.ToArray());
                }
            }
            catch (Exception)
            {

            }
        }

        static void Main(string[] args)
        {
            if (args == null || args.Length == 0)
                return;//args = new string[] { @"C:\Users\samuel grahame\Source\Repos\ClassicForms.Showcase3\ClassicForms.Showcase3.UI\bin\Debug\ClassicForms.Showcase3.UI.dll" };

            var assmbly = Assembly.LoadFile(args.FirstOrDefault().Trim());

            var startingPath = "";

            if(args.Length == 2)
            {
                startingPath = args[1];
            }

            if(!System.IO.Directory.Exists(startingPath + "Resources"))
                System.IO.Directory.CreateDirectory(startingPath + "Resources");

            try
            {
                var fullName = assmbly.GetName().Name + ".Properties.Resources";
                var globalResourceManager = new System.Resources.ResourceManager(fullName, assmbly);
                CreateBin(startingPath, globalResourceManager.GetResourceSet(CultureInfo.CurrentCulture, true, true), fullName);
            }
            catch (Exception)
            {

            }
            
            var types = assmbly.GetTypes().Where(o => o.BaseType == typeof(Form));

            if (types == null)
                return;


            foreach (var item in types)
            {                
                try
                {
                    var rm = new ResourceManager(item);
                    CreateBin(startingPath, rm.GetResourceSet(CultureInfo.CurrentCulture, true, true), item.FullName);
                }
                catch (Exception)
                {

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
