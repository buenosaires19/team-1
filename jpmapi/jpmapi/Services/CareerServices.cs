using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jpmapi.DTOS;

namespace jpmapi.Services
{
    public class CareerServices
    {
        public List<CategoryWithCareersDTO> GetCareersWithCategories()
        {
            List<CategoryWithCareersDTO> response = new List<CategoryWithCareersDTO>();
            using (var entities = new jpmEntities())
            {
                foreach (var category in entities.career_categories)
                {
                    CategoryWithCareersDTO newToAdd = new CategoryWithCareersDTO();
                    newToAdd.image = category.image;
                    newToAdd.career_category_id = category.career_category_id;
                    newToAdd.careers = new List<CareerDTO>();
                    newToAdd.category_name = category.category_name;

                    foreach (var career in category.careers)
                    {
                        CareerDTO careerToAdd = new CareerDTO();
                        careerToAdd.career_category_id = career.career_category_id;
                        careerToAdd.career_id = career.career_id;
                        careerToAdd.career_name = career.career_name;
                        careerToAdd.info = career.info;
                        newToAdd.careers.Add(careerToAdd);
                    }
                    response.Add(newToAdd);
                }

                return response;
            }
        }
    }
}