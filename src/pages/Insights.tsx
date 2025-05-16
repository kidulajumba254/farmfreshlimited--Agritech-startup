
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataInsightCard from "@/components/dashboard/DataInsightCard";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";

const mockMarketTrends = [
  { date: "Jan", value: 4000 },
  { date: "Feb", value: 4200 },
  { date: "Mar", value: 5800 },
  { date: "Apr", value: 6000 },
  { date: "May", value: 7000 },
];

const mockConsumerPreferences = [
  { date: "Jan", value: 75 },
  { date: "Feb", value: 78 },
  { date: "Mar", value: 82 },
  { date: "Apr", value: 85 },
  { date: "May", value: 90 },
];

const mockProductPricing = [
  { date: "Jan", value: 3.15 },
  { date: "Feb", value: 3.25 },
  { date: "Mar", value: 3.45 },
  { date: "Apr", value: 3.40 },
  { date: "May", value: 3.60 },
];

const mockTopSellingProducts = [
  { name: "Organic Apples", sales: 852 },
  { name: "Fresh Eggs", sales: 721 },
  { name: "Raw Honey", sales: 614 },
  { name: "Spinach", sales: 543 },
  { name: "Goat Cheese", sales: 489 },
];

const mockConsumerSegments = [
  { name: "Health Conscious", value: 35 },
  { name: "Price Sensitive", value: 25 },
  { name: "Convenience Seekers", value: 20 },
  { name: "Gourmet Cooks", value: 15 },
  { name: "Other", value: 5 },
];

const mockSeasonalTrends = [
  { month: "Jan", fruits: 4000, vegetables: 2400, dairy: 2000 },
  { month: "Feb", fruits: 3000, vegetables: 1398, dairy: 2500 },
  { month: "Mar", fruits: 2000, vegetables: 4800, dairy: 2200 },
  { month: "Apr", fruits: 2780, vegetables: 3908, dairy: 2500 },
  { month: "May", fruits: 3890, vegetables: 4800, dairy: 2100 },
  { month: "Jun", fruits: 4890, vegetables: 3800, dairy: 2300 },
  { month: "Jul", fruits: 6090, vegetables: 3200, dairy: 2500 },
  { month: "Aug", fruits: 5490, vegetables: 3508, dairy: 2800 },
  { month: "Sep", fruits: 4290, vegetables: 4300, dairy: 2400 },
  { month: "Oct", fruits: 3890, vegetables: 4900, dairy: 2200 },
  { month: "Nov", fruits: 3090, vegetables: 3800, dairy: 2800 },
  { month: "Dec", fruits: 4490, vegetables: 2800, dairy: 3200 },
];

const mockSustainabilityPreferencesTrends = [
  { year: "2021", eco: 45, price: 55 },
  { year: "2022", eco: 52, price: 48 },
  { year: "2023", eco: 58, price: 42 },
  { year: "2024", eco: 65, price: 35 },
  { year: "2025", eco: 72, price: 28 },
];

const COLORS = ['#10B981', '#F59E0B', '#3B82F6', '#EC4899', '#8B5CF6'];

const Insights = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">Market Insights</h1>
        <p className="text-gray-600 mt-2">
          Data-driven insights to help you make informed decisions
        </p>
      </div>

      <Tabs defaultValue="market-trends">
        <TabsList className="mb-6 grid grid-cols-1 md:grid-cols-3 w-full">
          <TabsTrigger value="market-trends">Market Trends</TabsTrigger>
          <TabsTrigger value="consumer-insights">Consumer Insights</TabsTrigger>
          <TabsTrigger value="seasonal-analysis">Seasonal Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="market-trends" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataInsightCard
              title="Market Demand"
              data={mockMarketTrends}
              currentValue={7000}
              percentageChange={16.7}
              timeframe="vs last month"
              valueSuffix=" units"
            />
            <DataInsightCard
              title="Organic Preference"
              data={mockConsumerPreferences}
              currentValue={90}
              percentageChange={5.9}
              timeframe="vs last month"
              valueSuffix="%"
            />
            <DataInsightCard
              title="Average Price"
              data={mockProductPricing}
              currentValue={3.60}
              percentageChange={5.9}
              timeframe="vs last month"
              valuePrefix="$"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
              <CardDescription>Monthly sales volume by product</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={mockTopSellingProducts}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consumer-insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Consumer Segments</CardTitle>
                <CardDescription>Breakdown of consumer types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        dataKey="value"
                        data={mockConsumerSegments}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {mockConsumerSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sustainability vs. Price Sensitivity</CardTitle>
                <CardDescription>Evolution over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={mockSustainabilityPreferencesTrends}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="eco"
                        name="Eco-conscious"
                        stroke="#10B981"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="price" name="Price-driven" stroke="#F59E0B" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Consumer Insights</CardTitle>
              <CardDescription>Based on recent market data and consumer trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-semibold">Health & Wellness Focus</h3>
                  <p className="text-gray-600">
                    There's a growing trend of consumers prioritizing health benefits in their food choices. Products with clear nutritional information and health benefits are seeing a 24% higher engagement rate.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="font-semibold">Sustainability Impact</h3>
                  <p className="text-gray-600">
                    Consumers are increasingly willing to pay a premium (up to 15% more) for products with verified sustainability credentials. This trend is strongest among urban millennials.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4 py-1">
                  <h3 className="font-semibold">Transparency Matters</h3>
                  <p className="text-gray-600">
                    Products that provide farm-to-table traceability are showing 32% higher customer loyalty rates. Consumers value knowing the story behind their food.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-1">
                  <h3 className="font-semibold">Recommendation</h3>
                  <p className="text-gray-600">
                    Consider implementing QR codes on packaging that link to detailed product journey information, and highlight sustainable practices in your marketing materials.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seasonal-analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Product Performance</CardTitle>
              <CardDescription>Monthly sales volume by product category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={mockSeasonalTrends}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="fruits"
                      stroke="#10B981"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="vegetables" stroke="#3B82F6" />
                    <Line type="monotone" dataKey="dairy" stroke="#F59E0B" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Seasonal Recommendations</CardTitle>
              <CardDescription>Optimize your product offering based on seasonal trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-green-800 font-medium mb-2">Spring (Current)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Focus on leafy greens like spinach and kale
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Promote early berries as they become available
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Highlight fresh herb availability
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Dairy products see stable demand
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-yellow-800 font-medium mb-2">Summer (Upcoming)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                      Prepare for peak fruit season (berries, stone fruits)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                      Tomatoes and cucumbers will see high demand
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                      Focus on grill-friendly vegetables
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                      Promote ice cream and fresh cheeses
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-orange-800 font-medium mb-2">Fall (Planning)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                      Stock up on apples and pears varieties
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                      Winter squashes will be popular
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                      Root vegetables will see increased demand
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                      Artisanal cheeses perform well this season
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2">Winter (Long-term)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                      Citrus fruits will be in high demand
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                      Storage vegetables like potatoes increase in sales
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                      Greenhouse greens fetch premium prices
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                      Preserved products see seasonal peak
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Insights;
