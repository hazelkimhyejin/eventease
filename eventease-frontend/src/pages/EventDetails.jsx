import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SeatSelector from '../components/purchaser/SeatSelector';
import {purchaseTicket} from '../utils/api';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulated API call
    const fetchEvent = async () => {
      const mockEvent = {
        id,
        title: 'Concert: Rock Legends',
        date: '2025-09-15',
        location: 'City Arena',
        price: 50,
        description: 'An unforgettable night of rock music!',
        seats: [
          { id: 'A1', available: true },
          { id: 'A2', available: false },
          { id: 'B1', available: true },
        ],
      };
      setEvent(mockEvent);
    };
    fetchEvent();
  }, [id]);

  const handleSeatSelect = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const handlePurchase = async () => {
    try {
      const response = await purchaseTicket({ eventId: id, seats: selectedSeats });
      if (response.success) {
        setMessage('Purchase successful! Confirmation email sent.');
        setTimeout(() => navigate('/purchaser/dashboard'), 2000);
      } else {
        setMessage('Purchase failed. Please try again.');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (!event) return <div className="text-center text-gray-600 p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{event.title}</h1>
      <p className="text-gray-600">Date: {event.date}</p>
      <p className="text-gray-600">Location: {event.location}</p>
      <p className="text-gray-600">Price: ${event.price}</p>
      <p className="mt-4 text-gray-600">{event.description}</p>
      <h2 className="text-2xl font-semibold text-blue-600 mt-6">Select Seats</h2>
      <SeatSelector seats={event.seats} onSelect={handleSeatSelect} />
      {message && <p className={message.includes('success') ? 'text-green-600' : 'text-red-600'}>{message}</p>}
      <button
        onClick={handlePurchase}
        className="mt-6 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
        disabled={selectedSeats.length === 0}
      >
        Purchase Tickets
      </button>
    </div>
  );
}

export default EventDetails;