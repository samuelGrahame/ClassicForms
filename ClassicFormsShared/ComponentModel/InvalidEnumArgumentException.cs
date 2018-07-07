#if BRIDGE
namespace System.ComponentModel
{
    using System;
    using System.Globalization;
    using System.Runtime.Serialization;
    using System.Security.Permissions;
    using System.Windows.Forms;

    public class InvalidEnumArgumentException : ArgumentException
    {
        public InvalidEnumArgumentException() : this(null)
        {
        }

        public InvalidEnumArgumentException(string message) : base(message)
        {
        }

        //protected InvalidEnumArgumentException(SerializationInfo info, StreamingContext context) : base(info, context)
        //{
        //}

        public InvalidEnumArgumentException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public InvalidEnumArgumentException(string argumentName, int invalidValue, Type enumClass) : base(SR.GetString("InvalidEnumArgument"), argumentName)
        {
            object[] objArray1 = new object[] { argumentName, invalidValue.ToString(), enumClass.Name };
        }
    }
}
#endif