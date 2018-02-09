using ClassicForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassicForms
{
    public delegate void SeverSendingEventHandler(object sender, SeverSendingEventArgs e);
    public delegate void SeverSentEventHandler(object sender, ServerSentEventArgs e);
}
