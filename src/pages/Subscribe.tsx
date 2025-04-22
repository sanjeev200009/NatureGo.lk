import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const navigate = useNavigate();

  // Function to handle subscription selection
  const handleSelectPlan = (plan: string) => {
    alert(`You selected the ${plan} plan. In a complete implementation, this would open Stripe checkout.`);
    setTimeout(() => navigate('/dashboard'), 1000);
  };

  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Features for each plan (update: added two more functionalities for the table comparison)
  const features = [
    "Basic listing visibility",
    "Contact information",
    "1 photo upload",
    "No booking form",
    "Full listing visibility",
    "Booking inquiry form",
    "Map pin location",
    "Customer reviews",
    "Top search results",
    "“Verified Eco” badge",
    "Analytics dashboard",
    "Featured blog spot"
  ];

  // Plan configs
  const plans = [
    {
      name: 'Starter',
      priceLKR: 'Free',
      priceUSD: 'Free',
      features: [
        'Basic listing visibility',
        'Contact information',
        '1 photo upload',
        'No booking form',
      ],
    },
    {
      name: 'Professional',
      priceLKR: 'Rs. 3,300',
      priceUSD: '~$9.99',
      features: [
        'Full listing visibility',
        'Contact information',
        'Photo gallery (up to 10)',
        'Booking inquiry form',
        'Map pin location',
        'Customer reviews',
      ],
    },
    {
      name: 'Featured',
      priceLKR: 'Rs. 6,600',
      priceUSD: '~$19.99',
      features: [
        'Top search results',
        '“Verified Eco” badge',
        'Analytics dashboard',
        'Featured blog spot',
        'Everything in Professional',
      ],
    },
  ];

  // New extra functionalities for rows (as requested)
  const extraRows = [
    {
      title: "Priority phone & chat support",
      starter: false,
      professional: true,
      featured: true,
    },
    {
      title: "Custom promotional banners",
      starter: false,
      professional: false,
      featured: true,
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Choose Your EcoTrail Plan</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan for your eco-friendly business. Promote your sustainable accommodation or experience to conscious travelers across Sri Lanka.
            </p>
          </div>

          {/* Pricing Table (first table) */}
          <div className="mt-10 mb-16 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3">Compare Our Plans</h2>
            <div className="w-full overflow-x-auto">
              <table className="min-w-full text-sm border rounded-xl overflow-hidden bg-white shadow">
                <thead>
                  <tr className="bg-eco-blue/10">
                    <th className="py-3 px-4 text-left font-semibold">Plan</th>
                    <th className="py-3 px-4 text-center font-semibold">Monthly Price (LKR)</th>
                    <th className="py-3 px-4 text-center font-semibold">USD (Approx.)</th>
                    <th className="py-3 px-4 text-left font-semibold">Main Features</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-4 font-bold text-lg">{plan.name}</td>
                      <td className="py-4 px-4 text-center text-eco-blue font-semibold">{plan.priceLKR}</td>
                      <td className="py-4 px-4 text-center text-green-700">{plan.priceUSD}</td>
                      <td className="py-4 px-4">
                        <ul className="space-y-1 list-disc pl-5">
                          {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Extra Feature Rows Below Main Table */}
              <div className="mt-8 w-full overflow-x-auto">
                <table className="min-w-full text-sm border rounded-xl overflow-hidden bg-gray-50">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold">Extra Feature</th>
                      <th className="py-3 px-4 text-center font-semibold">Starter</th>
                      <th className="py-3 px-4 text-center font-semibold">Professional</th>
                      <th className="py-3 px-4 text-center font-semibold">Featured</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extraRows.map((row, idx) => (
                      <tr key={row.title} className={idx % 2 === 0 ? '' : 'bg-white'}>
                        <td className="py-3 px-4 text-sm">{row.title}</td>
                        <td className="py-3 px-4 text-center">{row.starter ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-gray-300 mx-auto" />}</td>
                        <td className="py-3 px-4 text-center">{row.professional ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-gray-300 mx-auto" />}</td>
                        <td className="py-3 px-4 text-center">{row.featured ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-gray-300 mx-auto" />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Cards pricing (no changes, same as before, left for completeness) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Starter Plan */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 border-gray-200 hover:border-green-300 transition-all">
                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-gray-900">Starter</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Free</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Basic listing for eco-businesses</p>
                </CardHeader>
                <CardContent className="pt-6 pb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic listing visibility</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contact information</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>1 photo upload</span>
                    </li>
                    <li className="flex items-start opacity-50">
                      <X className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Booking form</span>
                    </li>
                    <li className="flex items-start opacity-50">
                      <X className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Map pin location</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleSelectPlan('Starter')} 
                    className="w-full" 
                    variant="outline"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Professional Plan */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 border-primary relative hover:border-primary/80 transition-all shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-gray-900">Professional</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Rs. 3,300</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">~$9.99 USD</p>
                </CardHeader>
                <CardContent className="pt-6 pb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full listing visibility</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contact information</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Photo gallery (up to 10)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Booking inquiry form</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Map pin location</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Customer reviews</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleSelectPlan('Professional')} 
                    className="w-full"
                  >
                    Subscribe Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Featured Plan */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 border-gray-200 hover:border-green-300 transition-all">
                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-gray-900">Featured</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Rs. 6,600</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">~$19.99 USD</p>
                </CardHeader>
                <CardContent className="pt-6 pb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Priority in search results</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>"Verified Eco" badge</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Analytics dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Featured blog spot</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unlimited photo uploads</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleSelectPlan('Featured')} 
                    className="w-full"
                    variant="outline"
                  >
                    Upgrade to Featured
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Feature Comparison</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Starter</th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Professional</th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 text-sm text-gray-900">{feature}</td>
                      <td className="py-3 px-4 text-center">
                        {index < 3 ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {index < 6 ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-3">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6">
              Contact our team for a personalized recommendation based on your eco-business needs.
            </p>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Subscribe;
