﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using jpmapi.Services;

namespace jpmapi.Controllers
{
    public class CareerController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetCareersWithCategories()
        {
            return Json(new CareerServices().GetCareersWithCategories());
        }

        [HttpGet]
        public IHttpActionResult CareerData(int id)
        {
            return Json(new CareerServices().GetCareerData(id));
        }

    }
}
