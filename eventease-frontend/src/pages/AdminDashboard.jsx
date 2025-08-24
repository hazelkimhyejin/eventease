import UserManagement from '../components/admin/UserManagement';
import FraudMonitor from '../components/admin/FraudMonitor';

function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Administrator Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserManagement />
        <FraudMonitor />
      </div>
    </div>
  );
}

export default AdminDashboard;