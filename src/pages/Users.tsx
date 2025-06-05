
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users as UsersIcon, 
  UserPlus, 
  Search,
  Filter,
  Edit,
  Trash2,
  Mail,
  Phone,
  Calendar,
  Award,
  BookOpen
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@company.com",
      role: "learner",
      status: "active",
      joinDate: "2024-01-15",
      coursesCompleted: 5,
      coursesEnrolled: 8,
      lastActive: "2 hours ago",
      avatar: "JD"
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah.smith@company.com",
      role: "instructor",
      status: "active",
      joinDate: "2023-11-20",
      coursesCompleted: 12,
      coursesEnrolled: 15,
      lastActive: "1 day ago",
      avatar: "SS"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@company.com",
      role: "learner",
      status: "active",
      joinDate: "2024-02-10",
      coursesCompleted: 3,
      coursesEnrolled: 6,
      lastActive: "5 minutes ago",
      avatar: "MJ"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@company.com",
      role: "admin",
      status: "active",
      joinDate: "2023-08-05",
      coursesCompleted: 8,
      coursesEnrolled: 10,
      lastActive: "30 minutes ago",
      avatar: "ED"
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@company.com",
      role: "learner",
      status: "inactive",
      joinDate: "2023-12-03",
      coursesCompleted: 2,
      coursesEnrolled: 4,
      lastActive: "1 week ago",
      avatar: "DW"
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'instructor': return 'default';
      default: return 'secondary';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    return status === 'active' ? 'default' : 'secondary';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-1">Manage learners, instructors, and administrators</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 mt-4 sm:mt-0">
            <UserPlus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search users..."
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

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UsersIcon className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <UsersIcon className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Instructors</CardTitle>
              <Award className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.role === 'instructor').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learners</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.role === 'learner').length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Users Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="learners">Learners</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="admins">Admins</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">{user.avatar}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-semibold">{user.name}</h3>
                            <Badge variant={getRoleBadgeVariant(user.role)}>{user.role}</Badge>
                            <Badge variant={getStatusBadgeVariant(user.status)}>{user.status}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Mail className="h-4 w-4" />
                              <span>{user.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>Joined {user.joinDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Completed: {user.coursesCompleted} courses</span>
                            <span>Enrolled: {user.coursesEnrolled} courses</span>
                            <span>Last active: {user.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learners">
            <div className="grid gap-6">
              {filteredUsers.filter(user => user.role === 'learner').map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">{user.avatar}</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{user.name}</h3>
                          <p className="text-gray-600">{user.email}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Completed: {user.coursesCompleted} courses</span>
                            <span>Enrolled: {user.coursesEnrolled} courses</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instructors">
            <div className="grid gap-6">
              {filteredUsers.filter(user => user.role === 'instructor').map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">{user.avatar}</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{user.name}</h3>
                          <p className="text-gray-600">{user.email}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Teaching experience</span>
                            <span>Rating: 4.8/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admins">
            <div className="grid gap-6">
              {filteredUsers.filter(user => user.role === 'admin').map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">{user.avatar}</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{user.name}</h3>
                          <p className="text-gray-600">{user.email}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Administrator permissions</span>
                            <span>Last active: {user.lastActive}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Users;
