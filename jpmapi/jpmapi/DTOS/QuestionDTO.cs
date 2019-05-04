using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jpmapi.DTOS
{
    public class QuestionDTO
    {
        public List<ReplyDTO> replies { get; set; }
        public string autor { get; set; }
        public string image { get; set; }
        public string question { get; set; }
        public int rating { get; set; }
    }
}