using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Resources;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.ComponentModel
{
    public class ComponentResourceManager
    {
        public Type Type;
        private ResourceReader resourceReader;
        private static Dictionary<Type, ResourceReader> resourceCache = new Dictionary<Type, ResourceReader>();        
        public ComponentResourceManager(Type type)
        {
            Type = type;     
            if(!resourceCache.ContainsKey(Type))
            {
                var data = Type.Assembly.GetManifestResourceData($"{Type.FullName}.resources");
                try
                {
                    resourceCache[Type] = resourceReader = new ResourceReader(new MemoryStream(data), data);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
            }
            else
            {
                resourceReader = resourceCache[Type];
            }
        }
        public string GetString(string name)
        {
            if(Settings.UseNativeResource)
            {
                if(resourceReader != null)
                {
                    try
                    {
                        var pos = resourceReader.FindPosForResource(name);
                        return resourceReader.LoadString(pos);                        
                    }
                    catch (Exception)
                    {
                        Console.WriteLine($"Unable to get resource {name} from with in {Type.FullName}.resources.");                        
                    }
                }
            }
            if(Settings.OnComponentResourceManagerGetString != null)
            {
                return Settings.OnComponentResourceManagerGetString(Type, name);
            }
            Console.WriteLine("ComponentResourceManager is not supported - please use Settings.OnComponentResourceManagerGetString");            
            return name;
        }

        
    }
}
