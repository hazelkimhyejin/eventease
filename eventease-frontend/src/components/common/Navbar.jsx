import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserRole, isAuthenticated } from '../../utils/auth';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [role, setRole] = useState('guest');
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = getUserRole();
    setRole(userRole);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      if (isAuthenticated() && role === 'purchaser') {
        navigate(`/search?q=${searchQuery}`);
      } else {
        navigate(`/login/purchaser?redirect=/search?q=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  return (
    <nav className="bg-primary-600 text-white p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-primary-400 transition-colors">EventEase</Link>
        <div className="flex items-center space-x-6">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events or organisers..."
              className="input-field rounded-l-lg purchaser-accent"
              aria-label="Search events or organisers"
            />
            <button type="submit" className="btn-primary rounded-l-none">Search</button>
          </form>
          {role === 'purchaser' && isAuthenticated() && <Link to="/purchaser/dashboard" className="text-lg hover:text-primary-400 transition-colors">Dashboard</Link>}
          {role === 'organiser' && isAuthenticated() && <Link to="/organiser/dashboard" className="text-lg hover:text-primary-400 transition-colors">Dashboard</Link>}
          {role === 'admin' && isAuthenticated() && <Link to="/admin/dashboard" className="text-lg hover:text-primary-400 transition-colors">Dashboard</Link>}
          {role === 'guest' || !isAuthenticated() ? (
            <>
              <Link to="/register/purchaser" className="text-lg hover:text-primary-400 transition-colors">Register</Link>
              <Link to="/login/purchaser" className="text-lg hover:text-primary-400 transition-colors">Login</Link>
            </>
          ) : (
            <Link to="/logout" className="text-lg hover:text-primary-400 transition-colors">Logout</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;