using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class VideoDTO
    {
        public int video_id { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<int> profesional_id { get; set; }
        public string video { get; set; }
    }
}