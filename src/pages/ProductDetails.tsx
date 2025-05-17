
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Placeholder data - in a real app, this would come from an API
const product = {
  id: "prod-1",
  name: "Premium Organic Avocados",
  description: "Fresh, organic avocados grown in the fertile soils of Muranga County. Perfect for making guacamole or adding to your salads.",
  price: 85.00,
  currency: "KES",
  unit: "per kg",
  stock: 243,
  rating: 4.8,
  numReviews: 124,
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  farmer: {
    name: "Wambugu Farms",
    location: "Muranga, Kenya",
    rating: 4.9
  },
  details: {
    origin: "Muranga County, Kenya",
    certification: "Organic Certified",
    harvestDate: "2 days ago",
    shelfLife: "5-7 days at room temperature"
  },
  nutritionFacts: {
    calories: "160 kcal",
    fat: "15g",
    carbs: "9g",
    protein: "2g"
  }
};

const reviews = [
  {
    id: 1,
    author: "Jane Muthoni",
    rating: 5,
    date: "May 15, 2023",
    content: "These avocados are amazing! So creamy and perfect ripeness. Will definitely buy again."
  },
  {
    id: 2,
    author: "David Kamau",
    rating: 4,
    date: "May 10, 2023",
    content: "Very good quality and fast delivery. I'd recommend to anyone looking for fresh produce."
  },
  {
    id: 3,
    author: "Sarah Njeri",
    rating: 5,
    date: "May 3, 2023",
    content: "Excellent avocados! Great taste and perfect for my morning toast."
  }
];

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} added to your cart`,
      });
      setIsAdding(false);
    }, 800);
  };

  const handleBuyNow = () => {
    setPaymentProcessing(true);
    // Simulate M-Pesa integration
    setTimeout(() => {
      toast({
        title: "M-Pesa Prompt Sent",
        description: "Please check your phone for the M-Pesa payment prompt.",
      });
      setPaymentProcessing(false);
    }, 1500);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/marketplace" className="flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex gap-2 overflow-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`border-2 ${index === selectedImage ? 'border-green-600' : 'border-transparent'} rounded-md overflow-hidden w-20 h-20`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                {product.stock < 20 && (
                  <Badge className="bg-red-100 text-red-800 mr-2">Low Stock</Badge>
                )}
                <Badge className="bg-green-100 text-green-800">Organic</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-600">{product.numReviews} reviews</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end mb-2">
                <span className="text-2xl font-bold text-gray-900">{product.currency} {product.price.toFixed(2)}</span>
                <span className="ml-2 text-gray-500">{product.unit}</span>
              </div>
              <p className="text-green-600">{product.stock} units available</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <label htmlFor="quantity" className="mr-4 text-gray-700">Quantity:</label>
                <div className="flex items-center">
                  <button 
                    className="px-3 py-1 border rounded-l-md bg-gray-100 hover:bg-gray-200"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    className="w-16 border-y text-center py-1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button 
                    className="px-3 py-1 border rounded-r-md bg-gray-100 hover:bg-gray-200"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50"
                  onClick={handleAddToCart}
                  disabled={isAdding}
                >
                  {isAdding ? "Adding..." : "Add to Cart"}
                </Button>
                <Button 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={handleBuyNow}
                  disabled={paymentProcessing}
                >
                  {paymentProcessing ? "Processing..." : "Buy Now with M-Pesa"}
                </Button>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Delivery available in Nairobi and surrounding areas</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Quality guarantee with 100% money-back</span>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="text-sm font-medium">Sold by:</span>
                <div className="flex items-center mt-1">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                    {product.farmer.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-sm font-medium block">{product.farmer.name}</span>
                    <span className="text-xs text-gray-500">{product.farmer.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Information Tabs */}
        <Tabs defaultValue="details" className="mb-12">
          <TabsList className="w-full max-w-md grid grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="pt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Product Information</h3>
                    <ul className="space-y-2">
                      <li>
                        <span className="text-gray-600">Origin: </span>
                        <span className="font-medium">{product.details.origin}</span>
                      </li>
                      <li>
                        <span className="text-gray-600">Certification: </span>
                        <span className="font-medium">{product.details.certification}</span>
                      </li>
                      <li>
                        <span className="text-gray-600">Harvest Date: </span>
                        <span className="font-medium">{product.details.harvestDate}</span>
                      </li>
                      <li>
                        <span className="text-gray-600">Shelf Life: </span>
                        <span className="font-medium">{product.details.shelfLife}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Storage Tips</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Store at room temperature until ripe</li>
                      <li>To speed up ripening, place in a paper bag with a banana</li>
                      <li>Once ripe, refrigerate for up to 3 days</li>
                      <li>Cut avocados will brown quickly; sprinkle with lemon juice to prevent oxidation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nutrition" className="pt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Nutrition Facts</h3>
                <div className="border rounded-md">
                  <div className="border-b p-3">
                    <span className="font-bold">Serving Size:</span> 100g
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Calories</span>
                      <span>{product.nutritionFacts.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Total Fat</span>
                      <span>{product.nutritionFacts.fat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Total Carbohydrates</span>
                      <span>{product.nutritionFacts.carbs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Protein</span>
                      <span>{product.nutritionFacts.protein}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="pt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{review.author}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex items-center mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Recommended Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src="/placeholder.svg" alt="Product" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-1">Related Product {i}</h3>
                  <div className="flex items-center mb-2">
                    {renderStars(4)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">KES 75.00/kg</span>
                    <button className="text-green-600 hover:text-green-700 text-sm">View</button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
