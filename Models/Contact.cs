using System;
namespace webapp.Models
{
	public class Contact
	{
		public Contact()
		{
		}

		public int ContactId { get; set; }
		public string FullName { get; set; }
		public string Email { get; set; }
		public string Number { get; set; }
		public string Subject { get; set; }
		public string Message { get; set; }

		public int DepartmentId { get; set; }
        public Department Department { get; set; }
	}
}

