using Aplicacion.Curso;
using AutoMapper;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<tblCurso, CursoDto>()
                .ForMember(x => x.Instructores, y => y.MapFrom(z => z.InstructoresLink.Select(a => a.Instructor).ToList()));
            CreateMap<tblCursoInstructor, CursoInstructorDto>();
            CreateMap<tblInstructor, InstructoresDTO>();
        }
    }
}
