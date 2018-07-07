using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;
using Retyped;

namespace System.Windows.Forms
{
    public class MessageBox
    {
        private const int HELP_BUTTON = 0x4000;
        [ThreadStatic]
        private static System.Windows.Forms.HelpInfo[] helpInfoTable;
        private const int IDABORT = 3;
        private const int IDCANCEL = 2;
        private const int IDIGNORE = 5;
        private const int IDNO = 7;
        private const int IDOK = 1;
        private const int IDRETRY = 4;
        private const int IDYES = 6;

        private MessageBox()
        {
        }

        private static void PopHelpInfo()
        {
            if (helpInfoTable != null)
            {
                if (helpInfoTable.Length == 1)
                {
                    helpInfoTable = null;
                }
                else
                {
                    int length = helpInfoTable.Length - 1;
                    System.Windows.Forms.HelpInfo[] destinationArray = new System.Windows.Forms.HelpInfo[length];
                    Array.Copy(helpInfoTable, destinationArray, length);
                    helpInfoTable = destinationArray;
                }
            }
        }

        private static void PushHelpInfo(System.Windows.Forms.HelpInfo hpi)
        {
            System.Windows.Forms.HelpInfo[] infoArray;
            int length = 0;
            if (helpInfoTable == null)
            {
                infoArray = new System.Windows.Forms.HelpInfo[length + 1];
            }
            else
            {
                length = helpInfoTable.Length;
                infoArray = new System.Windows.Forms.HelpInfo[length + 1];
                Array.Copy(helpInfoTable, infoArray, length);
            }
            infoArray[length] = hpi;
            helpInfoTable = infoArray;
        }

        public static DialogResult Show(string text) =>
            ShowCore(null, text, string.Empty, MessageBoxButtons.OK, MessageBoxIcon.None, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(string text, string caption) =>
            ShowCore(null, text, caption, MessageBoxButtons.OK, MessageBoxIcon.None, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(IWin32Window owner, string text) =>
            ShowCore(owner, text, string.Empty, MessageBoxButtons.OK, MessageBoxIcon.None, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons) =>
            ShowCore(null, text, caption, buttons, MessageBoxIcon.None, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(IWin32Window owner, string text, string caption) =>
            ShowCore(owner, text, caption, MessageBoxButtons.OK, MessageBoxIcon.None, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon) =>
            ShowCore(null, text, caption, buttons, icon, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons) =>
            ShowCore(owner, text, caption, buttons, MessageBoxIcon.None, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton) =>
            ShowCore(null, text, caption, buttons, icon, defaultButton, 0, false);

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon) =>
            ShowCore(owner, text, caption, buttons, icon, MessageBoxDefaultButton.Button1, 0, false);

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options) =>
            ShowCore(null, text, caption, buttons, icon, defaultButton, options, false);

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton) =>
            ShowCore(owner, text, caption, buttons, icon, defaultButton, 0, false);

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, bool displayHelpButton) =>
            ShowCore(null, text, caption, buttons, icon, defaultButton, options, displayHelpButton);

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath);
            return ShowCore(null, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options) =>
            ShowCore(owner, text, caption, buttons, icon, defaultButton, options, false);

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath, string keyword)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath, keyword);
            return ShowCore(null, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath, HelpNavigator navigator)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath, navigator);
            return ShowCore(null, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath);
            return ShowCore(owner, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        public static DialogResult Show(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath, HelpNavigator navigator, object param)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath, navigator, param);
            return ShowCore(null, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath, string keyword)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath, keyword);
            return ShowCore(owner, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath, HelpNavigator navigator)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath, navigator);
            return ShowCore(owner, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        public static DialogResult Show(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, string helpFilePath, HelpNavigator navigator, object param)
        {
            System.Windows.Forms.HelpInfo hpi = new System.Windows.Forms.HelpInfo(helpFilePath, navigator, param);
            return ShowCore(owner, text, caption, buttons, icon, defaultButton, options, hpi);
        }

        private static DialogResult ShowCore(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, bool showHelp)
        {
            //DialogResult result;
            if (!System.Windows.Forms.ClientUtils.IsEnumValid(buttons, (int)buttons, 0, 5))
            {
                throw new InvalidEnumArgumentException("buttons", (int)buttons, typeof(MessageBoxButtons));
            }
            if (!WindowsFormsUtils.EnumValidator.IsEnumWithinShiftedRange(icon, 4, 0, 4))
            {
                throw new InvalidEnumArgumentException("icon", (int)icon, typeof(MessageBoxIcon));
            }
            if (!WindowsFormsUtils.EnumValidator.IsEnumWithinShiftedRange(defaultButton, 8, 0, 2))
            {
                throw new InvalidEnumArgumentException("defaultButton", (int)defaultButton, typeof(DialogResult));
            }
            //if (((options & (MessageBoxOptions.ServiceNotification | MessageBoxOptions.DefaultDesktopOnly)) == 0))
            //{
            //    throw new InvalidOperationException(System.Windows.Forms.SR.GetString("CantShowModalOnNonInteractive"));
            //}
            //if ((owner != null) && ((options & (MessageBoxOptions.ServiceNotification | MessageBoxOptions.DefaultDesktopOnly)) != 0))
            //{
            //    throw new ArgumentException(System.Windows.Forms.SR.GetString("CantShowMBServiceWithOwner"), "options");
            //}
            //if (showHelp && ((options & (MessageBoxOptions.ServiceNotification | MessageBoxOptions.DefaultDesktopOnly)) != 0))
            //{
            //    throw new ArgumentException(System.Windows.Forms.SR.GetString("CantShowMBServiceWithHelp"), "options");
            //}
            //if ((options & ~(MessageBoxOptions.RtlReading | MessageBoxOptions.RightAlign)) != 0)
            //{
            //    //System.Windows.Forms.IntSecurity.UnmanagedCode.Demand();
            //}
            //System.Windows.Forms.IntSecurity.SafeSubWindows.Demand();
            MessageBoxButtons type = (MessageBoxButtons)(showHelp ? 0x4000 : 0);
            type |= ((buttons | ((MessageBoxButtons)((int)icon))) | ((MessageBoxButtons)((int)defaultButton))) | ((MessageBoxButtons)((int)options));


            var msgForm = new Form();
            msgForm.SuspendLayout();
            msgForm.Size = new Drawing.Size(413, 28 + 28 + 31 + 41 + 14);            
            msgForm.BackColor = Color.White;
            msgForm.StartPosition = FormStartPosition.CenterScreen;
            msgForm.MaximizeBox = false;
            msgForm.MinimizeBox = false;
            msgForm.Text = caption;
            msgForm.FormBorderStyle = FormBorderStyle.FixedDialog;

            var label = new Label()
            {
                Size = new Drawing.Size(374, 14),
                Location = new Drawing.Point(14, 28),
                Anchor = AnchorStyles.Left | AnchorStyles.Top | AnchorStyles.Right | AnchorStyles.Bottom,
                Text = text
            };
            label.Element.style.userSelect = "text";
            //el.style.userSelect = "text";
            label.Element.style.cursor = "text";
            var panel = new Panel()
            {
                BackColor = Color.FromArgb(240, 240, 240),                
            };
            panel.SuspendLayout();
            panel.Dock = DockStyle.Bottom;
            panel.Size = new Size(410, 42);

            var button = new Button()
            {
                Text = "OK",
                Size = new Size(72, 21),
                Location = new Point(325, 10),
                Anchor = AnchorStyles.Top | AnchorStyles.Right,
                DialogResult = DialogResult.OK
            };

            panel.Controls.Add(button);

            msgForm.Controls.Add(label);
            msgForm.Controls.Add(panel);

            panel.ResumeLayout(false);
            msgForm.ResumeLayout(false);
            
            msgForm.ShowDialog();
            // workout height..
            var prev = label.Element.style.height;
            label.Element.style.height = "auto";
            label.Element.style.wordWrap = "break-word";
            var rect = (DOMRect)label.Element.getBoundingClientRect();
            label.Element.style.height = prev;

            msgForm.Size = new Drawing.Size(msgForm.Width, msgForm.Height + (int)rect.height);


            //IntPtr userCookie = IntPtr.Zero;
            //if (Application.UseVisualStyles)
            //{
            //    if ((UnsafeNativeMethods.GetModuleHandle("shell32.dll") == IntPtr.Zero) && (UnsafeNativeMethods.LoadLibraryFromSystemPathIfAvailable("shell32.dll") == IntPtr.Zero))
            //    {
            //        object[] args = new object[] { "shell32.dll" };
            //        throw new Win32Exception(Marshal.GetLastWin32Error(), System.Windows.Forms.SR.GetString("LoadDLLError", args));
            //    }
            //    userCookie = UnsafeNativeMethods.ThemingScope.Activate();
            //}
            //Application.BeginModalMessageLoop();
            //try
            //{
            //    result = Win32ToDialogResult(SafeNativeMethods.MessageBox(new HandleRef(owner, zero), text, caption, type));
            //}
            //finally
            //{
            //    Application.EndModalMessageLoop();
            //    UnsafeNativeMethods.ThemingScope.Deactivate(userCookie);
            //}
            //UnsafeNativeMethods.SendMessage(new HandleRef(owner, zero), 7, 0, 0);
            return DialogResult.None;
        }

        private static DialogResult ShowCore(IWin32Window owner, string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon, MessageBoxDefaultButton defaultButton, MessageBoxOptions options, System.Windows.Forms.HelpInfo hpi)
        {
            DialogResult none = DialogResult.None;
            try
            {
                PushHelpInfo(hpi);
                none = ShowCore(owner, text, caption, buttons, icon, defaultButton, options, true);
            }
            finally
            {
                PopHelpInfo();
            }
            return none;
        }

        private static DialogResult Win32ToDialogResult(int value)
        {
            switch (value)
            {
                case 1:
                    return DialogResult.OK;

                case 2:
                    return DialogResult.Cancel;

                case 3:
                    return DialogResult.Abort;

                case 4:
                    return DialogResult.Retry;

                case 5:
                    return DialogResult.Ignore;

                case 6:
                    return DialogResult.Yes;

                case 7:
                    return DialogResult.No;
            }
            return DialogResult.No;
        }

        internal static System.Windows.Forms.HelpInfo HelpInfo
        {
            get
            {
                if ((helpInfoTable != null) && (helpInfoTable.Length != 0))
                {
                    return helpInfoTable[helpInfoTable.Length - 1];
                }
                return null;
            }
        }
    }

}
