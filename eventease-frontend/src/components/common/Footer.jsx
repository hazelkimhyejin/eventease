import { useEffect, useState } from 'react';
import { getUserRole } from '../../utils/auth';

function Footer() {
  const [role, setRole] = useState('guest');

  useEffect(() => {
    const userRole = getUserRole();
    setRole(userRole);
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto shadow-inner">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 EventEase. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/terms" className="hover:underline">Terms</a>
          {role === 'admin' && <a href="/admin/support" className="hover:underline">Admin Support</a>}
        </div>
      </div>
    </footer>
  );
}

export default Footer;