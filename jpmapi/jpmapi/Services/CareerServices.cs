using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jpmapi.DTOS;

namespace jpmapi.Services
{
    public class CareerServices
    {
        public FullCareerDataDTO GetCareerData(int id)
        {
            FullCareerDataDTO response = new FullCareerDataDTO();
            using (var entities = new jpmEntities())
            {
                var dbResponse = entities.careers.SingleOrDefault(t => t.career_id == id);
                response.career_id = dbResponse.career_id;
                response.career_name = dbResponse.career_name;
                response.categoryName = dbResponse.career_categories.category_name;
                response.image = dbResponse.image;
                response.info = dbResponse.info;
                response.faculties = new List<FacultyDTO>();
                foreach (var faculty in response.faculties)
                {
                    response.faculties.Add(new FacultyDTO() {faculty_name = faculty.faculty_name,image = faculty.image});
                }
                response.questions = new List<QuestionDTO>();
                foreach (var question in dbResponse.questions)
                {
                    var questionToAdd = new QuestionDTO();

                    questionToAdd.autorImage = question.users.image;
                    questionToAdd.autor = question.users.name;
                    questionToAdd.question = question.question;
                    questionToAdd.rating = (int) question.rating;
                    questionToAdd.replies = new List<ReplyDTO>();
                   

                    foreach (var reply in question.replies)
                    {
                        var replyToAdd = new ReplyDTO();

                        replyToAdd.autor = reply.profesionals.profesional_name;
                        replyToAdd.autorImage = reply.profesionals.image;
                        replyToAdd.reply = reply.content;
                        replyToAdd.autorCompany = reply.profesionals.company;
                        questionToAdd.replies.Add(replyToAdd);
                    }

                    response.questions.Add(questionToAdd);
                }
            }

            return response;
        }
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
                        careerToAdd.image = career.image;
                        newToAdd.careers.Add(careerToAdd);
                    }
                    response.Add(newToAdd);
                }

                return response;
            }
        }
    }
}