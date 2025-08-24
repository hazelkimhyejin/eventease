import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import EventCard from '../components/common/EventCard';
import { fetchEvents } from '../utils/api';

function PurchaserPage() {
  const [events, setEvents] = useState([]);
  const authenticated = isAuthenticated();

  useEffect(() => {
    if (authenticated) {
      // Simulated API call
      const getEvents = async () => {
        const mockEvents = await fetchEvents();
        setEvents(mockEvents);
      };
      getEvents();
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Ticket Purchaser</h1>
        <div className="flex space-x-4">
          <Link
            to="/register/purchaser"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register as Ticket Purchaser
          </Link>
          <Link
            to="/login/purchaser"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Ticket Purchaser Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Browse Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default PurchaserPage;