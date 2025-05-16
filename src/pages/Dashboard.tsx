
import React from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DataInsightCard from "@/components/dashboard/DataInsightCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, Tractor, ShoppingCart, Users, Truck } from "lucide-react";

// Sample data for dashboard
const marketPriceData = [
  { date: "Jan", value: 4200 },
  { date: "Feb", value: 4450 },
  { date: "Mar", value: 4300 },
  { date: "Apr", value: 4800 },
  { date: "May", value: 5100 },
  { date: "Jun", value: 5400 },
];

const salesData = [
  { date: "Jan", value: 12000 },
  { date: "Feb", value: 18000 },
  { date: "Mar", value: 15000 },
  { date: "Apr", value: 22000 },
  { date: "May", value: 26000 },
  { date: "Jun", value: 32000 },
];

const recentOrders = [
  { id: "ORD-1234", product: "Premium Coffee Beans", date: "May 12, 2023", status: "Delivered", amount: 3200 },
  { id: "ORD-1235", product: "Organic Avocados", date: "May 14, 2023", status: "Processing", amount: 1800 },
  { id: "ORD-1236", product: "Fresh Milk", date: "May 15, 2023", status: "Shipped", amount: 980 },
  { id: "ORD-1237", product: "Macadamia Nuts", date: "May 16, 2023", status: "Processing", amount: 4500 },
];

const testimonials = [
  {
    id: 1,
    name: "James Mwangi",
    role: "CEO, Equity Bank",
    content: "FarmFresh has revolutionized how we finance agricultural projects. The transparency and data insights have helped us make better lending decisions for farmers.",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Dr. Aisha Mohammed",
    role: "Director, Kenya Agricultural Research Institute",
    content: "The data collected through FarmFresh has been invaluable for our research. We can now track crop performance across different regions in real-time.",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "John Kiprono",
    role: "CEO, Twiga Foods",
    content: "We've seen a 40% increase in our supply chain efficiency since partnering with FarmFresh. Their platform has bridged the gap between small-scale farmers and large retailers.",
    avatar: "/placeholder.svg",
  },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name || "Farmer"}!</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              + New Listing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Sales</p>
                  <h3 className="text-2xl font-bold mt-1">KES 142,500</h3>
                  <p className="text-sm font-medium text-green-600 flex items-center mt-1">
                    <ArrowUp className="h-4 w-4 mr-1" /> 23.5%
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Listings</p>
                  <h3 className="text-2xl font-bold mt-1">24</h3>
                  <p className="text-sm font-medium text-green-600 flex items-center mt-1">
                    <ArrowUp className="h-4 w-4 mr-1" /> 12.3%
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Tractor className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Customers</p>
                  <h3 className="text-2xl font-bold mt-1">354</h3>
                  <p className="text-sm font-medium text-green-600 flex items-center mt-1">
                    <ArrowUp className="h-4 w-4 mr-1" /> 18.2%
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Pending Orders</p>
                  <h3 className="text-2xl font-bold mt-1">12</h3>
                  <p className="text-sm font-medium text-yellow-600 flex items-center mt-1">
                    <Truck className="h-4 w-4 mr-1" /> Active
                  </p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DataInsightCard
            title="Average Market Price (KES/kg)"
            data={marketPriceData}
            currentValue={5400}
            percentageChange={12.5}
            timeframe="vs last month"
            valuePrefix="KES "
          />

          <DataInsightCard
            title="Monthly Sales"
            data={salesData}
            currentValue={32000}
            percentageChange={23.1}
            timeframe="vs last month"
            valuePrefix="KES "
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your most recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <th className="px-4 py-2">Order ID</th>
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{order.id}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{order.product}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{order.date}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">KES {order.amount.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Industry Leaders Say</CardTitle>
              <CardDescription>Testimonials from Kenya's business leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 italic mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                        <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
