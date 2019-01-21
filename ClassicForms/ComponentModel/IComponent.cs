#if BRIDGE
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace System.ComponentModel
{
    public interface IComponent : IDisposable
    {
        event EventHandler Disposed;

        ISite Site { get; set; }
    }
}
#endif