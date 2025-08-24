import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserRole } from '../../utils/auth';

function Footer() {
  const [role, setRole] = useState('guest');

  useEffect(() => {
    const userRole = getUserRole();
    setRole(userRole);
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2025 EventEase. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/about" className="text-lg hover:text-primary-400 transition-colors" aria-label="About EventEase">About</Link>
          <Link to="/contact" className="text-lg hover:text-primary-400 transition-colors" aria-label="Contact Us">Contact</Link>
          <Link to="/terms" className="text-lg hover:text-primary-400 transition-colors" aria-label="Terms of Service">Terms</Link>
          {role === 'admin' && <Link to="/admin/support" className="text-lg hover:text-primary-400 transition-colors" aria-label="Admin Support">Admin Support</Link>}
        </div>
      </div>
    </footer>
  );
}

export default Footer;