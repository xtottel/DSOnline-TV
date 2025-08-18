"use client";
import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';

interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  isModerator?: boolean;
}

const ChatWidget = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      user: 'Moderator',
      message: 'Welcome to DS Online TV live chat! Be respectful to others.',
      timestamp: new Date(),
      isModerator: true
    },
    {
      id: '2',
      user: 'Kwame123',
      message: 'Excited for this stream! The production quality looks amazing.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      user: 'You',
      message: newMessage,
      timestamp: new Date()
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // In a real app, you would send this to your chat server
    // socket.emit('chat-message', message);
  };

  useEffect(() => {
    // Scroll to bottom when messages change
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });

    // Simulate incoming messages (replace with actual WebSocket connection)
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomUsers = ['Ama', 'Kofi', 'Esi', 'Yaw', 'Akosua'];
        const randomMessages = [
          'Great content!',
          'What camera are you using?',
          'The audio quality is excellent',
          'Can we get a close-up?',
          'Hello from Kumasi!'
        ];

        const simulatedMessage: ChatMessage = {
          id: Date.now().toString(),
          user: randomUsers[Math.floor(Math.random() * randomUsers.length)],
          message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
          timestamp: new Date()
        };

        setMessages(prev => [...prev, simulatedMessage]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-[500px] flex flex-col">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-600 p-4">
        <h3 className="text-white font-bold">Live Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            <div className="flex-shrink-0">
              <FaUserCircle 
                size={24} 
                className={msg.isModerator ? 'text-yellow-600' : 'text-gray-400'} 
              />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className={`font-semibold ${msg.isModerator ? 'text-yellow-600' : 'text-gray-900'}`}>
                  {msg.user}
                </span>
                <span className="text-xs text-gray-500">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-gray-700">{msg.message}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;