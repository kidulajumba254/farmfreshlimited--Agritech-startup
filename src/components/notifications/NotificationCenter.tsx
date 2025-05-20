
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type NotificationType = 'system' | 'market' | 'order';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

// Sample notifications data
const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'system',
    title: 'System Update',
    message: 'FarmFresh platform will undergo maintenance tonight from 11 PM to 2 AM.',
    time: '3 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'market',
    title: 'Price Alert',
    message: 'Coffee prices have risen 5% in the Nairobi market.',
    time: '5 hours ago',
    read: false,
  },
  {
    id: '3',
    type: 'order',
    title: 'Order Delivered',
    message: 'Your order #ORD-1234 has been delivered successfully.',
    time: '1 day ago',
    read: true,
  },
  {
    id: '4',
    type: 'market',
    title: 'New Product',
    message: 'New organic avocados from Murang\'a now available.',
    time: '2 days ago',
    read: true,
  },
  {
    id: '5',
    type: 'system',
    title: 'Account Security',
    message: 'Please update your password for enhanced account security.',
    time: '3 days ago',
    read: true,
  },
  {
    id: '6',
    type: 'order',
    title: 'Order Confirmed',
    message: 'Your order #ORD-1235 has been confirmed and is being processed.',
    time: '3 days ago',
    read: true,
  },
];

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [open, setOpen] = useState(false);
  
  const unreadCount = notifications.filter(notification => !notification.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true,
    })));
  };
  
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const getNotificationsByType = (type: NotificationType | 'all') => {
    return type === 'all' 
      ? notifications 
      : notifications.filter(notification => notification.type === type);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={22} />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 px-1.5 min-w-[18px] h-[18px] bg-red-500 text-white text-xs flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[380px] p-0" 
        align="end"
        sideOffset={10}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="font-medium text-sm">Notifications</h4>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs h-7 px-2 text-green-700 hover:text-green-800 hover:bg-green-50"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="border-b px-4">
            <TabsList className="h-9 grid grid-cols-4 bg-transparent">
              <TabsTrigger value="all" className="text-xs data-[state=active]:bg-green-50">All</TabsTrigger>
              <TabsTrigger value="system" className="text-xs data-[state=active]:bg-green-50">System</TabsTrigger>
              <TabsTrigger value="market" className="text-xs data-[state=active]:bg-green-50">Market</TabsTrigger>
              <TabsTrigger value="order" className="text-xs data-[state=active]:bg-green-50">Orders</TabsTrigger>
            </TabsList>
          </div>
          
          {(['all', 'system', 'market', 'order'] as const).map((tabValue) => (
            <TabsContent key={tabValue} value={tabValue} className="m-0">
              <ScrollArea className="h-[320px]">
                {getNotificationsByType(tabValue).length === 0 ? (
                  <div className="flex items-center justify-center h-full p-8 text-center">
                    <p className="text-sm text-gray-500">No notifications</p>
                  </div>
                ) : (
                  getNotificationsByType(tabValue).map((notification) => (
                    <React.Fragment key={notification.id}>
                      <div 
                        className={cn(
                          "p-4 hover:bg-gray-50 cursor-pointer",
                          !notification.read && "bg-green-50"
                        )}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex items-start justify-between">
                          <h5 className={cn(
                            "text-sm font-medium",
                            !notification.read && "font-semibold"
                          )}>
                            {notification.title}
                          </h5>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                      </div>
                      <Separator />
                    </React.Fragment>
                  ))
                )}
              </ScrollArea>
              <div className="p-2 border-t">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs h-8 text-green-700 border-green-200 hover:bg-green-50"
                >
                  View All Notifications
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
