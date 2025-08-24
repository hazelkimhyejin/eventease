import EventForm from '../components/organiser/EventForm';
import SalesAnalytics from '../components/organiser/SalesAnalytics';

function OrganiserDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Organiser Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EventForm />
        <SalesAnalytics />
      </div>
    </div>
  );
}

export default OrganiserDashboard;