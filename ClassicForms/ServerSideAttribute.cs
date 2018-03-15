using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ClassicForms
{
    [AttributeUsage(AttributeTargets.Method)]
    public class ServerSideAttribute : Attribute
    {
        public CrudCommand Crud;
        public ServerSideAttribute(CrudCommand crud)
        {
            Crud = crud;
        }
    }
}
