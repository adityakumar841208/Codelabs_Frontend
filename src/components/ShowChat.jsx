import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

const ShowChat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  const state = location.state || {};

  // Sample chat array
  const chatMessages = [
    { id: 1, sender: 'user', message: 'Hi there!', time: '10:30 AM' },
    { id: 2, sender: 'other', message: 'Hello! How can I help you?', time: '10:32 AM' },
    { id: 3, sender: 'user', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 4, sender: 'other', message: 'Sure, let me check for you.', time: '10:36 AM' },
    { id: 3, sender: 'other', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'user', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'user', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'other', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'other', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'user', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'other', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'other', message: 'I need assistance with my account.', time: '10:35 AM' },
    { id: 3, sender: 'user', message: 'I need assistance with my account.', time: '10:35 AM' },
  ];

  // Scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <div className="text-black min-h-screen flex flex-col">
      {/* Header */}
      <div className="fixed w-7/12 top-16 flex items-center justify-between px-4 py-2 bg-gray-100 shadow-sm">
        <div className="group-data flex gap-2 items-center">
          <Button
            className="text-xl font-semibold hover:text-white"
            sx={{ background: 'rgb(24 118 45)', color: 'black' }}
            onClick={() => navigate('/home/community')}
          >
            <KeyboardBackspaceIcon />
          </Button>
          <div className="flex justify-center items-center gap-3">
            <img
              src="/comp.webp"
              alt={state.name}
              className="h-11 w-11 p-1 border border-gray-300 rounded-full"
            />
            <h1 className="text-xl font-semibold">{state.chatName || 'Chat'}</h1>
          </div>
        </div>

        <Button
          className="text-xl font-semibold rounded-lg hover:text-white"
          sx={{ background: 'rgb(24 118 45)', color: 'black' }}
        >
          <MoreVertIcon />
        </Button>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow flex flex-col justify-end overflow-auto p-2 mt-16">
        {chatMessages.map((chat) => (
          <div
            key={chat.id}
            className={`flex ${
              chat.sender === 'user' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`${
                chat.sender === 'user' ? 'bg-primary text-white' : 'bg-slate-400 text-black'
              } rounded-lg p-2 max-w-xs shadow-md`}
            >
              <p>{chat.message}</p>
              <span className="text-xs text-gray-800 block mt-1 text-right">
                {chat.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Area */}
      <div className="bottom-0 left-0 m-2 bg-gray-400 rounded-lg border-t p-4 flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow border rounded-lg p-2 focus:outline-none"
        />
        <Button
          variant="contained"
          sx={{ background: 'rgb(24 118 45)', color: 'white' }}
        >
          <SendIcon />
        </Button>
      </div>

    </div>
  );
};

export default ShowChat;
