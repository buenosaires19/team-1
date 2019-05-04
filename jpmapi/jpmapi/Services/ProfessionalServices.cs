using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Antlr.Runtime.Misc;
using jpmapi.DTOS;

namespace jpmapi.Services
{
    public class ProfessionalServices
    {
        public List<ProfessionalDTO> GetProfessionalsForCareer(int id)
        {
            List<ProfessionalDTO> response = new List<ProfessionalDTO>();
            using (var entities = new jpmEntities())
            {
                var dbResponse = entities.profesionals.Where(t => t.career_id == id);
                foreach (var responseItem in dbResponse)
                {
                    var newItem = new ProfessionalDTO();
                    newItem.image = responseItem.image;
                    newItem.career = responseItem.careers.career_name;
                    newItem.company = responseItem.company;
                    newItem.profesional_id = id;
                    newItem.profesional_name = responseItem.profesional_name;
                    response.Add(newItem);
                }
                
            }

            return response;
        }

        public ProfessionalDTO GetProfessionalDetails(int id)
        {
            ProfessionalFullDetailDTO response = new ProfessionalFullDetailDTO();
            using (var entities = new jpmEntities())
            {
                var dbResponse = entities.profesionals.SingleOrDefault(t => t.profesional_id == id);
                response.image = dbResponse.image;
                response.career = dbResponse.careers.career_name;
                response.company = dbResponse.company;
                response.profesional_id = id;
                response.profesional_name = dbResponse.profesional_name;
                response.photos = new List<PhotoDTO>();
                foreach (var photo in dbResponse.photos)
                {
                    response.photos.Add(new PhotoDTO() {photo = photo.photo, photo_id = photo.photo_id, date = photo.date,profesional_id = photo.profesional_id});
                }
                response.videos = new ListStack<VideoDTO>();
                foreach (var photo in dbResponse.videos)
                {
                    response.videos.Add(new VideoDTO(){ video = photo.photo, video_id = photo.video_id, date = photo.date, profesional_id = photo.profesional_id });
                }

            }

            return response;
        }
    }
}