
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Users, 
  Download, 
  Mail, 
  ArrowLeft 
} from 'lucide-react';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};

  // If no booking data, redirect to bookings page
  useEffect(() => {
    if (!bookingData.referenceNumber) {
      navigate('/bookings');
    }
  }, [bookingData, navigate]);

  if (!bookingData.referenceNumber) {
    return null; // Will redirect via useEffect
  }

  const handleDownloadConfirmation = () => {
    alert('In a production app, this would generate and download a PDF confirmation.');
  };

  const handleEmailConfirmation = () => {
    alert('In a production app, this would email the booking confirmation.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-xl text-gray-600">
          Your eco-friendly adventure is booked and ready to go.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader className="border-b">
          <CardTitle className="flex justify-between items-center">
            <span>Booking Reference: {bookingData.referenceNumber}</span>
            <span className="text-sm font-normal bg-green-100 text-green-800 py-1 px-3 rounded-full">
              {bookingData.status}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">{bookingData.stayName}</h3>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    {bookingData.checkIn && bookingData.checkOut ? (
                      <>
                        <div>Check-in: {format(new Date(bookingData.checkIn), 'EEE, MMM d, yyyy')}</div>
                        <div>Check-out: {format(new Date(bookingData.checkOut), 'EEE, MMM d, yyyy')}</div>
                      </>
                    ) : bookingData.checkIn ? (
                      <div>Date: {format(new Date(bookingData.checkIn), 'EEE, MMM d, yyyy')}</div>
                    ) : null}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    {bookingData.guests?.adults} Adult{bookingData.guests?.adults !== 1 ? 's' : ''}
                    {bookingData.guests?.children > 0 && `, ${bookingData.guests?.children} Child${bookingData.guests?.children !== 1 ? 'ren' : ''}`}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
              <h3 className="text-lg font-semibold mb-3">Payment Details</h3>
              
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span className="font-medium">
                    {bookingData.paymentMethod === 'stripe' ? 'Credit Card (Stripe)' : 'Cash on Arrival'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Status:</span>
                  <span className={`font-medium ${bookingData.paymentStatus === 'paid' ? 'text-green-600' : 'text-amber-600'}`}>
                    {bookingData.paymentStatus === 'paid' ? 'Paid' : 'Pending Payment'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-medium">${bookingData.totalPrice}</span>
                </div>
                
                {bookingData.paymentMethod === 'cash' && (
                  <div className="mt-4 p-3 bg-amber-50 text-amber-800 rounded-md text-sm">
                    <p className="font-medium">Please note:</p>
                    <p>Payment will be collected upon arrival. Please have the exact amount ready.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-green-800 mb-3">Eco-Friendly Travel Tips</h3>
        <ul className="space-y-2 text-green-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Bring a reusable water bottle and shopping bag to reduce plastic waste.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Use eco-friendly sunscreen to protect marine life if visiting coastal areas.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Consider carbon offsetting your travel to Sri Lanka through verified programs.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Support local communities by purchasing locally-made products and services.</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Button 
          onClick={() => navigate('/bookings')} 
          variant="outline"
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Browse More Eco Stays
        </Button>
        
        <div className="flex gap-3">
          <Button 
            onClick={handleEmailConfirmation} 
            variant="outline"
            className="flex items-center"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Confirmation
          </Button>
          
          <Button 
            onClick={handleDownloadConfirmation}
            className="flex items-center"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Receipt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
