
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Menu, MessageCircle } from "lucide-react";
import NotificationCenter from "@/components/notifications/NotificationCenter";

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-green-700 mr-4">
            FarmFresh
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/marketplace" className="text-gray-600 hover:text-green-700">
              Marketplace
            </Link>
            <Link to="/producers" className="text-gray-600 hover:text-green-700">
              Producers
            </Link>
            <Link to="/suppliers" className="text-gray-600 hover:text-green-700">
              Suppliers
            </Link>
            <Link to="/insights" className="text-gray-600 hover:text-green-700">
              Market Insights
            </Link>
            <Link to="/investors" className="text-gray-600 hover:text-green-700">
              Investors
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products, producers..."
              className="pl-10 pr-4 py-2 border rounded-full bg-gray-50 text-sm w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/messages" className="text-gray-600 hover:text-green-700 relative">
                <MessageCircle size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  3
                </span>
              </Link>
              
              <NotificationCenter />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9 cursor-pointer">
                    <AvatarImage src="" alt={user?.name} />
                    <AvatarFallback className="bg-green-100 text-green-800">
                      {user?.name?.substring(0, 2).toUpperCase() || "FT"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer w-full">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="cursor-pointer w-full">
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-sm md:text-base" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-sm md:text-base" size="sm" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-600" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>

          {isAuthenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarFallback className="bg-green-100 text-green-800">
                    {user?.name?.substring(0, 2).toUpperCase() || "FT"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="text-red-600">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-100">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products, producers..."
              className="pl-10 pr-4 py-2 border rounded-full bg-gray-50 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Link 
              to="/marketplace" 
              className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/producers" 
              className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Producers
            </Link>
            <Link 
              to="/suppliers" 
              className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Suppliers
            </Link>
            <Link 
              to="/insights" 
              className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Market Insights
            </Link>
            <Link 
              to="/investors" 
              className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Investors
            </Link>
            
            {!isAuthenticated && (
              <div className="flex pt-2 space-x-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 flex-1" size="sm" asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
