using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace jpmapi.Controllers
{
    public class TestController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Retrieve()
        {
            return Json(new TestController().Retrieve());
        }
    }
}
