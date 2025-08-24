import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition hover:bg-blue-50">
      <h2 className="text-xl font-semibold text-blue-600">{event.title}</h2>
      <p className="text-gray-600">Date: {event.date}</p>
      <p className="text-gray-600">Location: {event.location}</p>
      <p className="text-gray-600">Price: ${event.price}</p>
      <Link to={`/event/${event.id}`} className="mt-4 inline-block bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">View Details</Link>
    </div>
  );
}

export default EventCard;