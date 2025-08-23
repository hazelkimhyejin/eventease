function EventForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600">Event Title</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Date</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Create Event</button>
      </form>
    </div>
  );
}

export default EventForm;