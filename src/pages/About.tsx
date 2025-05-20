
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="bg-green-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Our Mission to Transform Agriculture</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Connecting Kenyan farmers directly to consumers, removing middlemen, 
              and ensuring fresh, affordable produce for all while supporting sustainable farming practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link to="/marketplace">Shop Our Products</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Farm Fresh was founded in 2020 with a simple idea: to create a direct link between Kenyan farmers and consumers. 
                Our founder, Jane Muthoni, grew up in a farming family in Nyeri County and witnessed firsthand the challenges 
                farmers face in getting fair prices for their produce.
              </p>
              <p className="text-gray-700 mb-4">
                After studying agricultural economics at the University of Nairobi, Jane set out to build a platform that 
                would empower farmers while providing consumers with fresh, high-quality produce at reasonable prices. 
                What started as a small operation serving just Nairobi has now grown to connect over 5,000 farmers with 
                customers across Kenya.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be Kenya's leading farm-to-table marketplace, supporting sustainable agriculture and 
                helping to build a more resilient food system for our country.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Farm Fresh founder" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Sustainability</h3>
                  <p className="text-gray-600 text-center">
                    We promote farming practices that respect the environment and ensure long-term food security for future generations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Fairness</h3>
                  <p className="text-gray-600 text-center">
                    We believe in fair compensation for farmers and affordable prices for consumers, creating a balanced ecosystem.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Transparency</h3>
                  <p className="text-gray-600 text-center">
                    We provide complete visibility into our supply chain, ensuring consumers know exactly where their food comes from.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Jane Muthoni", 
                role: "Founder & CEO", 
                image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              },
              { 
                name: "John Kamau", 
                role: "Chief Operating Officer", 
                image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              },
              { 
                name: "Sarah Odhiambo", 
                role: "Head of Farmer Relations", 
                image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              },
              { 
                name: "David Njoroge", 
                role: "Chief Technology Officer", 
                image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square relative rounded-full overflow-hidden mb-4 max-w-[200px] mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
                <p className="text-lg text-gray-700">Farmers Supported</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                <p className="text-lg text-gray-700">Average Increase in Farmer Income</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">100,000+</div>
                <p className="text-lg text-gray-700">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our mission, operations, or how to get involved? We'd love to hear from you.
            </p>
            <Button className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
