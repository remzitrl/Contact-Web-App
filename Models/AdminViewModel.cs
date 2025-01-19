using System;
namespace webapp.Models
{
	public class AdminViewModel
	{
		public AdminViewModel()
		{
		}

		public List<Department> Departments { get; set; }
		public List<Contact> Contacts { get; set; }
	}
}

