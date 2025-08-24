import { useState } from 'react';
import ChatInterface from './ChatInterface';

function Socials() {
  const [activeTab, setActiveTab] = useState('friends');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Socials</h2>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('friends')}
          className={`p-2 rounded ${activeTab === 'friends' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Friends
        </button>
        <button
          onClick={() => setActiveTab('buddy')}
          className={`p-2 rounded ${activeTab === 'buddy' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Find a Buddy
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`p-2 rounded ${activeTab === 'support' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Support
        </button>
      </div>
      {activeTab === 'friends' && <ChatInterface />}
      {activeTab === 'buddy' && <p className="text-gray-600">Find a Buddy feature coming soon!</p>}
      {activeTab === 'support' && <p className="text-gray-600">Contact support at support@eventease.com</p>}
    </div>
  );
}

export default Socials;