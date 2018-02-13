using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.jquery;

namespace ClassicForms
{
    public static class ServerHelper
    {        
        public static string ContentType;
        public static string DataType;

        public static string Password;
        public static string Username;
        public static string Url;
        public static string Method;

        public static bool OnClickServer(ServerButton button)
        {
            if (!button.IsSendingEventNull())
            {
                var evArgs = new SeverSendingEventArgs();
                evArgs.Url = Url;
                evArgs.ContentType = ContentType;
                evArgs.DataType = DataType;
                evArgs.Password = Username;
                evArgs.Method = Method;

                button.RaiseSendingEvent(evArgs); // maybe get defaults..
                
                if (evArgs == null || evArgs.Cancel)
                {
                    return false;
                }
                else
                {
                    try
                    {
                        jQuery.ajax(new JQueryAjaxSettings()
                        {
                            contentType = evArgs.ContentType,
                            data = evArgs.Data,
                            dataType = evArgs.DataType,
                            username = evArgs.Username,
                            password = evArgs.Password,
                            url = evArgs.Url,
                            method = string.IsNullOrWhiteSpace(evArgs.Method) ? "POST" : evArgs.Method,
                            success = new JQueryAjaxSettings.successFn((o, str, jq) =>
                            {
                                if (!button.IsSentEventNull())
                                {
                                    button.RaiseSentEvent(new ServerSentEventArgs()
                                    {
                                        ex = null,
                                        Result = o
                                    });
                                }

                                return null;
                            }),
                            error = new JQueryAjaxSettings.errorFn((jq, str, str2) =>
                            {
                                if (!button.IsSentEventNull())
                                {
                                    button.RaiseSentEvent(new ServerSentEventArgs()
                                    {
                                        ex = new Exception(string.IsNullOrWhiteSpace(str2) ? str : str2),
                                        Result = null
                                    });
                                }

                                return null;
                            })
                        });
                    }
                    catch (Exception ex2)
                    {
                        if (!button.IsSentEventNull())
                        {
                            button.RaiseSentEvent(new ServerSentEventArgs()
                            {
                                ex = ex2,
                                Result = null
                            });
                        }
                    }

                }

                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
