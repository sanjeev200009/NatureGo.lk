
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";
import { useAuth } from "@/contexts/AuthContext";
import { Booking } from "@/types";
import { format } from "date-fns";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const destination = destinations.find((d) => d.id === id);

  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!destination) {
    return (
      <div className="max-w-xl mx-auto my-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Destination Not Found</h2>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API booking logic
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        `Booking Confirmed!\nDestination: ${destination.name}\nCheck-in: ${checkIn ? format(checkIn, "yyyy-MM-dd") : ""
        }\nCheck-out: ${checkOut ? format(checkOut, "yyyy-MM-dd") : ""
        }\nGuests: ${guests.adults} Adults, ${guests.children} Children`
      );
      navigate("/bookings");
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Book {destination.name}</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Check-in Date</label>
              <Calendar
                selected={checkIn}
                onSelect={setCheckIn}
                mode="single"
                fromDate={new Date()}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Check-out Date</label>
              <Calendar
                selected={checkOut}
                onSelect={setCheckOut}
                mode="single"
                fromDate={checkIn || new Date()}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Adults</label>
              <input
                type="number"
                min={1}
                value={guests.adults}
                onChange={(e) => setGuests({ ...guests, adults: Number(e.target.value) })}
                className="border rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Children</label>
              <input
                type="number"
                min={0}
                value={guests.children}
                onChange={(e) => setGuests({ ...guests, children: Number(e.target.value) })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button type="submit" disabled={isSubmitting || !checkIn || !checkOut} className="px-8">
              {isSubmitting ? "Booking..." : "Confirm Booking"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

