
import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you as soon as possible. Thank you for contacting us!",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-eco-green to-eco-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have questions about eco-tourism in Sri Lanka? We're here to help!
          </p>
        </div>
      </div>
      
      {/* Contact Info and Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our eco-tourism destinations or want to provide feedback? 
              Feel free to reach out to our team using any of the methods below or by filling 
              out the contact form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-eco-green-light/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-eco-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Our Location</h3>
                  <p className="text-gray-600 mt-1">123 Green Path, Colombo 7, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-eco-green-light/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-eco-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email Us</h3>
                  <a href="mailto:info@ecotrail.lk" className="text-eco-blue hover:underline mt-1 block">
                    info@ecotrail.lk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-eco-green-light/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-eco-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Call Us</h3>
                  <p className="text-gray-600 mt-1">+94 11 234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-eco-green-light/20 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-eco-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-500 hover:text-eco-blue">
                      Facebook
                    </a>
                    <a href="#" className="text-gray-500 hover:text-eco-blue">
                      Twitter
                    </a>
                    <a href="#" className="text-gray-500 hover:text-eco-blue">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={6}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about EcoTrail.lk and eco-tourism in Sri Lanka.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is eco-tourism?
              </h3>
              <p className="text-gray-600">
                Eco-tourism focuses on responsible travel to natural areas that conserves the 
                environment, sustains the well-being of local people, and involves education. 
                It aims to minimize impact and build environmental awareness.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How is the Eco Impact Score calculated?
              </h3>
              <p className="text-gray-600">
                Our Eco Impact Score considers factors such as conservation practices, 
                energy usage, waste management, local community benefits, and visitor 
                management. Destinations are rated as High, Medium, or Low based on 
                their sustainability efforts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I suggest a new eco-friendly destination?
              </h3>
              <p className="text-gray-600">
                Absolutely! We welcome recommendations for eco-friendly destinations. 
                Please use our contact form to submit details about the location and 
                its sustainable practices. Our team will review and potentially add it to the platform.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How can I contribute to sustainable tourism?
              </h3>
              <p className="text-gray-600">
                Choose eco-certified accommodations, reduce waste, respect wildlife 
                and local cultures, conserve water and energy, support local businesses, 
                and follow the principles of "leave no trace" when exploring natural areas.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild>
              <a href="#top" className="flex items-center justify-center gap-2">
                Contact Our Team
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
