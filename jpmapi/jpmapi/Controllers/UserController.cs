using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using jpmapi.DTOS;
using jpmapi.Services;

namespace jpmapi.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]

        public IHttpActionResult MyUser()
        {
            return Json(new UserServices().ReturnDefaultUserData());
        }
    }
}
