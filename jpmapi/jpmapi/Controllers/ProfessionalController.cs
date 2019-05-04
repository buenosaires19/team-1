using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using jpmapi.Services;

namespace jpmapi.Controllers
{
    public class ProfessionalController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetProfessionalsForCareer(int id)
        {
            return Json(new ProfessionalServices().GetProfessionalsForCareer(id));
        }

        [HttpGet]
        public IHttpActionResult GetProfessionalDetails(int id)
        {
            return Json(new ProfessionalServices().GetProfessionalDetails(id));
        }
    }
}
