using System.Collections.Generic;
using System.Xml;
using Microsoft.EntityFrameworkCore;
using webapp.Models;

public class AppDbContext : DbContext
{
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<Department> Departments { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}
