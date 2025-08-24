import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EventCard from '../components/common/EventCard';

function SearchResults() {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    // Simulated API call
    const fetchEvents = async () => {
      const mockEvents = [
        { id: 1, title: 'Concert: Rock Legends', date: '2025-09-15', location: 'City Arena', price: 50 },
      ].filter((event) => event.title.toLowerCase().includes(query?.toLowerCase() || ''));
      setEvents(mockEvents);
    };
    fetchEvents();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.length ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-gray-600">No events found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;