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
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 purchaser-accent">
        <h1 className="section-heading">Ticket Purchaser</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/register/purchaser"
            className="btn-primary"
            aria-label="Register as Ticket Purchaser"
          >
            Register as Ticket Purchaser
          </Link>
          <br></br>
          <Link
            to="/login/purchaser"
            className="btn-secondary"
            aria-label="Log In as Ticket Purchaser"
          >
            Ticket Purchaser Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="section-heading">Browse Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default PurchaserPage;