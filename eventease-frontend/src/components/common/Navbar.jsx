import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search?q=${searchQuery}`;
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;