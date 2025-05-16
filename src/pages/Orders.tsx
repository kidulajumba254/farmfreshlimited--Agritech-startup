
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample order data
const orders = [
  {
    id: "ORD-1234",
    date: "May 12, 2023",
    status: "Delivered",
    total: 3200,
    items: [
      { id: 1, name: "Premium Coffee Beans", quantity: 4, price: 800, image: "/placeholder.svg" }
    ],
    paymentMethod: "M-Pesa",
    paymentStatus: "Paid",
    shippingAddress: "123 Moi Avenue, Nairobi",
    deliveryDate: "May 15, 2023",
    seller: {
      name: "Nyeri Coffee Cooperative",
      id: "PROD-123",
      rating: 4.8
    }
  },
  {
    id: "ORD-1235",
    date: "May 14, 2023",
    status: "Processing",
    total: 1800,
    items: [
      { id: 2, name: "Organic Avocados", quantity: 12, price: 150, image: "/placeholder.svg" }
    ],
    paymentMethod: "Bank Transfer",
    paymentStatus: "Paid",
    shippingAddress: "456 Kimathi Street, Nairobi",
    deliveryDate: "May 18, 2023 (Expected)",
    seller: {
      name: "Muranga Farmers Association",
      id: "PROD-124",
      rating: 4.6
    }
  },
  {
    id: "ORD-1236",
    date: "May 15, 2023",
    status: "Shipped",
    total: 980,
    items: [
      { id: 3, name: "Fresh Milk", quantity: 2, price: 140, image: "/placeholder.svg" },
      { id: 4, name: "Farm Fresh Eggs", quantity: 5, price: 140, image: "/placeholder.svg" }
    ],
    paymentMethod: "M-Pesa",
    paymentStatus: "Paid",
    shippingAddress: "789 Karen Road, Nairobi",
    deliveryDate: "May 17, 2023 (Expected)",
    seller: {
      name: "Kiambu Dairy Cooperative",
      id: "PROD-125",
      rating: 4.9
    }
  },
  {
    id: "ORD-1237",
    date: "May 16, 2023",
    status: "Processing",
    total: 4500,
    items: [
      { id: 5, name: "Macadamia Nuts", quantity: 3, price: 1500, image: "/placeholder.svg" }
    ],
    paymentMethod: "Bank Transfer",
    paymentStatus: "Pending",
    shippingAddress: "101 Ngong Road, Nairobi",
    deliveryDate: "May 21, 2023 (Expected)",
    seller: {
      name: "Thika Nut Processors",
      id: "PROD-126",
      rating: 4.7
    }
  },
  {
    id: "ORD-1238",
    date: "May 18, 2023",
    status: "Cancelled",
    total: 2800,
    items: [
      { id: 6, name: "Organic Honey", quantity: 2, price: 1400, image: "/placeholder.svg" }
    ],
    paymentMethod: "M-Pesa",
    paymentStatus: "Refunded",
    shippingAddress: "222 Waiyaki Way, Nairobi",
    deliveryDate: "Cancelled",
    seller: {
      name: "Mount Kenya Apiaries",
      id: "PROD-127",
      rating: 4.5
    }
  }
];

const Orders: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);
  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filterByStatus = (status: string) => {
    return filteredOrders.filter(order => 
      status === "all" ? true : order.status.toLowerCase() === status.toLowerCase()
    );
  };

  const viewOrderDetails = (order: typeof orders[0]) => {
    setSelectedOrder(order);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">My Orders</h1>
            <p className="text-gray-600">Track and manage your orders</p>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search orders by ID or product..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-5 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>
              
              {["all", "processing", "shipped", "delivered", "cancelled"].map((status) => (
                <TabsContent key={status} value={status} className="m-0 p-6">
                  {filterByStatus(status).length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No {status !== "all" ? status : ""} orders found</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filterByStatus(status).map((order) => (
                        <div 
                          key={order.id} 
                          className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors cursor-pointer"
                          onClick={() => viewOrderDetails(order)}
                        >
                          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                            <div className="mb-2 md:mb-0">
                              <h3 className="font-medium">{order.id}</h3>
                              <p className="text-sm text-gray-500">Ordered on {order.date}</p>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                              <span className={`px-3 py-1 text-xs rounded-full ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                              <span className="text-sm font-medium mt-2 md:mt-0">KES {order.total.toLocaleString()}</span>
                            </div>
                          </div>
                          
                          <div className="border-t pt-4">
                            <div className="flex flex-wrap gap-4">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex items-center">
                                  <div className="w-12 h-12 rounded bg-gray-100 mr-3 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">{item.name}</p>
                                    <p className="text-xs text-gray-500">Qty: {item.quantity} × KES {item.price}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {selectedOrder && (
          <Card>
            <CardHeader className="border-b">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <CardTitle>Order Details: {selectedOrder.id}</CardTitle>
                  <CardDescription>Placed on {selectedOrder.date}</CardDescription>
                </div>
                <span className={`mt-2 md:mt-0 px-3 py-1 text-xs rounded-full inline-block ${
                  selectedOrder.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                  selectedOrder.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                  selectedOrder.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {selectedOrder.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-4">Items</h3>
                  <div className="space-y-4">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="flex border-b pb-4">
                        <div className="w-16 h-16 rounded bg-gray-100 mr-4 overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          <p className="text-sm text-gray-500">Price per unit: KES {item.price}</p>
                          <p className="text-sm font-medium">Subtotal: KES {(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <h3 className="font-medium mb-4">Seller Information</h3>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback className="bg-green-100 text-green-800">
                          {selectedOrder.seller.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{selectedOrder.seller.name}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(selectedOrder.seller.rating)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-1">
                            {selectedOrder.seller.rating}
                          </span>
                        </div>
                        <div className="mt-2">
                          <Button variant="outline" size="sm">
                            Contact Seller
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Order Summary</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span>KES {selectedOrder.total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Shipping</span>
                        <span>KES 350</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-200 font-medium">
                        <span>Total</span>
                        <span>KES {(selectedOrder.total + 350).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Payment Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Payment Method</span>
                        <span>{selectedOrder.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Payment Status</span>
                        <span className={`${
                          selectedOrder.paymentStatus === 'Paid' ? 'text-green-600' :
                          selectedOrder.paymentStatus === 'Refunded' ? 'text-blue-600' :
                          'text-yellow-600'
                        }`}>
                          {selectedOrder.paymentStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Shipping Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="mb-2">
                        <span className="text-gray-600 block mb-1">Delivery Address</span>
                        <span>{selectedOrder.shippingAddress}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-gray-600 block mb-1">Delivery Date</span>
                        <span>{selectedOrder.deliveryDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    {selectedOrder.status === 'Delivered' && (
                      <Button className="bg-green-600 hover:bg-green-700">
                        Write a Review
                      </Button>
                    )}
                    {(selectedOrder.status === 'Processing' || selectedOrder.status === 'Shipped') && (
                      <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                        Cancel Order
                      </Button>
                    )}
                    <Button variant="outline">
                      Download Invoice
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Orders;
