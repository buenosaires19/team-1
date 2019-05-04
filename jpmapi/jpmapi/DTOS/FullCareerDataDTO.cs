using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class FullCareerDataDTO
    {
        public int career_id { get; set; }
        public string career_name { get; set; }
        public string categoryName { get; set; }
        public string info { get; set; }
        public string image { get; set; }
       
        public List<questions> questions { get; set; }
        public List<FacultyDTO> faculties { get; set; }
    }
}