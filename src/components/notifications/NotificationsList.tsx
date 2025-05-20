
import React from "react";
import { 
  Bell, 
  Package, 
  MessageCircle, 
  User, 
  DollarSign, 
  CheckCircle, 
  AlertCircle
} from "lucide-react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "message" | "order" | "alert" | "info" | "success";
  actionUrl?: string;
}

interface NotificationsListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClose?: () => void;
}

const NotificationIcon = ({ type }: { type: Notification["type"] }) => {
  switch (type) {
    case "message":
      return <MessageCircle className="h-5 w-5 text-blue-500" />;
    case "order":
      return <Package className="h-5 w-5 text-green-500" />;
    case "alert":
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "info":
    default:
      return <Bell className="h-5 w-5 text-gray-500" />;
  }
};

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onClose
}) => {
  const { toast } = useToast();
  
  const handleClick = (notification: Notification) => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
    
    if (notification.actionUrl) {
      if (onClose) onClose();
      // In a real app, you might use navigation here
      toast({
        title: "Navigating",
        description: `Going to ${notification.actionUrl}`
      });
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <Button variant="ghost" size="sm" onClick={onMarkAllAsRead}>
          Mark all as read
        </Button>
      </div>
      <Separator />
      
      <ScrollArea className="h-[400px]">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <Bell className="h-12 w-12 mx-auto mb-3 opacity-20" />
            <p>No notifications yet</p>
          </div>
        ) : (
          <div>
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`mb-2 cursor-pointer border-l-4 ${
                  notification.read 
                    ? "border-l-transparent bg-white" 
                    : "border-l-green-500 bg-green-50"
                } hover:bg-gray-50 transition-colors`}
                onClick={() => handleClick(notification)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <NotificationIcon type={notification.type} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className={`text-sm font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                          {notification.title}
                        </h4>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <p className={`text-sm ${notification.read ? 'text-gray-500' : 'text-gray-700'}`}>
                        {notification.message}
                      </p>
                      {notification.actionUrl && (
                        <div className="mt-2">
                          <Button variant="link" className="h-auto p-0 text-green-600 text-xs" size="sm">
                            View details
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default NotificationsList;
