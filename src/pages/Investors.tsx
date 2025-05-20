
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, ChevronRight, LineChart, Percent, Shield, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Types for investors data
interface InvestorOpportunity {
  id: string;
  name: string;
  category: string;
  location: string;
  fundingGoal: number;
  fundingRaised: number;
  roi: string;
  duration: string;
  risk: 'Low' | 'Medium' | 'High';
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface InvestorUpdate {
  date: string;
  title: string;
  content: string;
}

// Sample data
const opportunities: InvestorOpportunity[] = [
  {
    id: "inv-001",
    name: "Organic Coffee Cooperative",
    category: "Producer",
    location: "Nyeri, Kenya",
    fundingGoal: 75000,
    fundingRaised: 42000,
    roi: "16-22%",
    duration: "36 months",
    risk: "Medium",
    description: "Expand facilities for the cooperative of 230+ small-scale organic coffee farmers in Nyeri County. Funds will be used to purchase new processing equipment and expand production capacity."
  },
  {
    id: "inv-002",
    name: "Farm-to-Market Logistics Network",
    category: "Supply Chain",
    location: "Nairobi & Central Kenya",
    fundingGoal: 150000,
    fundingRaised: 68000,
    roi: "18-25%",
    duration: "48 months",
    risk: "Medium",
    description: "Development of a cold chain logistics network connecting rural farms to urban markets, reducing post-harvest losses by up to 40% and increasing farmer income by up to 25%."
  },
  {
    id: "inv-003",
    name: "Avocado Processing Facility",
    category: "Value Addition",
    location: "Murang'a, Kenya",
    fundingGoal: 250000,
    fundingRaised: 195000,
    roi: "20-30%",
    duration: "60 months",
    risk: "Low",
    description: "Establish a state-of-the-art facility for processing Hass avocados into oil and other value-added products for domestic and export markets, working with 1,500+ smallholder farmers."
  },
  {
    id: "inv-004",
    name: "Agricultural Technology Incubator",
    category: "Technology",
    location: "Nairobi, Kenya",
    fundingGoal: 350000,
    fundingRaised: 110000,
    roi: "25-40%",
    duration: "60 months",
    risk: "High",
    description: "Funding for agritech startups developing innovative solutions for smallholder farmers, including IoT sensors, mobile applications, and data analytics platforms."
  }
];

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jane Wambui",
    role: "Chief Executive Officer",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Ochieng",
    role: "Chief Financial Officer",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Sarah Kimani",
    role: "Head of Agricultural Research",
    image: "/placeholder.svg"
  },
  {
    name: "David Mutua",
    role: "Director of Operations",
    image: "/placeholder.svg"
  }
];

const investorUpdates: InvestorUpdate[] = [
  {
    date: "May 15, 2025",
    title: "Q1 2025 Investor Report Released",
    content: "Our Q1 2025 report shows 28% growth in marketplace transactions and 15% increase in registered farmers compared to Q4 2024."
  },
  {
    date: "April 3, 2025",
    title: "FarmFresh Secures $2.5M Series A Funding",
    content: "We're excited to announce our Series A funding round led by Acumen Fund and DOB Equity to accelerate our growth across East Africa."
  },
  {
    date: "March 10, 2025",
    title: "New Partnership with Kenya Agriculture Board",
    content: "Strategic partnership formed with the Kenya Agriculture Board to expand our reach to 15 new counties."
  }
];

const Investors: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-green-50 to-white pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Invest in Kenya's Agricultural Future</h1>
            <p className="text-lg text-gray-600 mb-8">
              Join us in transforming Kenya's agricultural sector through strategic investments in producers, 
              supply chains, and agricultural technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explore Opportunities
              </Button>
              <Button size="lg" variant="outline">
                Investor Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Invest With FarmFresh</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We connect investors with vetted opportunities across Kenya's agricultural value chain, 
              providing transparent reporting and measurable impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Percent className="h-6 w-6 text-green-700" />
                </div>
                <CardTitle className="text-xl">Competitive Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Our investment opportunities provide 15-30% annual returns while supporting sustainable agricultural growth.</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-xl">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We carefully vet all opportunities and employ risk-sharing mechanisms to protect investor capital.</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-purple-700" />
                </div>
                <CardTitle className="text-xl">Positive Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your investment creates measurable social and environmental impact, improving livelihoods across Kenya.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Current Investment Opportunities</h2>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Opportunities <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
              <TabsTrigger value="producer" className="flex-1">Producer</TabsTrigger>
              <TabsTrigger value="supplychain" className="flex-1">Supply Chain</TabsTrigger>
              <TabsTrigger value="tech" className="flex-1">Technology</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {opportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="overflow-hidden border-green-100 hover:border-green-300 transition duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{opportunity.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Briefcase className="h-4 w-4 mr-1 text-gray-500" /> 
                            {opportunity.category} • {opportunity.location}
                          </CardDescription>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          opportunity.risk === 'Low' ? 'bg-green-100 text-green-800' :
                          opportunity.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {opportunity.risk} Risk
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">{opportunity.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Funding Progress</span>
                            <span className="font-medium">
                              {Math.round((opportunity.fundingRaised / opportunity.fundingGoal) * 100)}%
                            </span>
                          </div>
                          <Progress value={(opportunity.fundingRaised / opportunity.fundingGoal) * 100} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <p className="text-gray-500">Target ROI</p>
                            <p className="font-medium">{opportunity.roi}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Duration</p>
                            <p className="font-medium">{opportunity.duration}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Funding Goal</p>
                            <p className="font-medium">KES {opportunity.fundingGoal.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="producer" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {opportunities
                  .filter(opp => opp.category === "Producer")
                  .map((opportunity) => (
                    // Same card component as in "all" tab
                    <Card key={opportunity.id} className="overflow-hidden border-green-100 hover:border-green-300 transition duration-300">
                      {/* Same card content from above */}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{opportunity.name}</CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <Briefcase className="h-4 w-4 mr-1 text-gray-500" /> 
                              {opportunity.category} • {opportunity.location}
                            </CardDescription>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            opportunity.risk === 'Low' ? 'bg-green-100 text-green-800' :
                            opportunity.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {opportunity.risk} Risk
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{opportunity.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Funding Progress</span>
                              <span className="font-medium">
                                {Math.round((opportunity.fundingRaised / opportunity.fundingGoal) * 100)}%
                              </span>
                            </div>
                            <Progress value={(opportunity.fundingRaised / opportunity.fundingGoal) * 100} className="h-2" />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <p className="text-gray-500">Target ROI</p>
                              <p className="font-medium">{opportunity.roi}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Duration</p>
                              <p className="font-medium">{opportunity.duration}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Funding Goal</p>
                              <p className="font-medium">KES {opportunity.fundingGoal.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Add similar TabsContent for other categories - supplychain & tech */}
            <TabsContent value="supplychain" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {opportunities
                  .filter(opp => opp.category === "Supply Chain")
                  .map((opportunity) => (
                    // Same card structure as above
                    <Card key={opportunity.id} className="overflow-hidden border-green-100 hover:border-green-300 transition duration-300">
                      {/* Same card content from above */}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{opportunity.name}</CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <Briefcase className="h-4 w-4 mr-1 text-gray-500" /> 
                              {opportunity.category} • {opportunity.location}
                            </CardDescription>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            opportunity.risk === 'Low' ? 'bg-green-100 text-green-800' :
                            opportunity.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {opportunity.risk} Risk
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{opportunity.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Funding Progress</span>
                              <span className="font-medium">
                                {Math.round((opportunity.fundingRaised / opportunity.fundingGoal) * 100)}%
                              </span>
                            </div>
                            <Progress value={(opportunity.fundingRaised / opportunity.fundingGoal) * 100} className="h-2" />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <p className="text-gray-500">Target ROI</p>
                              <p className="font-medium">{opportunity.roi}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Duration</p>
                              <p className="font-medium">{opportunity.duration}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Funding Goal</p>
                              <p className="font-medium">KES {opportunity.fundingGoal.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tech" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {opportunities
                  .filter(opp => opp.category === "Technology")
                  .map((opportunity) => (
                    // Same card structure as above
                    <Card key={opportunity.id} className="overflow-hidden border-green-100 hover:border-green-300 transition duration-300">
                      {/* Same card content from above */}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{opportunity.name}</CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <Briefcase className="h-4 w-4 mr-1 text-gray-500" /> 
                              {opportunity.category} • {opportunity.location}
                            </CardDescription>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            opportunity.risk === 'Low' ? 'bg-green-100 text-green-800' :
                            opportunity.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {opportunity.risk} Risk
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{opportunity.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Funding Progress</span>
                              <span className="font-medium">
                                {Math.round((opportunity.fundingRaised / opportunity.fundingGoal) * 100)}%
                              </span>
                            </div>
                            <Progress value={(opportunity.fundingRaised / opportunity.fundingGoal) * 100} className="h-2" />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <p className="text-gray-500">Target ROI</p>
                              <p className="font-medium">{opportunity.roi}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Duration</p>
                              <p className="font-medium">{opportunity.duration}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Funding Goal</p>
                              <p className="font-medium">KES {opportunity.fundingGoal.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-gray-600 mb-8">
                Our experienced team brings together expertise in agriculture, finance, and technology 
                to identify and develop high-potential investment opportunities across Kenya's 
                agricultural sector.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg border-green-100">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Investor Updates</h2>
              <div className="space-y-6">
                {investorUpdates.map((update, index) => (
                  <Card key={index} className="border-green-100">
                    <CardHeader className="pb-2">
                      <CardDescription>{update.date}</CardDescription>
                      <CardTitle className="text-lg">{update.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{update.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="mt-6">
                View All Updates <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest in Kenya's Agricultural Future?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Join our growing community of investors who are generating returns while 
            making a positive impact on Kenya's agricultural sector.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Create Investor Account
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Investors;
