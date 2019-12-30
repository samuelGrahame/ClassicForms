using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using static Retyped.es5;

namespace System.Drawing
{
    public class Image
    {
        public string Data;

        public static explicit operator Image(UInt8Holder arr) {
            var x = new Image();

            var blob = new Blob(new[] { arr.Array }, new BlobPropertyBag() { type = "image/png" });
            x.Data = URL.createObjectURL(blob);

            return x;
        }
    }
}
