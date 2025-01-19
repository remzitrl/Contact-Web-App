using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapp.Models;

namespace webapp.Controllers;

public class HomeController : Controller
{
    private readonly AppDbContext _context;

    public HomeController(AppDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        var dps = _context.Departments.ToList();
        return View(dps);

    }

    public IActionResult Admin(int filter = 0)
    {
        var model = new AdminViewModel();
        model.Departments = _context.Departments.ToList();

        ViewData["SelectedFilter"] = filter;

        if (filter == 0)
        {
            model.Contacts = _context.Contacts.Include(c => c.Department).ToList();
        }
        else
        {
            model.Contacts = _context.Contacts
                .Include(c => c.Department)
                .Where(c => c.DepartmentId == filter)
                .ToList();
        }

        return View(model);
    }



    [HttpPost]
    public IActionResult Contact(Contact form)
    {
        if (form == null)
            return BadRequest("form boş");

        try
        {
            _context.Contacts.Add(form);
            _context.SaveChanges();

            return Ok(true);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Database hatası: {ex.Message}");
        }
    }


}

