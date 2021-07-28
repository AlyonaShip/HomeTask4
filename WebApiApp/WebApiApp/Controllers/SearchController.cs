using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiApp.Models;

namespace WebApiApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private List<ProgramData> progList = new List<ProgramData>()
        {
            new ProgramData() { Id = 1, ProgramName = "Adobe Photoshop"},
            new ProgramData() { Id = 2, ProgramName = "Adobe PDF Reader"},
            new ProgramData() { Id = 3, ProgramName = "Adobe Could Compution"},
            new ProgramData() { Id = 4, ProgramName = "Adobe Illustrator"},
            new ProgramData() { Id = 5, ProgramName = "Procreate"},
            new ProgramData() { Id = 6, ProgramName = "SketchBook Pro"},
            new ProgramData() { Id = 7, ProgramName = "Affinity Designer"},
            new ProgramData() { Id = 8, ProgramName = "Visual Studio"},
            new ProgramData() { Id = 9, ProgramName = "Visual Studio Code"},
            new ProgramData() { Id = 10, ProgramName = "Corel Painter"},
            new ProgramData() { Id = 11, ProgramName = "Autodesk SketchBook Pro"},
            new ProgramData() { Id = 12, ProgramName = "Krita"},
            new ProgramData() { Id = 13, ProgramName = "CorelDRAW"},
            new ProgramData() { Id = 14, ProgramName = "PixBuilder Studio"},
            new ProgramData() { Id = 15, ProgramName = "ArtRage"},
            new ProgramData() { Id = 16, ProgramName = "Eclipse"},
            new ProgramData() { Id = 17, ProgramName = "Notepad++"},
            new ProgramData() { Id = 18, ProgramName = "Sublime Text"},
            new ProgramData() { Id = 19, ProgramName = "Xcode"},
            new ProgramData() { Id = 20, ProgramName = "SmoothDraw"}
        };

        [HttpGet]
        public JsonResult SearchData(string searchData)
        {
            return new JsonResult(!string.IsNullOrEmpty(searchData)? progList.Where(x => x.ProgramName.ToLower().Contains(searchData)).ToList() : progList);            
        }       
    }
}
