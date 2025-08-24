import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="card purchaser-accent">
      <h2 className="text-xl font-semibold text-primary-600">{event.title}</h2>
      <p className="text-gray-600">Date: {event.date}</p>
      <p className="text-gray-600">Location: {event.location}</p>
      <p className="text-gray-600">Price: ${event.price}</p>
      <Link to={`/event/${event.id}`} className="btn-primary mt-4 inline-block" aria-label={`View details for ${event.title}`}>
        View Details
      </Link>
    </div>
  );
}

export default EventCard;