function TicketViewer({ ticket }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">Ticket: {ticket.eventTitle}</h2>
      <p className="text-gray-600">Seat: {ticket.seatId}</p>
      <p className="text-gray-600">QR Code: [Placeholder]</p>
      <button className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Download Ticket</button>
    </div>
  );
}

export default TicketViewer;