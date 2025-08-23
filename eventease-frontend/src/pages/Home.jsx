import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to EventEase</h1>
      <p className="text-lg text-gray-600 mb-12">Select your role to get started</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <Link
          to="/purchaser"
          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:bg-blue-50 transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Ticket Purchaser</h2>
          <p className="text-gray-600">Browse events, select seats, and purchase tickets securely.</p>
        </Link>
        <Link
          to="/organiser"
          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:bg-blue-50 transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Organiser</h2>
          <p className="text-gray-600">Create and manage events, set pricing, and track sales.</p>
        </Link>
        <Link
          to="/admin"
          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:bg-blue-50 transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Administrator</h2>
          <p className="text-gray-600">Oversee events, approve organisers, and monitor platform activity.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;