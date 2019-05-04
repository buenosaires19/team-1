using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jpmapi.DTOS;

namespace jpmapi.Services
{
    public class UserServices
    {
        public UserDTO ReturnDefaultUserData()
        {
            UserDTO response = new UserDTO();
            using (var entities = new jpmEntities())
            {
                var responseDb = entities.users.FirstOrDefault();
                response.birthday = responseDb.birthday;
                response.image = responseDb.image;
                response.name = responseDb.name;
                response.ranking = responseDb.ranking;
                response.school = responseDb.school;
                response.user_id = responseDb.user_id;
            }

            return response;
        }
    }
}