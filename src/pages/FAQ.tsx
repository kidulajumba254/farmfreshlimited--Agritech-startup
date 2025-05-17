
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const faqItems = [
  {
    question: "How do I place an order?",
    answer: "You can place an order by browsing our marketplace, selecting the products you want, adding them to your cart, and proceeding to checkout. During checkout, you can choose your preferred payment method, including M-Pesa, and delivery options."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We currently deliver to all major towns in Kenya, with next-day delivery available in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. For other areas, delivery typically takes 2-3 business days."
  },
  {
    question: "How does M-Pesa payment work?",
    answer: "When you select M-Pesa as your payment method at checkout, you will receive an STK push to your registered phone number. Follow the prompts to complete the payment. Once the payment is confirmed, we will process your order."
  },
  {
    question: "What is your return policy?",
    answer: "We have a 24-hour return policy for fresh produce. If you receive any products that are not fresh or are damaged, please take photos and contact our customer service team within 24 hours of delivery, and we will arrange for a replacement or refund."
  },
  {
    question: "How do I know the produce is fresh?",
    answer: "All our produce is sourced directly from farmers and delivered to you within 24-48 hours of harvest. We also display harvest dates on our products so you can see exactly how fresh they are."
  },
  {
    question: "Are your products organic?",
    answer: "We offer both organic and conventional products. All organic products are clearly labeled and certified by recognized organic certification bodies in Kenya. You can filter for organic products specifically in our marketplace."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you will receive an SMS with tracking information. You can also log into your account on our website and view the status of your orders under the 'My Orders' section."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa, credit/debit cards, and bank transfers. For corporate accounts, we also offer invoice payment options with agreed payment terms."
  },
  {
    question: "Do you offer subscriptions for regular deliveries?",
    answer: "Yes, we offer weekly and bi-weekly subscription boxes of seasonal produce. You can customize your subscription based on your preferences and pause or cancel it at any time."
  },
  {
    question: "How can I become a supplier?",
    answer: "If you're a farmer or producer interested in selling through our platform, please visit our 'Become a Supplier' page or contact our supplier relations team at suppliers@farmfresh.co.ke."
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredFAQs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about ordering, delivery, payments, and more. If you can't find what you're looking for, feel free to contact our support team.
          </p>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search FAQs..." 
              className="pl-10 py-6"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600 mb-4">No FAQs found matching your search.</p>
              <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
            </div>
          )}
        </div>

        <div className="mt-16">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Still Have Questions?</h2>
                <p className="text-gray-600 mb-8">
                  Our customer support team is available to help you with any questions or issues you may have.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 border rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
                    <p className="text-gray-600 mb-4">Reach out to our support team for quick assistance</p>
                    <Button variant="outline" className="w-full">Email Support</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                    <p className="text-gray-600 mb-4">Chat with our support agents in real-time</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Start Chat</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
