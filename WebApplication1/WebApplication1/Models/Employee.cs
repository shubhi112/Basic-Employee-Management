using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Employee
    {
        public long EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long EmpCode  { get; set; }
        public string Position { get; set; }
        public string Office { get; set; }

    }
}