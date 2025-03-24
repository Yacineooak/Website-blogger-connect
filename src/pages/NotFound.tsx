
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import PageTransition from "@/components/shared/PageTransition";
import Button from "@/components/shared/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-lg w-full">
          <div className="text-center">
            <div className="mb-6 inline-flex justify-center items-center w-24 h-24 rounded-full bg-thinkminnt-blue/10">
              <span className="text-5xl font-bold text-thinkminnt-blue">404</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              We couldn't find the page you're looking for. It might have been removed, 
              renamed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asLink
                to="/"
                variant="primary"
                className="flex items-center justify-center"
              >
                <Home size={18} className="mr-2" />
                Back to Home
              </Button>
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="flex items-center justify-center"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
