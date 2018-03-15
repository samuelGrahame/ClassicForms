using ClassicForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassicForms
{
    public class Customer : ICrud
    {
        public long Id;
        public string LastName;
        public string FirstName;
        public string Address;

        public bool IsNew()
        {
            return Id < 1;
        }
    }
}
