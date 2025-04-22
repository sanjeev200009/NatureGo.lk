
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll now receive our eco-travel updates and exclusive offers.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-eco-green text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2NmgtNnYtNmg2em0tNiAwdjZoLTZ2LTZoNnptMTIgMHY2aDZWMzRoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Eco-Travel Community</h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to receive sustainable travel tips, exclusive eco-destination updates, and special offers
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 h-auto bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white focus:ring-white/30"
                />
                
                <Button
                  type="submit"
                  className="bg-white text-eco-green-dark hover:bg-white/90 px-6 py-3 h-auto flex gap-2 items-center justify-center"
                  disabled={isSubmitting || isSubscribed}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-eco-green-dark border-t-transparent rounded-full" />
                      Subscribing...
                    </>
                  ) : isSubscribed ? (
                    <>
                      <Check size={18} />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
              
              <p className="text-sm mt-4 text-white/80">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
