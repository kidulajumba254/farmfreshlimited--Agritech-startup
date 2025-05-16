
import React from "react";
import { LoginForm } from "@/components/auth/AuthForms";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">AgriConnect</h2>
          <p className="text-gray-600 mt-2">Login to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
