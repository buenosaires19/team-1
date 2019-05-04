using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class ProfessionalDTO
    {
        public int profesional_id { get; set; }
        public string profesional_name { get; set; }
        public string career { get; set; }
        public string company { get; set; }
        public string image { get; set; }

    }
}