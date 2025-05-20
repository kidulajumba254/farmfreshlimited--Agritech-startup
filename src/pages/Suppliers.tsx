
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Package, Package2, PackageCheck, Truck, Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Sample suppliers data
const suppliers = [
  {
    id: "1",
    name: "Maasai Logistics",
    location: "Nairobi",
    rating: 4.8,
    services: ["Transportation", "Storage"],
    image: "https://images.unsplash.com/photo-1581084325183-c8f3bd0d00be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Specializing in cold-chain logistics for agricultural products across Kenya.",
    verified: true
  },
  {
    id: "2",
    name: "Kenya Packaging Solutions",
    location: "Mombasa",
    rating: 4.6,
    services: ["Packaging", "Labeling"],
    image: "https://images.unsplash.com/photo-1609740478328-48bb9a35d6d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly packaging solutions designed for fresh produce and agricultural products.",
    verified: true
  },
  {
    id: "3",
    name: "Nairobi Cold Storage",
    location: "Nairobi",
    rating: 4.5,
    services: ["Storage", "Preservation"],
    image: "https://images.unsplash.com/photo-1566385572241-904da5430a79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Modern cold storage facilities ensuring freshness of agricultural products.",
    verified: true
  },
  {
    id: "4",
    name: "Rift Valley Distribution",
    location: "Nakuru",
    rating: 4.7,
    services: ["Distribution", "Transportation"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive distribution network connecting rural farmers to urban markets.",
    verified: false
  },
  {
    id: "5",
    name: "Eco Pack Kenya",
    location: "Kisumu",
    rating: 4.3,
    services: ["Packaging", "Branding"],
    image: "https://images.unsplash.com/photo-1594631181664-44ec3800c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Sustainable packaging solutions made from locally sourced materials.",
    verified: true
  },
  {
    id: "6",
    name: "Lake Region Transport",
    location: "Kisumu",
    rating: 4.4,
    services: ["Transportation"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Specialized transport services for agricultural goods in the Lake Victoria region.",
    verified: false
  }
];

const SupplierCard = ({ supplier }: { supplier: typeof suppliers[0] }) => {
  const { toast } = useToast();
  
  const contactSupplier = () => {
    toast({
      title: "Contact Request Sent",
      description: `You've sent a contact request to ${supplier.name}`,
    });
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={supplier.image} 
          alt={supplier.name} 
          className="w-full h-full object-cover"
        />
        {supplier.verified && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <PackageCheck className="h-3 w-3 mr-1" />
            Verified
          </div>
        )}
      </div>
      <CardContent className="flex-1 flex flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{supplier.name}</h3>
          <div className="flex items-center text-yellow-500">
            <span className="text-sm font-medium text-gray-700">{supplier.rating}</span>
            <span className="ml-1">★</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-2">{supplier.location}</p>
        <p className="text-sm text-gray-600 mb-3">{supplier.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {supplier.services.map((service) => (
            <span 
              key={service} 
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={contactSupplier}
          >
            Contact
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceCategories = ["All", "Transportation", "Storage", "Packaging", "Distribution"];
  
  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          supplier.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesService = selectedServices.length === 0 || 
                           selectedServices.includes("All") ||
                           supplier.services.some(service => selectedServices.includes(service));
    
    return matchesSearch && matchesService;
  });

  const handleServiceClick = (service: string) => {
    if (service === "All") {
      setSelectedServices(["All"]);
    } else {
      const newSelected = selectedServices.includes("All") 
        ? [service] 
        : selectedServices.includes(service)
          ? selectedServices.filter(s => s !== service)
          : [...selectedServices, service];
      
      setSelectedServices(newSelected.length ? newSelected : ["All"]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-green-50 to-white py-10">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Agricultural Supply Chain Partners</h1>
            <p className="text-lg text-gray-600">
              Connect with verified suppliers specializing in agricultural logistics, packaging, storage, 
              and distribution services across Kenya.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search suppliers by name or location..."
                  className="w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map((service) => (
                  <Button
                    key={service}
                    variant={selectedServices.includes(service) ? "default" : "outline"}
                    size="sm"
                    className={selectedServices.includes(service) ? "bg-green-600 hover:bg-green-700" : ""}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service === "Transportation" && <Truck className="h-4 w-4 mr-1" />}
                    {service === "Storage" && <Package2 className="h-4 w-4 mr-1" />}
                    {service === "Packaging" && <Package className="h-4 w-4 mr-1" />}
                    {service === "Distribution" && <Store className="h-4 w-4 mr-1" />}
                    {service}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Suppliers</TabsTrigger>
              <TabsTrigger value="verified">Verified Only</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSuppliers.map((supplier) => (
                  <SupplierCard key={supplier.id} supplier={supplier} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="verified">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSuppliers.filter(s => s.verified).map((supplier) => (
                  <SupplierCard key={supplier.id} supplier={supplier} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSuppliers.filter(s => s.rating >= 4.5).map((supplier) => (
                  <SupplierCard key={supplier.id} supplier={supplier} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Become a Supplier */}
          <div className="mt-12 bg-green-50 p-6 md:p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Become a Supply Chain Partner</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our network of agricultural supply chain partners and connect with thousands 
              of producers across Kenya. Help us build a more efficient and sustainable food system.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">Apply to Join</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Suppliers;
