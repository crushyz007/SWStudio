using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ex006.Models;

namespace ex006.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    
        public IActionResult Answer()
        {
            string fname = Request.Form["fname"];
            string lname = Request.Form["lname"];
            string email = Request.Form["email"];

            string ans = Request.Form["ans"];

            string textarea = Request.Form["textarea"];
            
            ViewBag.fname = fname;
            ViewBag.lname = lname;
            ViewBag.email = email;
            
            ViewBag.ans = ans;

            ViewBag.textarea = textarea;

            return View();
        }

    }
}
