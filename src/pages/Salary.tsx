
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, MoreHorizontal, Download } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Salary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const salaryData = [
    {
      id: 1,
      name: "Alicia Shankar",
      position: "Software Engineer",
      department: "Engineering",
      salary: "$2,500",
      startDate: "May 16, 2023",
      lifecycle: "Hired",
      status: "Active"
    },
    {
      id: 2,
      name: "James Cynksen",
      position: "Visual Designer",
      department: "Design",
      salary: "$2,100",
      startDate: "Jan 16, 2023",
      lifecycle: "Hired",
      status: "Active"
    },
    {
      id: 3,
      name: "Amaan Kannelott",
      position: "Sales Manager",
      department: "Product",
      salary: "$4,700",
      startDate: "Dec 05, 2024",
      lifecycle: "Unemployed",
      status: "Inactive"
    },
    {
      id: 4,
      name: "Arta Adrinsh",
      position: "Content Writer",
      department: "Content",
      salary: "$2,000",
      startDate: "Jan 04, 2024",
      lifecycle: "Unemployed",
      status: "Active"
    },
    {
      id: 5,
      name: "Dile Shankar",
      position: "Backend Engineer",
      department: "Engineering",
      salary: "$2,500",
      startDate: "Jan 04, 2024",
      lifecycle: "Hired",
      status: "Active"
    },
    {
      id: 6,
      name: "Alicia Shankar",
      position: "Product Manager",
      department: "Product",
      salary: "$4,700",
      startDate: "Feb 23, 2024",
      lifecycle: "Hired",
      status: "Active"
    },
    {
      id: 7,
      name: "Dario Bank",
      position: "Software Engineer",
      department: "Engineering",
      salary: "$3,500",
      startDate: "Aug 21, 2023",
      lifecycle: "Unemployed",
      status: "Inactive"
    },
    {
      id: 8,
      name: "Alicia Shankar",
      position: "Product Manager",
      department: "Product",
      salary: "$4,700",
      startDate: "Apr 03, 2023",
      lifecycle: "Hired",
      status: "Active"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
    ) : (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Inactive</Badge>
    );
  };

  const getLifecycleBadge = (lifecycle: string) => {
    return lifecycle === "Hired" ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Hired</Badge>
    ) : (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Unemployed</Badge>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Salary Activities</h1>
            <p className="text-gray-600 mt-1">May 2025</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export & Share
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Instructor
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="engineer">Engineer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filter
                </Button>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Monthly Salary: <span className="font-semibold">$3500</span></span>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Salary Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-700">Name</th>
                    <th className="text-left p-4 font-medium text-gray-700">Job Title</th>
                    <th className="text-left p-4 font-medium text-gray-700">Department</th>
                    <th className="text-left p-4 font-medium text-gray-700">Net Salary</th>
                    <th className="text-left p-4 font-medium text-gray-700">Start Date</th>
                    <th className="text-left p-4 font-medium text-gray-700">Status</th>
                    <th className="text-left p-4 font-medium text-gray-700">Life Cycle</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.map((employee) => (
                    <tr key={employee.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-sm">
                              {employee.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium text-gray-900">{employee.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">{employee.position}</td>
                      <td className="p-4 text-gray-600">{employee.department}</td>
                      <td className="p-4 font-medium text-gray-900">{employee.salary}</td>
                      <td className="p-4 text-gray-600">{employee.startDate}</td>
                      <td className="p-4">{getStatusBadge(employee.status)}</td>
                      <td className="p-4">{getLifecycleBadge(employee.lifecycle)}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t">
              <span className="text-sm text-gray-600">Showing 1-8 of 8 results</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>1</Button>
                <Button variant="ghost" size="sm">2</Button>
                <Button variant="ghost" size="sm">3</Button>
                <Button variant="ghost" size="sm">4</Button>
                <Button variant="outline" size="sm">></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Salary;
