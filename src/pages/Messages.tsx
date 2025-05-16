
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import MessageThread from "@/components/communication/MessageThread";
import { Message } from "@/types/user";

// Mock conversation partners and messages for demonstration purposes
const mockContacts = [
  {
    id: "contact-1",
    name: "Green Valley Farms",
    avatar: "",
    role: "producer",
    lastMessage: "I can provide those organic apples by next week.",
    time: "10:23 AM",
    unread: 1,
  },
  {
    id: "contact-2",
    name: "Fresh Logistics",
    avatar: "",
    role: "supplier",
    lastMessage: "Your order #45678 will be delivered tomorrow between 2-5pm.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: "contact-3",
    name: "Mountain Dairy Co-op",
    avatar: "",
    role: "producer",
    lastMessage: "We've just launched a new organic cheese line! Would you be interested in a sample?",
    time: "May 12",
    unread: 3,
  },
  {
    id: "contact-4",
    name: "EcoFarm Distributors",
    avatar: "",
    role: "supplier",
    lastMessage: "Thank you for your order. We'll be in touch about shipping details.",
    time: "May 10",
    unread: 0,
  },
  {
    id: "contact-5",
    name: "Sarah Johnson",
    avatar: "",
    role: "consumer",
    lastMessage: "Hi, I have a question about your produce delivery service.",
    time: "May 8",
    unread: 0,
  },
];

// Mock messages for each contact
const mockMessages: Record<string, Message[]> = {
  "contact-1": [
    {
      id: "msg-1",
      senderId: "user-1",
      recipientId: "contact-1",
      content: "Hi there! I'm interested in your organic apples. Do you have any availability for next week?",
      timestamp: new Date("2025-05-14T09:30:00"),
      read: true,
    },
    {
      id: "msg-2",
      senderId: "contact-1",
      recipientId: "user-1",
      content: "Hello! Yes, we have a fresh harvest of organic apples. How many kg are you looking for?",
      timestamp: new Date("2025-05-14T09:45:00"),
      read: true,
    },
    {
      id: "msg-3",
      senderId: "user-1",
      recipientId: "contact-1",
      content: "Great! I need about 50kg for my restaurant.",
      timestamp: new Date("2025-05-14T10:00:00"),
      read: true,
    },
    {
      id: "msg-4",
      senderId: "contact-1",
      recipientId: "user-1",
      content: "Perfect, we can fulfill that order. Our organic apples are $2.99/kg. Would you like me to create an order for you?",
      timestamp: new Date("2025-05-14T10:15:00"),
      read: true,
    },
    {
      id: "msg-5",
      senderId: "user-1",
      recipientId: "contact-1",
      content: "Yes please. When can you deliver them?",
      timestamp: new Date("2025-05-14T10:20:00"),
      read: true,
    },
    {
      id: "msg-6",
      senderId: "contact-1",
      recipientId: "user-1",
      content: "I can provide those organic apples by next week.",
      timestamp: new Date("2025-05-15T10:23:00"),
      read: false,
    },
  ],
  "contact-2": [
    {
      id: "msg-7",
      senderId: "contact-2",
      recipientId: "user-1",
      content: "Your order #45678 will be delivered tomorrow between 2-5pm.",
      timestamp: new Date("2025-05-14T14:30:00"),
      read: true,
    }
  ],
  "contact-3": [
    {
      id: "msg-8",
      senderId: "contact-3",
      recipientId: "user-1",
      content: "We've just launched a new organic cheese line! Would you be interested in a sample?",
      timestamp: new Date("2025-05-12T11:15:00"),
      read: false,
    },
    {
      id: "msg-9",
      senderId: "contact-3",
      recipientId: "user-1",
      content: "The cheese is made with milk from our grass-fed cows and has won several awards.",
      timestamp: new Date("2025-05-12T11:17:00"),
      read: false,
    },
    {
      id: "msg-10",
      senderId: "contact-3",
      recipientId: "user-1",
      content: "Let me know if you'd like to try it!",
      timestamp: new Date("2025-05-12T11:18:00"),
      read: false,
    }
  ],
  "contact-4": [
    {
      id: "msg-11",
      senderId: "contact-4",
      recipientId: "user-1",
      content: "Thank you for your order. We'll be in touch about shipping details.",
      timestamp: new Date("2025-05-10T09:05:00"),
      read: true,
    }
  ],
  "contact-5": [
    {
      id: "msg-12",
      senderId: "contact-5",
      recipientId: "user-1",
      content: "Hi, I have a question about your produce delivery service.",
      timestamp: new Date("2025-05-08T16:45:00"),
      read: true,
    }
  ]
};

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(mockContacts[0]);
  const [messages, setMessages] = useState<Record<string, Message[]>>(mockMessages);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = mockContacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: "user-1",
      recipientId: selectedContact.id,
      content,
      timestamp: new Date(),
      read: true,
    };

    setMessages(prev => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), newMessage],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      
      <div className="flex h-[calc(80vh-4rem)] rounded-lg overflow-hidden border shadow-sm">
        {/* Contacts sidebar */}
        <div className="w-1/3 border-r bg-white">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search contacts..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-y-auto h-[calc(80vh-8rem)]">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-4 border-b cursor-pointer transition-colors ${
                    selectedContact && selectedContact.id === contact.id
                      ? "bg-green-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback className="bg-green-100 text-green-800">
                          {contact.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                        contact.role === "producer" ? "bg-green-500" : 
                        contact.role === "supplier" ? "bg-blue-500" : "bg-purple-500"
                      } border-2 border-white`}></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">{contact.name}</h3>
                        <span className="text-xs text-gray-500">{contact.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="ml-2 h-5 w-5 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{contact.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No contacts found
              </div>
            )}
          </div>
        </div>
        
        {/* Message thread */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {selectedContact ? (
            <MessageThread
              recipientId={selectedContact.id}
              recipientName={selectedContact.name}
              recipientAvatar={selectedContact.avatar}
              messages={messages[selectedContact.id] || []}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p>Select a contact to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
