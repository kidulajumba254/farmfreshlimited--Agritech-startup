
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Sustainability = () => {
  const sustainabilityGoals = [
    {
      id: 1,
      title: "Carbon Footprint Reduction",
      description: "Reducing carbon emissions throughout our supply chain",
      progress: 65,
      target: "30% reduction by 2026",
      initiatives: [
        "Optimizing delivery routes to minimize fuel consumption",
        "Solar power installation at warehouses and offices",
        "Supporting farmers transitioning to climate-smart agriculture"
      ]
    },
    {
      id: 2,
      title: "Water Conservation",
      description: "Implementing water-saving practices across operations",
      progress: 72,
      target: "40% reduction in water usage by 2026",
      initiatives: [
        "Promoting drip irrigation systems for partner farmers",
        "Rainwater harvesting systems at facilities",
        "Water recycling in processing operations"
      ]
    },
    {
      id: 3,
      title: "Sustainable Packaging",
      description: "Transitioning to eco-friendly packaging solutions",
      progress: 58,
      target: "100% sustainable packaging by 2027",
      initiatives: [
        "Replacing plastic with biodegradable materials",
        "Implementing packaging return programs",
        "Reducing overall packaging volume"
      ]
    },
    {
      id: 4,
      title: "Zero Food Waste",
      description: "Eliminating food waste throughout our value chain",
      progress: 45,
      target: "90% reduction in food waste by 2026",
      initiatives: [
        "Improved demand forecasting with AI",
        "Partnerships with food banks and community organizations",
        "Converting food waste to compost for farmers"
      ]
    }
  ];

  const sustainablePractices = [
    {
      title: "Organic Farming",
      description: "Supporting chemical-free agriculture that preserves soil health and biodiversity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      )
    },
    {
      title: "Regenerative Agriculture",
      description: "Implementing practices that reverse climate change through soil regeneration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      title: "Fair Trade",
      description: "Ensuring farmers receive fair compensation for their produce",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    },
    {
      title: "Community Support",
      description: "Investing in rural communities through education and infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1601177780484-eb1a633f9050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment to Sustainability</h1>
            <p className="text-xl md:text-2xl">
              Building a resilient agricultural ecosystem that supports people and planet through sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-8">Our Sustainability Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              At FarmFresh, sustainability isn't just a goal—it's at the core of everything we do. We're committed to building an agricultural ecosystem that preserves our environment, supports our communities, and ensures food security for generations to come.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-green-600 font-bold text-4xl mb-2">50+</div>
                <div className="text-gray-600">Partner Farms Using Sustainable Methods</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold text-4xl mb-2">70%</div>
                <div className="text-gray-600">Products Grown Using Organic Practices</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold text-4xl mb-2">30%</div>
                <div className="text-gray-600">Carbon Footprint Reduction Since 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-700 mb-12 text-center">Our Sustainability Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sustainabilityGoals.map((goal) => (
              <Card key={goal.id} className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{goal.title}</h3>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-green-700">Progress</span>
                      <span className="text-sm text-gray-500">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700">Target: </span>
                    <span className="text-sm text-gray-600">{goal.target}</span>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Initiatives:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {goal.initiatives.map((initiative, index) => (
                        <li key={index} className="mb-1">{initiative}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Sustainable Practices</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              We're implementing these key practices to create a more sustainable food system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {sustainablePractices.map((practice, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-50 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  {practice.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{practice.title}</h3>
                <p className="text-gray-600">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Spotlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Farmer Spotlight</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Meet the farmers leading the way in sustainable agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?q=80&w=2574&auto=format&fit=crop" 
                  alt="John Kamau" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">John Kamau</h3>
                <p className="text-gray-500 mb-3">Kiambu County, Kenya</p>
                <p className="text-gray-600">
                  Using organic farming practices to grow vegetables while improving soil health through cover cropping and minimal tillage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1539704808496-0c77a5f76552?q=80&w=2574&auto=format&fit=crop" 
                  alt="Sarah Mwangi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Sarah Mwangi</h3>
                <p className="text-gray-500 mb-3">Nakuru County, Kenya</p>
                <p className="text-gray-600">
                  Pioneering water conservation techniques for growing drought-resistant crops in semi-arid regions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=2574&auto=format&fit=crop" 
                  alt="David Ochieng" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">David Ochieng</h3>
                <p className="text-gray-500 mb-3">Kisumu County, Kenya</p>
                <p className="text-gray-600">
                  Integrating agroforestry practices to grow fruits and vegetables while supporting biodiversity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Sustainable Journey</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Support sustainable agriculture by purchasing directly from farmers who use earth-friendly practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/marketplace" 
              className="bg-white text-green-700 hover:bg-gray-100 py-3 px-6 rounded-md font-medium text-lg"
            >
              Shop Sustainable Products
            </a>
            <a 
              href="/insights" 
              className="bg-transparent border border-white text-white hover:bg-green-600 py-3 px-6 rounded-md font-medium text-lg"
            >
              Read Our Sustainability Reports
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sustainability;
