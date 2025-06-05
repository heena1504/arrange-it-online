
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Search,
  Filter,
  Edit,
  Eye,
  MoreHorizontal,
  Download
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Salary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@company.com",
      position: "Senior Developer",
      department: "Engineering",
      salary: 95000,
      status: "active",
      joinDate: "2023-01-15",
      avatar: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      position: "Product Manager",
      department: "Product",
      salary: 88000,
      status: "active",
      joinDate: "2022-11-20",
      avatar: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@company.com",
      position: "UI/UX Designer",
      department: "Design",
      salary: 75000,
      status: "active",
      joinDate: "2023-03-10",
      avatar: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    },
    {
      id: 4,
      name: "Emily Chen",
      email: "emily.chen@company.com",
      position: "HR Manager",
      department: "Human Resources",
      salary: 82000,
      status: "inactive",
      joinDate: "2022-08-05",
      avatar: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@company.com",
      position: "Marketing Specialist",
      department: "Marketing",
      salary: 65000,
      status: "active",
      joinDate: "2023-02-28",
      avatar: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    }
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = Math.round(totalSalary / employees.length);
  const activeEmployees = employees.filter(emp => emp.status === 'active').length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Salary Management</h1>
            <p className="text-gray-600 mt-1">Manage employee salaries and compensation</p>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Users className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{employees.length}</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {activeEmployees} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalSalary.toLocaleString()}</div>
              <p className="text-xs text-gray-600 mt-1">Monthly</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${averageSalary.toLocaleString()}</div>
              <p className="text-xs text-gray-600 mt-1">Per employee</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600 mt-1">Active departments</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Employee List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Employees</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Employee Salary Overview</CardTitle>
                <CardDescription>Manage and review employee compensation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEmployees.map((employee) => (
                    <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{employee.name}</h3>
                          <p className="text-sm text-gray-600">{employee.position}</p>
                          <p className="text-xs text-gray-500">{employee.department}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${employee.salary.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">Monthly</p>
                        </div>
                        
                        <Badge variant={employee.status === 'active' ? 'default' : 'secondary'}>
                          {employee.status}
                        </Badge>
                        
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active">
            <Card>
              <CardHeader>
                <CardTitle>Active Employees</CardTitle>
                <CardDescription>Currently active employee salaries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEmployees.filter(employee => employee.status === 'active').map((employee) => (
                    <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{employee.name}</h3>
                          <p className="text-sm text-gray-600">{employee.position}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${employee.salary.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Monthly</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inactive">
            <Card>
              <CardHeader>
                <CardTitle>Inactive Employees</CardTitle>
                <CardDescription>Previously active employee records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEmployees.filter(employee => employee.status === 'inactive').map((employee) => (
                    <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-500">{employee.name}</h3>
                          <p className="text-sm text-gray-400">{employee.position}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Inactive</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Salary;
