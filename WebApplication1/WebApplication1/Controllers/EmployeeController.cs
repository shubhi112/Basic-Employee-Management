using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class EmployeeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"
                            select EmployeeID, FirstName, LastName, EmpCode, Position
, Office from dbo.Employee;
                            ";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);

            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Employee emp)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"
                     insert into dbo.Employee 
                        Values
                        (
                        '" + emp.FirstName + @"'
                        ,'" + emp.LastName + @"'
                        ,'" + emp.EmpCode + @"'
                        ,'" + emp.Position + @"'
                        ,'" + emp.Office + @"'
                        )";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Successfully";
            }
            catch (Exception)
            {
                return "Failed to add";
            }
        }
        public string Put(Employee emp)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"
                update dbo.Employee set
                FirstName = '" + emp.FirstName + @"'
                ,LastName = '" + emp.LastName + @"'
                ,EmpCode = '" + emp.EmpCode + @"'
                ,Position = '" + emp.Position + @"'
,Office = '" + emp.Office + @"'
                where EmployeeID = " + emp.EmployeeId + @"
                ";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to update";
            }
        }
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" delete from dbo.Employee where EmployeeID = " + id;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Successfully";
            }
            catch (Exception)
            {
                return "Failed to delete";
            }
        }
    }
}