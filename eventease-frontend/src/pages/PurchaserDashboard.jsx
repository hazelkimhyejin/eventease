import { useState } from 'react';
import ProfileForm from '../components/purchaser/ProfileForm';
import TicketViewer from '../components/purchaser/TicketViewer';
import OrderHistory from '../components/purchaser/OrderHistory';
import Socials from '../components/purchaser/Socials';

function PurchaserDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const mockTicket = { eventTitle: 'Concert: Rock Legends', seatId: 'A1' };

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Purchaser Dashboard</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full text-left p-2 rounded ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`w-full text-left p-2 rounded ${activeTab === 'tickets' ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}
          >
            Purchased Tickets
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`w-full text-left p-2 rounded ${activeTab === 'history' ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}
          >
            Order History
          </button>
          <button
            onClick={() => setActiveTab('socials')}
            className={`w-full text-left p-2 rounded ${activeTab === 'socials' ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}
          >
            Socials
          </button>
        </nav>
      </div>
      <div className="w-3/4 p-4">
        {activeTab === 'profile' && <ProfileForm />}
        {activeTab === 'tickets' && <TicketViewer ticket={mockTicket} />}
        {activeTab === 'history' && <OrderHistory />}
        {activeTab === 'socials' && <Socials />}
      </div>
    </div>
  );
}

export default PurchaserDashboard;