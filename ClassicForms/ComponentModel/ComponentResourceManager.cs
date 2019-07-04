using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.ComponentModel
{
    public class ComponentResourceManager
    {
        public Type Type;
        private static Dictionary<Type, Dictionary<string, string>> resourceCache = new Dictionary<Type, Dictionary<string, string>>();        
        public ComponentResourceManager(Type type)
        {
            Type = type;            
        }
        public string GetString(string name)
        {
            if(Settings.OnFormRequest == null)
            {
                return Settings.OnFormRequest(Type, name);
            }
            Console.WriteLine("ComponentResourceManager is not supported - please use Settings.OnFormRequest");            
            return name;
        }
    }
}
