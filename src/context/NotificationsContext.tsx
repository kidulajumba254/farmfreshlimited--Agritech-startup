
import React, { createContext, useContext, useState, useEffect } from "react";
import { Notification } from "@/components/notifications/NotificationsList";

// Sample notification data
const sampleNotifications: Notification[] = [
  {
    id: "1",
    title: "New Order Received",
    message: "Your tomatoes order was received by Anna's Fresh Market.",
    time: "5 minutes ago",
    read: false,
    type: "order",
    actionUrl: "/orders"
  },
  {
    id: "2",
    title: "Price Alert",
    message: "Prices for avocados have increased by 15% in the Nairobi region.",
    time: "2 hours ago",
    read: false,
    type: "alert",
    actionUrl: "/marketplace"
  },
  {
    id: "3",
    title: "Payment Received",
    message: "Payment of KES 12,500 has been deposited into your account.",
    time: "Yesterday",
    read: true,
    type: "success",
    actionUrl: "/dashboard"
  },
  {
    id: "4",
    title: "New Message",
    message: "John Kamau sent you a message regarding your recent delivery.",
    time: "3 days ago",
    read: true,
    type: "message",
    actionUrl: "/messages"
  },
  {
    id: "5",
    title: "Supplier Application",
    message: "Your application to become a verified supplier is under review.",
    time: "1 week ago",
    read: true,
    type: "info"
  }
];

interface NotificationsContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<Notification, "id" | "time">) => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationsProvider");
  }
  return context;
};

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [unreadCount, setUnreadCount] = useState(0);

  // Calculate unread count whenever notifications change
  useEffect(() => {
    const count = notifications.filter(notification => !notification.read).length;
    setUnreadCount(count);
  }, [notifications]);

  const markAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const addNotification = (notification: Omit<Notification, "id" | "time">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      time: "Just now",
    };
    
    setNotifications(prev => [newNotification, ...prev]);
  };

  const value = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};
