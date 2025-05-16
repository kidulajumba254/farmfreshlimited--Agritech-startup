
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserRole } from "@/types/user";
import { toast } from "sonner";

export const LoginForm = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Sign In"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export const SignupForm = () => {
  const { signup, isAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<UserRole>("consumer");
  const [isLoading, setIsLoading] = useState(false);
  
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    
    setIsLoading(true);
    try {
      await signup(email, password, name, role);
      toast.success("Account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
        <CardDescription className="text-center">
          Join our community of producers, suppliers, and consumers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="account-info" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account-info">Account Info</TabsTrigger>
            <TabsTrigger value="user-type">User Type</TabsTrigger>
          </TabsList>
          <form onSubmit={handleSubmit}>
            <TabsContent value="account-info" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </TabsContent>
            <TabsContent value="user-type" className="space-y-4 mt-4">
              <div className="space-y-3">
                <Label>I am a:</Label>
                <RadioGroup value={role} onValueChange={(value) => setRole(value as UserRole)}>
                  <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                    <RadioGroupItem value="consumer" id="consumer" />
                    <Label htmlFor="consumer" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Consumer</span>
                      <span className="text-sm text-gray-500">
                        I want to buy products from farmers and suppliers
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                    <RadioGroupItem value="producer" id="producer" />
                    <Label htmlFor="producer" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Producer</span>
                      <span className="text-sm text-gray-500">
                        I am a farmer or producer looking to sell my products
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                    <RadioGroupItem value="supplier" id="supplier" />
                    <Label htmlFor="supplier" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Supplier</span>
                      <span className="text-sm text-gray-500">
                        I provide logistics or distribution services
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </div>
            </TabsContent>
          </form>
        </Tabs>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
