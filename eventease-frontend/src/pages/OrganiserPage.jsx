import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import EventForm from '../components/organiser/EventForm';

function OrganiserPage() {
  const authenticated = isAuthenticated();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (authenticated && isMounted) {
      navigate('/organiser/dashboard');
    }
    return () => setIsMounted(false);
  }, [authenticated, navigate]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Organiser</h1>
        <div className="flex space-x-4">
          <Link
            to="/register/organiser"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register as Organiser
          </Link>
          <br></br>
          <Link
            to="/login/organiser"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Organiser Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Organiser Dashboard</h1>
      <EventForm />
    </div>
  );
}

export default OrganiserPage;