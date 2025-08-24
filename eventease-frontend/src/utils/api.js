export const fetchEvents = async () => {
  // Simulated API call
  return [
    { id: 1, title: 'Concert: Rock Legends', date: '2025-09-15', location: 'City Arena', price: 50 },
    { id: 2, title: 'Theatre: Hamlet', date: '2025-10-01', location: 'Downtown Theatre', price: 30 },
  ];
};

export const fetchEventById = async (id) => {
  // Simulated API call
  return {
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
};

export const createEvent = async (eventData) => {
  // Simulated API call
  return { success: true };
};

export const purchaseTicket = async ({ eventId, seats }) => {
  // Simulated API call for PayNow or other payment processing
  return { success: true };
};