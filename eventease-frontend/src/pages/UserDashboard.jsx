import TicketViewer from '../components/purchaser/TicketViewer';

function UserDashboard() {
  const mockTicket = {
    eventTitle: 'Concert: Rock Legends',
    seatId: 'A1',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <TicketViewer ticket={mockTicket} />
    </div>
  );
}

export default UserDashboard;