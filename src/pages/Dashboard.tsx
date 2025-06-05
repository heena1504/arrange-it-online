
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Calendar, 
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  Menu
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  const courseData = [
    { id: 1, title: "React Fundamentals", progress: 85, enrolled: 120, status: "active" },
    { id: 2, title: "Advanced JavaScript", progress: 65, enrolled: 89, status: "active" },
    { id: 3, title: "UI/UX Design", progress: 45, enrolled: 156, status: "active" },
    { id: 4, title: "Project Management", progress: 30, enrolled: 78, status: "pending" },
  ];

  const recentActivity = [
    { user: "John Doe", action: "Completed React Fundamentals", time: "2 hours ago" },
    { user: "Sarah Smith", action: "Started UI/UX Design", time: "4 hours ago" },
    { user: "Mike Johnson", action: "Earned JavaScript Certificate", time: "1 day ago" },
    { user: "Emily Davis", action: "Joined Project Management", time: "2 days ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your training overview.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <BookOpen className="h-4 w-4 mr-2" />
              New Course
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Learners</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3 new this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates Issued</CardTitle>
              <Award className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,847</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +85 this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2% improvement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Course Progress */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                  <CardDescription>Current enrollment and completion status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseData.map((course) => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{course.title}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant={course.status === 'active' ? 'default' : 'secondary'}>
                            {course.status}
                          </Badge>
                          <span className="text-sm text-gray-600">{course.enrolled} enrolled</span>
                        </div>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="text-right text-sm text-gray-600">{course.progress}% complete</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest learner activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                          <p className="text-sm text-gray-600">{activity.action}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Manage your training courses and content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Course Management</h3>
                  <p className="text-gray-600 mb-4">Create and manage your training courses here</p>
                  <Button>Create New Course</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage learners, instructors, and administrators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
                  <p className="text-gray-600 mb-4">Add and manage users across your platform</p>
                  <Button>Add New User</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>Detailed insights into your training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600 mb-4">View comprehensive reports and analytics</p>
                  <Button>View Reports</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
