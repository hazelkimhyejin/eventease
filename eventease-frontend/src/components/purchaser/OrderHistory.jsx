function OrderHistory() {
  const orders = [
    { id: 1, eventTitle: 'Concert: Rock Legends', date: '2025-09-15', status: 'Completed' },
    { id: 2, eventTitle: 'Theatre: Hamlet', date: '2025-10-01', status: 'Pending' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border-b pb-2">
            <p className="text-gray-600">Event: {order.eventTitle}</p>
            <p className="text-gray-600">Date: {order.date}</p>
            <p className="text-gray-600">Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;