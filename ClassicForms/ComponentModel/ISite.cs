#if BRIDGE
using System;
using System.Runtime.InteropServices;


namespace System.ComponentModel
{
    public interface ISite : IServiceProviderV2
    {
        IComponent Component { get; }

        IContainer Container { get; }

        bool DesignMode { get; }

        string Name { get; set; }
    }
}
#endif