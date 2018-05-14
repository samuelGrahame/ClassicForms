namespace System.Windows.Forms
{    
    internal sealed class WindowsFormsUtils
    {

        public static int RotateLeft(int value, int nBits)
        {
            nBits = nBits % 0x20;
            return ((value << nBits) | (value >> (0x20 - nBits)));
        }
    }
}
