
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotificationsProvider } from "./context/NotificationsContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Insights from "./pages/Insights";
import Messages from "./pages/Messages";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainability";
import PasswordReset from "./pages/PasswordReset";
import BettyAssistant from "./components/assistant/BettyAssistant";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Suppliers from "./pages/Suppliers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <NotificationsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/:productId" element={<ProductDetails />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/suppliers" element={<Suppliers />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BettyAssistant />
          </BrowserRouter>
        </TooltipProvider>
      </NotificationsProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
