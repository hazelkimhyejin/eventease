function UserManagement() {
  const organisers = [
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Smith', status: 'Approved' },
  ];

  const handleApprove = (id) => {
    console.log(`Approved organiser ${id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Organiser Management</h2>
      <div className="space-y-4">
        {organisers.map((organiser) => (
          <div key={organiser.id} className="border-b pb-2 flex justify-between">
            <div>
              <p className="text-gray-600">Name: {organiser.name}</p>
              <p className="text-gray-600">Status: {organiser.status}</p>
            </div>
            {organiser.status === 'Pending' && (
              <button
                onClick={() => handleApprove(organiser.id)}
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
              >
                Approve
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserManagement;