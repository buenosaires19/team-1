using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class CategoryWithCareersDTO
    {
        public List<CareerDTO> careers;
        public int career_category_id { get; set; }
        public string category_name { get; set; }
        public string image { get; set; }
    }
}