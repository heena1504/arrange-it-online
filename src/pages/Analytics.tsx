
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  Calendar,
  Target,
  Clock
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', enrolled: 120, completed: 98 },
    { month: 'Feb', enrolled: 145, completed: 112 },
    { month: 'Mar', enrolled: 165, completed: 134 },
    { month: 'Apr', enrolled: 189, completed: 156 },
    { month: 'May', enrolled: 203, completed: 178 },
    { month: 'Jun', enrolled: 234, completed: 201 }
  ];

  const courseCompletionData = [
    { name: 'React Fundamentals', value: 85 },
    { name: 'JavaScript Advanced', value: 72 },
    { name: 'UI/UX Design', value: 68 },
    { name: 'Project Management', value: 45 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
            <p className="text-gray-600 mt-1">Comprehensive insights into your training programs</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,456</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.3%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3.2% improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time to Complete</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2h</div>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                -0.3h faster
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates Issued</CardTitle>
              <Award className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,273</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +127 this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="enrollment" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="enrollment">Enrollment Trends</TabsTrigger>
            <TabsTrigger value="completion">Course Completion</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="enrollment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Enrollment vs Completion</CardTitle>
                <CardDescription>Track enrollment and completion trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="enrolled" fill="#3b82f6" name="Enrolled" />
                    <Bar dataKey="completed" fill="#10b981" name="Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completion" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Completion Rates</CardTitle>
                  <CardDescription>Completion percentage by course</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={courseCompletionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {courseCompletionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Courses</CardTitle>
                  <CardDescription>Courses with highest completion rates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseCompletionData.map((course, index) => (
                    <div key={course.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{course.name}</span>
                        <Badge variant={course.value > 70 ? 'default' : 'secondary'}>
                          {course.value}%
                        </Badge>
                      </div>
                      <Progress value={course.value} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress Trends</CardTitle>
                <CardDescription>Track learning progress and engagement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
