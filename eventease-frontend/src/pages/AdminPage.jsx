import UserManagement from '../components/admin/UserManagement';
import FraudMonitor from '../components/admin/FraudMonitor';

function AdminPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Administrator Dashboard</h1>
      <UserManagement />
      <FraudMonitor />
    </div>
  );
}

export default AdminPage;