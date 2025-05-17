
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
        <p className="text-2xl font-medium text-gray-800 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <div className="space-y-3">
          <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/marketplace">Browse Marketplace</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
