function FraudMonitor() {
  const activities = [
    { id: 1, event: 'Suspicious login attempt', timestamp: '2025-08-24 10:00' },
    { id: 2, event: 'Multiple ticket purchases', timestamp: '2025-08-24 11:00' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Fraud Monitoring</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b pb-2">
            <p className="text-gray-600">Event: {activity.event}</p>
            <p className="text-gray-600">Timestamp: {activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FraudMonitor;