import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Map } from "lucide-react";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block p-5 bg-eco-green-light/20 rounded-full mb-6">
          <Map size={60} className="text-eco-green" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The trail you're looking for appears to be off our map. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/destinations">
              Browse Destinations
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
