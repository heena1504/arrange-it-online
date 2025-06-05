
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const JobPosting = () => {
  const [formData, setFormData] = useState({
    role: "",
    skillsRequired: "",
    yearsExperience: "",
    experienceLevel: "",
    employmentType: "",
    workplaceType: "",
    stipend: "",
    openings: "",
    description: ""
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posting data:", { ...formData, skills });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job Posting</h1>
            <p className="text-gray-600 mt-1">Post job for the right candidate and pick the best</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Fill in Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role
                    </label>
                    <Input
                      placeholder="e.g. UI/UX Designer"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills Required
                    </label>
                    <div className="space-y-3">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Add a skill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                          className="flex-1"
                        />
                        <Button type="button" onClick={addSkill} variant="outline">
                          Add
                        </Button>
                      </div>
                      {skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1">
                              {skill}
                              <button
                                type="button"
                                onClick={() => removeSkill(skill)}
                                className="ml-2 hover:text-red-600"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience, Experience Level
                      </label>
                      <Input
                        placeholder="e.g. 2-3 years"
                        value={formData.yearsExperience}
                        onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Level
                      </label>
                      <Select 
                        value={formData.experienceLevel} 
                        onValueChange={(value) => setFormData({...formData, experienceLevel: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="mid">Mid Level</SelectItem>
                          <SelectItem value="senior">Senior Level</SelectItem>
                          <SelectItem value="lead">Lead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employment Type
                      </label>
                      <Select 
                        value={formData.employmentType} 
                        onValueChange={(value) => setFormData({...formData, employmentType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Workplace Type
                      </label>
                      <Select 
                        value={formData.workplaceType} 
                        onValueChange={(value) => setFormData({...formData, workplaceType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select workplace" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="onsite">On-site</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stipend
                      </label>
                      <Input
                        placeholder="Enter stipend amount"
                        value={formData.stipend}
                        onChange={(e) => setFormData({...formData, stipend: e.target.value})}
                      />
                      <p className="text-xs text-gray-500 mt-1">Enter the stipend you would like to offer</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No of Opening (if it is more than 1 and)
                      </label>
                      <Input
                        placeholder="e.g. 3"
                        value={formData.openings}
                        onChange={(e) => setFormData({...formData, openings: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Description
                    </label>
                    <Textarea
                      placeholder="Describe the job role, responsibilities, and requirements..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline">
                      Save as Draft
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Post Job
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Use AI to write</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Let our AI assistant help you write a compelling job description that attracts the right candidates.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Write with AI
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Template Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suggested Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">UI</span>
                    </div>
                    <span className="text-sm font-medium">UI Designer + User Research</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Remote • 2-3 years exp</p>
                </div>
                
                <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">FE</span>
                    </div>
                    <span className="text-sm font-medium">Frontend Developer</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Hybrid • 3-5 years exp</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobPosting;
