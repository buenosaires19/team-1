using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class ProfessionalFullDetailDTO : ProfessionalDTO
    {

        public List<PhotoDTO> photos { get; set; }
        public List<VideoDTO> videos { get; set; }
    }
}