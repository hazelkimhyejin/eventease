import { useState } from 'react';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Chat with Friends</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <span className="font-semibold">{msg.sender}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Type a message..."
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 transition">Send</button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600">Upload media (photos, videos, files) feature coming soon!</p>
      </div>
    </div>
  );
}

export default ChatInterface;