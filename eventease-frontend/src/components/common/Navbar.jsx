import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserRole } from '../../utils/auth';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [role, setRole] = useState('guest');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search?q=${searchQuery}`;
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EventEase</Link>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
              className="p-2 rounded-l text-black"
            />
            <button type="submit" className="bg-blue-800 p-2 rounded-r">Search</button>
          </form>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          {role === 'purchaser' && (
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events..."
                className="p-2 rounded-l text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="submit" className="bg-blue-800 p-2 rounded-r hover:bg-blue-900 transition">Search</button>
            </form>
          )}
          {role === 'purchaser' && <Link to="/purchaser/dashboard" className="hover:underline">Dashboard</Link>}
          {role === 'organiser' && <Link to="/organiser/dashboard" className="hover:underline">Dashboard</Link>}
          {role === 'admin' && <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>}
          {role === 'guest' ? (
            <>
              <Link to="/register/purchaser" className="hover:underline">Register</Link>
              <Link to="/login/purchaser" className="hover:underline">Login</Link>
            </>
          ) : (
            <Link to="/logout" className="hover:underline">Logout</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;