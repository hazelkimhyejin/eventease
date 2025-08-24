import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EventCard from '../components/common/EventCard';

function SearchResults() {
  const [events, setEvents] = useState([]);
  const [organisers, setOrganisers] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    // Simulated API call
    const fetchSearchResults = async () => {
      const mockEvents = [
        { id: 1, title: 'Concert: Rock Legends', date: '2025-09-15', location: 'City Arena', price: 50 },
        { id: 2, title: 'Theatre: Hamlet', date: '2025-10-01', location: 'Downtown Theatre', price: 30 },
      ].filter((event) => event.title.toLowerCase().includes(query?.toLowerCase() || ''));

      const mockOrganisers = [
        { id: 1, name: 'Rock Events Ltd', description: 'Leading concert organiser' },
        { id: 2, name: 'Theatre Co', description: 'Specialists in dramatic performances' },
      ].filter((org) => org.name.toLowerCase().includes(query?.toLowerCase() || ''));

      setEvents(mockEvents);
      setOrganisers(mockOrganisers);
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="section-heading">Search Results for "{query}"</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-primary-600 mb-4">Events</h2>
        {events.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No events found.</p>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-primary-600 mb-4">Organisers</h2>
        {organisers.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organisers.map((org) => (
              <div key={org.id} className="card organiser-accent">
                <h3 className="text-xl font-semibold text-primary-600">{org.name}</h3>
                <p className="text-gray-600">{org.description}</p>
                <Link to={`/organiser/${org.id}`} className="btn-primary mt-4 inline-block" aria-label={`View profile for ${org.name}`}>
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No organisers found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;