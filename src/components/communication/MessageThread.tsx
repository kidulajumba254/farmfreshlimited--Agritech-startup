
import React, { useState } from "react";
import { Message } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface MessageThreadProps {
  recipientId: string;
  recipientName: string;
  recipientAvatar?: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

const MessageThread: React.FC<MessageThreadProps> = ({
  recipientId,
  recipientName,
  recipientAvatar,
  messages,
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  // Group messages by date
  const messagesByDate = messages.reduce<Record<string, Message[]>>((groups, message) => {
    const date = new Date(message.timestamp).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={recipientAvatar} alt={recipientName} />
          <AvatarFallback className="bg-green-100 text-green-800">
            {recipientName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{recipientName}</h3>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {Object.entries(messagesByDate).map(([date, dateMessages]) => (
          <div key={date}>
            <div className="text-center mb-4">
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                {date}
              </span>
            </div>
            {dateMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.senderId === recipientId ? "justify-start" : "justify-end"
                } mb-4`}
              >
                {message.senderId === recipientId && (
                  <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                    <AvatarImage src={recipientAvatar} alt={recipientName} />
                    <AvatarFallback className="bg-green-100 text-green-800">
                      {recipientName.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-md ${
                    message.senderId === recipientId
                      ? "bg-gray-100 text-gray-800"
                      : "bg-green-600 text-white"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-end space-x-2">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow resize-none"
            rows={3}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button
            onClick={handleSendMessage}
            className="bg-green-600 hover:bg-green-700 h-10"
            disabled={!newMessage.trim()}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageThread;
