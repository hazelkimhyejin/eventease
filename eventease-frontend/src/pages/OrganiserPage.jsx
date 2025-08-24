import EventForm from '../components/organiser/EventForm';

function OrganiserPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Organiser Dashboard</h1>
      <EventForm />
    </div>
  );
}

export default OrganiserPage;