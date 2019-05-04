using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class CareerDTO
    {
        public int career_id { get; set; }
        public string career_name { get; set; }
        public Nullable<int> career_category_id { get; set; }
        public string info { get; set; }
        public string image { get; set; }


    }
}