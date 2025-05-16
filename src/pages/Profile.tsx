
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/components/ui/sonner";

const Profile: React.FC = () => {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || "John Kamau",
    email: user?.email || "john.kamau@example.com",
    phone: "+254 712 345 678",
    location: "Nairobi, Kenya",
    bio: "I'm a small-scale farmer specializing in organic vegetables and fruits. I've been farming for over 10 years in the fertile highlands of Central Kenya.",
  });

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "mpesa", number: "0712 345 678", primary: true },
    { id: 2, type: "bank", name: "Equity Bank", accountNumber: "1234567890", primary: false },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  const setPrimaryPayment = (id: number) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        primary: method.id === id,
      }))
    );
    toast.success("Primary payment method updated!");
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="" alt={formData.name} />
                    <AvatarFallback className="bg-green-100 text-green-800 text-xl">
                      {formData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{formData.name}</h2>
                  <p className="text-gray-500 mb-4">{formData.location}</p>
                  <p className="text-sm text-gray-600 mb-4">{formData.bio}</p>
                  <Button variant="outline" size="sm">
                    Change Profile Picture
                  </Button>
                </div>

                <div className="mt-8 border-t pt-6">
                  <h3 className="font-medium mb-4">Account Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Email</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Phone</span>
                      <span>{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Member Since</span>
                      <span>May 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Account Type</span>
                      <span>Producer</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="personal">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <Input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows={4}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit" className="bg-green-600 hover:bg-green-700">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`border ${
                            method.primary ? "border-green-500" : "border-gray-200"
                          } rounded-lg p-4 relative`}
                        >
                          {method.primary && (
                            <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full">
                              Primary
                            </span>
                          )}

                          <div className="flex items-center">
                            <div className="mr-4">
                              {method.type === "mpesa" ? (
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                  <span className="text-green-600 font-bold">M</span>
                                </div>
                              ) : (
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 font-bold">B</span>
                                </div>
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">
                                {method.type === "mpesa" ? "M-Pesa" : method.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {method.type === "mpesa"
                                  ? `Phone: ${method.number}`
                                  : `Account: ${method.accountNumber}`}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 flex space-x-2 justify-end">
                            {!method.primary && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setPrimaryPayment(method.id)}
                              >
                                Set as Primary
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium mb-4">Add New Payment Method</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-green-500 cursor-pointer">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-green-600 font-bold">M</span>
                          </div>
                          <h4 className="font-medium">M-Pesa</h4>
                          <p className="text-sm text-gray-500">Add M-Pesa as payment method</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 cursor-pointer">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-blue-600 font-bold">B</span>
                          </div>
                          <h4 className="font-medium">Bank Account</h4>
                          <p className="text-sm text-gray-500">Add bank account for payments</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="font-medium mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                          <Input type="password" className="w-full" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                          <Input type="password" className="w-full" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                          <Input type="password" className="w-full" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button className="bg-green-600 hover:bg-green-700">
                          Update Password
                        </Button>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Add an extra layer of security to your account by enabling two-factor authentication.
                      </p>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
