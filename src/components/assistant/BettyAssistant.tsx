
import React, { useState } from 'react';
import { Bot, MessageSquare, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

type Message = {
  content: string;
  sender: 'user' | 'assistant';
};

const BettyAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      content: "Hello! I'm Betty, your FarmFresh virtual assistant. How can I help you today?", 
      sender: 'assistant' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    setMessages([...messages, { content: inputMessage, sender: 'user' }]);
    setInputMessage('');
    
    // Simulate assistant response
    setIsTyping(true);
    setTimeout(() => {
      // Simulated AI responses based on keywords in the message
      const userMessage = inputMessage.toLowerCase();
      let response = "I'm not sure how to help with that. Could you try asking something about our products, marketplace, or how FarmFresh works?";
      
      if (userMessage.includes('hello') || userMessage.includes('hi')) {
        response = "Hello there! How can I assist you with FarmFresh today?";
      } else if (userMessage.includes('product')) {
        response = "We offer a wide range of farm-fresh products from local Kenyan farmers. You can browse them in our marketplace section!";
      } else if (userMessage.includes('payment') || userMessage.includes('mpesa')) {
        response = "FarmFresh accepts payments through M-Pesa and bank transfers. These options are available at checkout.";
      } else if (userMessage.includes('delivery') || userMessage.includes('shipping')) {
        response = "We deliver across Kenya! Delivery times depend on your location. You can check estimated delivery times at checkout.";
      } else if (userMessage.includes('price')) {
        response = "Our prices are competitive and fair to both producers and consumers. We ensure farmers get good compensation while keeping products affordable.";
      } else if (userMessage.includes('organic') || userMessage.includes('certification')) {
        response = "We verify all organic certifications with Kenya's Organic Agriculture Network. Look for the certified organic badge on our products!";
      } else if (userMessage.includes('farmer') || userMessage.includes('producer')) {
        response = "All our farmers are verified local producers. You can view their profiles and practices on each product page.";
      } else if (userMessage.includes('sustainability') || userMessage.includes('environment')) {
        response = "Sustainability is our core value! Each product has a sustainability score to help you make eco-friendly choices.";
      } else if (userMessage.includes('discount') || userMessage.includes('offer')) {
        response = "Check our promotions page for current discounts! New customers get 10% off their first order.";
      } else if (userMessage.includes('thank')) {
        response = "You're welcome! Is there anything else I can help you with?";
      } else if (userMessage.includes('contact') || userMessage.includes('support')) {
        response = "You can reach our support team at support@farmfresh.co.ke or call us at +254-700-000-000. We're available 8AM-6PM EAT.";
      }
      
      setMessages(prev => [...prev, { content: response, sender: 'assistant' }]);
      setIsTyping(false);

      // Show a toast notification for certain interactions
      if (userMessage.includes('thank')) {
        toast({
          title: "Betty says",
          description: "You're welcome! Glad I could help.",
        });
      }
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg border-green-200 overflow-hidden animate-scale-in">
          <CardHeader className="bg-green-600 text-white p-3 flex flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white text-green-600 rounded-full p-1">
                <Bot size={16} />
              </div>
              <span className="font-semibold">Betty - FarmFresh Assistant</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-6 w-6 text-white hover:bg-green-700 hover:text-white"
              onClick={toggleAssistant}
            >
              <X size={16} />
            </Button>
          </CardHeader>
          
          <CardContent className="p-3 h-80 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-lg px-3 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-white border border-gray-200 text-gray-700'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700">
                    <div className="flex gap-1">
                      <span className="animate-bounce">•</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>•</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>•</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="p-3 border-t bg-white">
            <div className="flex w-full gap-2">
              <Textarea
                value={inputMessage}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-h-10 resize-none"
                rows={1}
              />
              <Button 
                onClick={handleSendMessage} 
                className="bg-green-600 hover:bg-green-700" 
                size="icon"
              >
                <MessageSquare size={18} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={toggleAssistant}
          className="rounded-full h-14 w-14 bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center animate-fade-in"
        >
          <Bot size={24} />
        </Button>
      )}
    </div>
  );
};

export default BettyAssistant;
