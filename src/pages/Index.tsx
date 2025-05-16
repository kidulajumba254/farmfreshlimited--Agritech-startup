
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Connect Farm to Table With AgriConnect
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                An interactive marketplace bringing together producers, suppliers, and consumers for a sustainable agricultural ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-700" size="lg" asChild>
                  <Link to="/marketplace">Browse Products</Link>
                </Button>
                {!isAuthenticated && (
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/signup">Join Our Community</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="/placeholder.svg"
                alt="Farm fresh produce"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">How AgriConnect Works</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Our platform connects all stakeholders in the agricultural supply chain,
              creating value for everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Producers</h3>
              <p className="text-gray-600">
                List your products, connect with suppliers and customers, and get insights on market demands to optimize your production.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Suppliers</h3>
              <p className="text-gray-600">
                Source products directly from farmers, manage logistics more efficiently, and expand your network of clients.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Consumers</h3>
              <p className="text-gray-600">
                Access fresh, sustainable products directly from local farmers, with full transparency on the origin and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Platform Features</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              AgriConnect offers innovative tools and features designed to enhance the agricultural experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-green-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Communication</h3>
                <p className="text-gray-600">
                  Real-time messaging system that connects producers, suppliers, and consumers for seamless communication.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-green-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Analytics</h3>
                <p className="text-gray-600">
                  Data-driven insights into market trends, consumer preferences, and pricing to help stakeholders make informed decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-green-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
                <p className="text-gray-600">
                  Smart product recommendations based on consumer preferences, seasonal availability, and market conditions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-green-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reviews & Transparency</h3>
                <p className="text-gray-600">
                  Honest reviews and ratings system for products and services, fostering trust and transparency in the marketplace.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-green-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Supply Chain Integration</h3>
                <p className="text-gray-600">
                  Seamless integration with existing supply chain systems for end-to-end tracking of agricultural products.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-green-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive data collection and analysis to drive business decisions and identify market opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Success Stories</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              See how our platform has helped producers, suppliers, and consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-gray-600 italic mb-4">
                "AgriConnect has transformed how we sell our organic produce. We now have direct access to customers and can adjust our growing plans based on real market data."
              </p>
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 w-10 h-10 flex items-center justify-center text-green-700 font-bold mr-3">
                  MF
                </div>
                <div>
                  <p className="font-medium">Maria Fernandez</p>
                  <p className="text-sm text-gray-500">Small-scale Organic Farmer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-gray-600 italic mb-4">
                "As a restaurant supplier, I can now source directly from farms and provide full traceability to my clients. The communication features save me hours of phone calls every week."
              </p>
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 w-10 h-10 flex items-center justify-center text-green-700 font-bold mr-3">
                  JT
                </div>
                <div>
                  <p className="font-medium">James Thompson</p>
                  <p className="text-sm text-gray-500">Restaurant Supplier</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-gray-600 italic mb-4">
                "I love being able to order fresh produce directly from local farms while understanding exactly where my food comes from. The quality is unmatched!"
              </p>
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 w-10 h-10 flex items-center justify-center text-green-700 font-bold mr-3">
                  SK
                </div>
                <div>
                  <p className="font-medium">Sarah Kim</p>
                  <p className="text-sm text-gray-500">Consumer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the AgriConnect Community Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a producer, supplier, or consumer, we have tools and features designed to meet your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link to="/marketplace">Browse Marketplace</Link>
            </Button>
            {!isAuthenticated && (
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
