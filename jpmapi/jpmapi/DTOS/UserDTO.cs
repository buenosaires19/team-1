using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class UserDTO
    {
        public int user_id { get; set; }
        public string name { get; set; }
        public string school { get; set; }
        public Nullable<System.DateTime> birthday { get; set; }
        public Nullable<int> ranking { get; set; }
        public string image { get; set; }
    }
}