function SalesAnalytics() {
  const salesData = [
    { event: 'Concert: Rock Legends', ticketsSold: 100, revenue: 5000 },
    { event: 'Theatre: Hamlet', ticketsSold: 50, revenue: 1500 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Sales Analytics</h2>
      <div className="space-y-4">
        {salesData.map((data, index) => (
          <div key={index} className="border-b pb-2">
            <p className="text-gray-600">Event: {data.event}</p>
            <p className="text-gray-600">Tickets Sold: {data.ticketsSold}</p>
            <p className="text-gray-600">Revenue: ${data.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesAnalytics;