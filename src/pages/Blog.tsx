
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock blog posts
const blogPosts = [
  {
    id: "blog-1",
    title: "Sustainable Farming Practices in Kenya",
    excerpt: "Learn about how Kenyan farmers are adopting sustainable practices to combat climate change while improving yields.",
    author: "Jane Wangari",
    date: "May 12, 2025",
    category: "Sustainability",
    image: "/placeholder.svg",
  },
  {
    id: "blog-2",
    title: "The Future of Agriculture Technology in East Africa",
    excerpt: "How modern technology is transforming farming across East Africa and creating new opportunities for small-scale farmers.",
    author: "David Kimani",
    date: "May 5, 2025",
    category: "Technology",
    image: "/placeholder.svg",
  },
  {
    id: "blog-3",
    title: "Seasonal Produce Guide: What to Buy This Month",
    excerpt: "A comprehensive guide to the fruits and vegetables that are in season right now in Kenya, and how to use them in your cooking.",
    author: "Sarah Ochieng",
    date: "April 28, 2025",
    category: "Food Guide",
    image: "/placeholder.svg",
  },
  {
    id: "blog-4",
    title: "Supporting Local: Why Buying from Kenyan Farmers Matters",
    excerpt: "The economic and environmental impact of choosing locally-grown produce over imported alternatives.",
    author: "John Mwangi",
    date: "April 20, 2025",
    category: "Community",
    image: "/placeholder.svg",
  },
  {
    id: "blog-5",
    title: "Cooking with Indigenous Vegetables: Recipes and Health Benefits",
    excerpt: "Rediscover traditional Kenyan vegetables and their impressive nutritional profiles, with easy recipes to try at home.",
    author: "Mary Njeri",
    date: "April 15, 2025",
    category: "Food & Health",
    image: "/placeholder.svg",
  },
  {
    id: "blog-6",
    title: "Urban Farming: Growing Food in Nairobi's Limited Spaces",
    excerpt: "Tips and success stories from urban farmers who are producing food in small spaces across Nairobi and other Kenyan cities.",
    author: "Peter Odhiambo",
    date: "April 8, 2025",
    category: "Urban Farming",
    image: "/placeholder.svg",
  }
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Farm Fresh Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and stories from Kenya's agricultural community. Learn about sustainable farming, discover seasonal recipes, and stay updated on the latest farming innovations.
          </p>
        </div>

        {/* Featured post */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img src="/placeholder.svg" alt="Featured post" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 mb-2">Featured</Badge>
                  <h2 className="text-2xl font-bold mb-2">Rising Stars: Young Kenyan Farmers Transforming Agriculture</h2>
                  <p className="text-gray-600 mb-4">
                    Meet the new generation of farmers who are combining traditional knowledge with modern techniques to build sustainable and profitable agricultural businesses across Kenya.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>By Esther Kamau</span>
                    <span className="mx-2">•</span>
                    <span>May 15, 2025</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 self-start" asChild>
                  <Link to="/blog/featured-post">Read More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <Badge className="absolute top-2 right-2 bg-green-600">{post.category}</Badge>
              </div>
              <CardContent className="p-5">
                <div className="text-xs text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between">
                <div className="text-sm">By {post.author}</div>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="bg-green-50 p-8 rounded-lg my-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with our latest articles, farming tips, and seasonal produce guides.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
