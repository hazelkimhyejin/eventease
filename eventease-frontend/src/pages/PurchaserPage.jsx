import { useEffect, useState } from 'react';
import EventCard from '../components/common/EventCard';

function PurchaserPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchEvents = async () => {
      const mockEvents = [
        { id: 1, title: 'Concert: Rock Legends', date: '2025-09-15', location: 'City Arena', price: 50 },
        { id: 2, title: 'Theatre: Hamlet', date: '2025-10-01', location: 'Downtown Theatre', price: 30 },
      ];
      setEvents(mockEvents);
    };
    fetchEvents();
  }, []);

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