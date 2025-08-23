import { useParams } from 'react-router-dom';
   import { useEffect, useState } from 'react';
   import SeatSelector from '../components/purchaser/SeatSelector';

   function EventDetails() {
     const { id } = useParams();
     const [event, setEvent] = useState(null);

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
       console.log(`Selected seat: ${seatId}`);
     };

     if (!event) return <div>Loading...</div>;

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
         <p className="text-gray-600">Date: {event.date}</p>
         <p className="text-gray-600">Location: {event.location}</p>
         <p className="text-gray-600">Price: ${event.price}</p>
         <p className="mt-4">{event.description}</p>
         <h2 className="text-2xl font-semibold mt-6">Select Seats</h2>
         <SeatSelector seats={event.seats} onSelect={handleSeatSelect} />
         <button className="mt-6 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Purchase Tickets</button>
       </div>
     );
   }

   export default EventDetails;