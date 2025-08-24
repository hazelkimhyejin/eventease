import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import UserManagement from '../components/admin/UserManagement';
import FraudMonitor from '../components/admin/FraudMonitor';

function AdminPage() {
  const authenticated = isAuthenticated();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (authenticated && isMounted) {
      navigate('/admin/dashboard');
    }
    return () => setIsMounted(false);
  }, [authenticated, navigate]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Administrator</h1>
        <div className="flex space-x-4">
          <Link
            to="/register/admin"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register as Admin
          </Link>
          <Link
            to="/login/admin"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Admin Log In
          </Link>
        </div>
      </div>
    );
  }

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

export default AdminPage;