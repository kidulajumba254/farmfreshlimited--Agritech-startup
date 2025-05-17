
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Search, MapPin, Clock, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Job listings data
const jobListings = [
  {
    id: "job1",
    title: "Agricultural Data Analyst",
    department: "Technology",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Analyze agricultural data to provide insights for farmers and stakeholders.",
    featured: true,
    remote: false,
  },
  {
    id: "job2",
    title: "Supply Chain Manager",
    department: "Operations",
    location: "Nakuru, Kenya",
    type: "Full-time",
    description: "Oversee the agricultural supply chain from producers to consumers.",
    featured: true,
    remote: false,
  },
  {
    id: "job3",
    title: "Farmer Relations Specialist",
    department: "Community Engagement",
    location: "Eldoret, Kenya",
    type: "Full-time",
    description: "Build and maintain relationships with our network of farmers.",
    featured: false,
    remote: false,
  },
  {
    id: "job4",
    title: "Mobile App Developer",
    department: "Technology",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Develop and maintain our mobile applications for farmers and consumers.",
    featured: false,
    remote: true,
  },
  {
    id: "job5",
    title: "Agronomy Consultant",
    department: "Advisory Services",
    location: "Kisumu, Kenya",
    type: "Part-time",
    description: "Provide expert advice to farmers on crop management and agricultural practices.",
    featured: false,
    remote: true,
  },
  {
    id: "job6",
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Mombasa, Kenya",
    type: "Full-time",
    description: "Coordinate marketing campaigns and communications for FarmFresh.",
    featured: false,
    remote: false,
  },
  {
    id: "job7",
    title: "Logistics Coordinator",
    department: "Operations",
    location: "Thika, Kenya",
    type: "Full-time",
    description: "Coordinate logistics for product delivery and transportation.",
    featured: false,
    remote: false,
  },
  {
    id: "job8",
    title: "UI/UX Designer",
    department: "Technology",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Design user-friendly interfaces for our web and mobile platforms.",
    featured: false,
    remote: true,
  },
  {
    id: "job9",
    title: "Financial Analyst",
    department: "Finance",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Analyze financial data and prepare reports for management and stakeholders.",
    featured: false,
    remote: false,
  },
  {
    id: "job10",
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Remote, Kenya",
    type: "Full-time",
    description: "Provide support to farmers and consumers using our platform.",
    featured: false,
    remote: true,
  },
];

// Departments data
const departments = [
  {
    id: "all",
    name: "All Departments",
  },
  {
    id: "technology",
    name: "Technology",
  },
  {
    id: "operations",
    name: "Operations",
  },
  {
    id: "community",
    name: "Community Engagement",
  },
  {
    id: "advisory",
    name: "Advisory Services",
  },
  {
    id: "marketing",
    name: "Marketing",
  },
  {
    id: "finance",
    name: "Finance",
  },
  {
    id: "customer",
    name: "Customer Service",
  },
];

// Filter featured jobs
const featuredJobs = jobListings.filter(job => job.featured);

const Careers: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRemote, setFilterRemote] = useState(false);
  const [applyingToJob, setApplyingToJob] = useState<string | null>(null);
  const { toast } = useToast();

  // Filter jobs based on department, search query, and remote filter
  const filteredJobs = jobListings.filter(job => {
    // Filter by department
    if (activeDepartment !== "all" && job.department.toLowerCase() !== departments.find(d => d.id === activeDepartment)?.name.toLowerCase()) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && !job.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by remote option
    if (filterRemote && !job.remote) {
      return false;
    }
    
    return true;
  });

  const handleApply = (jobId: string, jobTitle: string) => {
    setApplyingToJob(jobId);
    
    // Simulate an application process with a delay
    setTimeout(() => {
      setApplyingToJob(null);
      toast({
        title: "Application Submitted",
        description: `Your application for ${jobTitle} has been received. We'll be in touch soon!`,
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Help us transform Kenya's agricultural ecosystem by connecting farmers, suppliers, and consumers.
          </p>
          <Button 
            className="text-green-700 bg-white hover:bg-gray-100 text-lg px-8 py-6"
            asChild
          >
            <a href="#open-positions">View Open Positions</a>
          </Button>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Our Culture</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              At FarmFresh, we believe in innovation, sustainability, and building lasting relationships with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M12 2v2"/>
                    <path d="M12 14v8"/>
                    <path d="M16 4l-4 4-4-4"/>
                    <path d="M17.5 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
                    <path d="M5 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and innovative solutions to agricultural challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Connection</h3>
                <p className="text-gray-600">
                  We build meaningful connections between farmers, suppliers, and consumers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="m2 22 1-1h3l9-9"/>
                    <path d="M3 21v-3l9-9"/>
                    <path d="m15 6 3-3 3 3-3 3Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to sustainable agricultural practices and environmental stewardship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Benefits of Working With Us</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Join our team and enjoy a range of benefits designed to support your well-being and professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="text-green-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                  <path d="M3 15v4a2 2 0 0 0 2 2h16v-6"/>
                  <path d="M18 3v16"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Salary</h3>
              <p className="text-gray-600">We offer competitive compensation packages aligned with industry standards.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="text-green-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 7h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"/>
                  <path d="M12 12v7"/>
                  <path d="M8 12h8"/>
                  <path d="M16 17h-4"/>
                  <path d="M8.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM3.5 12.5V7a2.5 2.5 0 0 1 5 0v5.5a2.5 2.5 0 0 1-5 0Z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Health Insurance</h3>
              <p className="text-gray-600">Comprehensive health coverage for you and your dependents.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="text-green-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Learning Opportunities</h3>
              <p className="text-gray-600">Continuous professional development and educational opportunities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="text-green-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/>
                  <path d="M12 3a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2Z"/>
                  <path d="m12 13-1.986-1.986A2 2 0 0 1 12 8.1a2 2 0 0 1 1.986 2.914L12 13Z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Work</h3>
              <p className="text-gray-600">Flexible work arrangements to help you maintain work-life balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      {featuredJobs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700">Featured Opportunities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">Featured</Badge>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{job.description}</p>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 transition-all w-full sm:w-auto"
                      onClick={() => handleApply(job.id, job.title)}
                      disabled={applyingToJob === job.id}
                    >
                      {applyingToJob === job.id ? "Applying..." : "Apply Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Open Positions</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Join our team and help transform the agricultural ecosystem.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search positions..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remoteFilter"
                  checked={filterRemote}
                  onChange={() => setFilterRemote(!filterRemote)}
                  className="rounded text-green-600"
                />
                <label htmlFor="remoteFilter" className="text-gray-600">Remote only</label>
              </div>
            </div>
          </div>

          <Tabs 
            defaultValue={activeDepartment} 
            value={activeDepartment} 
            onValueChange={setActiveDepartment}
            className="w-full"
          >
            <div className="flex justify-center mb-8 overflow-x-auto scrollbar-hide">
              <TabsList>
                {departments.map((department) => (
                  <TabsTrigger key={department.id} value={department.id}>
                    {department.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {departments.map((department) => (
              <TabsContent key={department.id} value={department.id}>
                {filteredJobs.length > 0 ? (
                  <div className="space-y-6">
                    {filteredJobs.map((job) => (
                      <Card key={job.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="md:flex md:justify-between md:items-center">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Briefcase className="h-4 w-4" /> {job.department}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" /> {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" /> {job.type}
                                </span>
                              </div>
                            </div>
                            <Button 
                              className="bg-green-600 hover:bg-green-700 transition-all w-full sm:w-auto mt-4 md:mt-0"
                              onClick={() => handleApply(job.id, job.title)}
                              disabled={applyingToJob === job.id}
                            >
                              {applyingToJob === job.id ? "Applying..." : "Apply Now"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600">No positions currently available in this department.</p>
                    <Button
                      className="mt-4 bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        setActiveDepartment('all');
                        setSearchQuery('');
                        setFilterRemote(false);
                      }}
                    >
                      View All Positions
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Our Recruitment Process</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Learn about our hiring process and what to expect when applying to FarmFresh.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Application Review</h3>
                    <p className="text-gray-600">Our recruitment team carefully reviews all applications.</p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold z-10">1</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1"></div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold z-10">2</div>
                  <div className="flex-1 md:pl-8 md:order-2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Initial Interview</h3>
                    <p className="text-gray-600">Selected candidates are invited for an initial conversation.</p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills Assessment</h3>
                    <p className="text-gray-600">Depending on the role, you may be asked to complete a skills assessment.</p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold z-10">3</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1"></div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold z-10">4</div>
                  <div className="flex-1 md:pl-8 md:order-2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Final Interview</h3>
                    <p className="text-gray-600">Meet with team leaders and potential colleagues.</p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-600">Successful candidates receive an offer and start their onboarding journey.</p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold z-10">5</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Explore our open positions and take the first step towards a rewarding career at FarmFresh.
          </p>
          <Button 
            className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6"
            asChild
          >
            <a href="#open-positions">Browse Open Positions</a>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
