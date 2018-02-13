using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ClassicForms
{
    public class ServerButton : Button
    {
        public event SeverSendingEventHandler Sending;
        public event SeverSentEventHandler Sent;

        protected override void OnClick(EventArgs e)
        {
#if BRIDGE            
            if (!ServerHelper.OnClickServer(this))
                base.OnClick(e);
#endif
        }

        public void RaiseSendingEvent(SeverSendingEventArgs e)
        {
            if(Sending != null)
            {
                Sending.Invoke(this, e);
            }
        }

        public void RaiseSentEvent(ServerSentEventArgs e)
        {
            if (Sent != null)
            {
                Sent.Invoke(this, e);
            }
        }

        public bool IsSendingEventNull()
        {
            return Sending == null;
        }

        public bool IsSentEventNull()
        {
            return Sent == null;
        }
    }


}
