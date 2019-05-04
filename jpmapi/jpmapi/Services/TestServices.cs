using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jpmapi.DTOS;

namespace jpmapi.Services
{
    public class TestServices
    {
        public List<TestDTO> Retrieve()
        {
            List<TestDTO> response = new List<TestDTO>();
            using (var entities = new jpmEntities())
            {
                foreach (var test in entities.tests)
                {
                    var responseToAdd = new TestDTO();
                    responseToAdd.image = test.image;
                    responseToAdd.test_id = test.test_id;
                    responseToAdd.type = test.type;
                }
            }

            return response;
        }
    }
}