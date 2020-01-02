using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.CompilerServices
{
    //
    // Summary:
    //     Distinguishes a compiler-generated element from a user-generated element. This
    //     class cannot be inherited.
    [AttributeUsage(AttributeTargets.All, Inherited = true)]
    public sealed class CompilerGeneratedAttribute : Attribute
    {
        //
        // Summary:
        //     Initializes a new instance of the System.Runtime.CompilerServices.CompilerGeneratedAttribute
        //     class.
        public CompilerGeneratedAttribute()
        {

        }
    }
}
