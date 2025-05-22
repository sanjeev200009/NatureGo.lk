
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  CreditCard, 
  Calendar, 
  Users, 
  CheckCircle,
  Lock
} from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {}; // Get booking data from location state
  
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cash'>('stripe');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle checkout submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      // Generate a random reference number
      const referenceNumber = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      // Navigate to confirmation page
      navigate('/confirmation', {
        state: {
          ...bookingData,
          referenceNumber,
          paymentMethod,
          paymentStatus: paymentMethod === 'stripe' ? 'paid' : 'pending',
          status: 'confirmed',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    }, 1500); // Simulate a 1.5s payment process
  };

  // Check if we have valid booking data
  if (!bookingData.stayId || !bookingData.totalPrice) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Booking</h1>
        <p className="text-lg text-gray-600 mb-6">Please select a stay or experience before proceeding to checkout.</p>
        <Button onClick={() => navigate('/bookings')}>
          Browse Bookings
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
      <p className="text-lg text-gray-600 mb-8">
        Complete your booking for {bookingData.stayName}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Checkout form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="First Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Last Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Phone Number" required />
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Guest Information</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  {bookingData.guests?.adults} Adult{bookingData.guests?.adults !== 1 ? 's' : ''}
                  {bookingData.guests?.children > 0 && `, ${bookingData.guests?.children} Child${bookingData.guests?.children !== 1 ? 'ren' : ''}`}
                </p>
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                  <textarea 
                    id="specialRequests" 
                    className="w-full min-h-[100px] p-2 border rounded-md" 
                    placeholder="Any specific requests or requirements..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="stripe" 
                    name="paymentMethod" 
                    checked={paymentMethod === 'stripe'} 
                    onChange={() => setPaymentMethod('stripe')}
                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <Label htmlFor="stripe" className="flex items-center cursor-pointer">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Pay now with Stripe (Demo)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="cash" 
                    name="paymentMethod" 
                    checked={paymentMethod === 'cash'} 
                    onChange={() => setPaymentMethod('cash')}
                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <Label htmlFor="cash" className="flex items-center cursor-pointer">
                    Cash on Arrival
                  </Label>
                </div>
                
                {paymentMethod === 'stripe' && (
                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <p className="text-sm text-gray-600 mb-4">
                      This is a demo checkout. In a real application, you would be redirected to Stripe for secure payment processing.
                    </p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" maxLength={16} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" maxLength={3} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <Lock className="h-4 w-4 mr-2" />
                  Your payment information is encrypted and secure.
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  required
                  className="h-4 w-4 mt-1 text-primary border-gray-300 focus:ring-primary"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-primary underline">Terms and Conditions</a> and <a href="#" className="text-primary underline">Privacy Policy</a>. I understand the cancellation policy and eco-guidelines for this booking.
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : `Confirm and ${paymentMethod === 'stripe' ? 'Pay' : 'Reserve'} $${bookingData.totalPrice}`}
            </Button>
          </form>
        </div>

        {/* Right column - Booking summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">{bookingData.stayName}</h3>
              </div>
              
              <div className="flex items-start space-x-2 text-sm">
                <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  {bookingData.checkIn && bookingData.checkOut ? (
                    <>
                      <div>{format(new Date(bookingData.checkIn), 'EEE, MMM d, yyyy')}</div>
                      <div>to {format(new Date(bookingData.checkOut), 'EEE, MMM d, yyyy')}</div>
                    </>
                  ) : bookingData.checkIn ? (
                    <div>{format(new Date(bookingData.checkIn), 'EEE, MMM d, yyyy')}</div>
                  ) : null}
                </div>
              </div>
              
              <div className="flex items-start space-x-2 text-sm">
                <Users className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  {bookingData.guests?.adults} Adult{bookingData.guests?.adults !== 1 ? 's' : ''}
                  {bookingData.guests?.children > 0 && `, ${bookingData.guests?.children} Child${bookingData.guests?.children !== 1 ? 'ren' : ''}`}
                </div>
              </div>
              
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${bookingData.totalPrice}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Eco Tourism Fee</span>
                  <span>$0</span>
                </div>
                
                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>${bookingData.totalPrice}</span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-md text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-green-800">
                    <p className="font-semibold mb-1">Eco-Friendly Booking</p>
                    <p>Your booking contributes to sustainable tourism practices and conservation efforts in Sri Lanka.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
