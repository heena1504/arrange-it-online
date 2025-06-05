
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Calendar
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Learn the basics of React including components, state, and props",
      instructor: "John Smith",
      duration: "8 hours",
      enrolled: 120,
      status: "active",
      category: "Frontend",
      progress: 85,
      image: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into advanced JavaScript concepts and ES6+ features",
      instructor: "Sarah Johnson",
      duration: "12 hours",
      enrolled: 89,
      status: "active",
      category: "Programming",
      progress: 72,
      image: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      description: "Master the fundamentals of user interface and experience design",
      instructor: "Mike Davis",
      duration: "15 hours",
      enrolled: 156,
      status: "active",
      category: "Design",
      progress: 68,
      image: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    },
    {
      id: 4,
      title: "Project Management Essentials",
      description: "Learn project management methodologies and best practices",
      instructor: "Emily Chen",
      duration: "10 hours",
      enrolled: 78,
      status: "draft",
      category: "Management",
      progress: 45,
      image: "/lovable-uploads/8095bb5f-cf16-4ddb-8d06-384d1f8b2256.png"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
            <p className="text-gray-600 mt-1">Create and manage your training courses</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 mt-4 sm:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Create New Course
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search courses..."
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

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.filter(c => c.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.enrolled, 0)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length)}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full bg-gray-100 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant={course.status === 'active' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Instructor:</span>
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Duration:
                        </span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          Enrolled:
                        </span>
                        <span className="font-medium">{course.enrolled} students</span>
                      </div>
                      <div className="pt-2">
                        <Badge variant="outline">{course.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.filter(course => course.status === 'active').map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full bg-gray-100 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Instructor:</span>
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          Enrolled:
                        </span>
                        <span className="font-medium">{course.enrolled} students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="draft">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.filter(course => course.status === 'draft').map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full bg-gray-100 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <Badge variant="secondary">Draft</Badge>
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

export default Courses;
