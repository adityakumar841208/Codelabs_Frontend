import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Box, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { addMessage } from '../reduxSlices/ChatBotSlice'; // Ensure correct import of chatSlice
import axios from 'axios';

const ChatBot = () => {
  const navigate = useNavigate();
  const chatEndRef = useRef(null);
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const chatBot = useSelector((state) => state.chatbot[0]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatBot]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleFileSubmit = () => {
    console.log('File submitted:', selectedFile);
    setOpenModal(false);
  };

  const handleSendMessage = async () => {
    if (messageText.trim()) {
      const userMessage = {
        id: Date.now(),
        sentBy: 'me',
        timestamp: new Date().toISOString(),
        message: messageText.trim(),
      };
      dispatch(addMessage({ message: userMessage }));
      setMessageText('');
  
      const url = 'https://chatgpt-42.p.rapidapi.com/'; 
      const options = {
        method: 'GET', 
        url: url,
        headers: {
          'x-rapidapi-key': '2bc6463482mshda856378a9d6b35p178a9ejsn9f1ee30cb80b',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        params: { query: messageText.trim() },
      };
  
      try {
        const response = await axios.request(options);
        console.log(response)
        const result = response.data;
  
        const botMessage = {
          id: Date.now() + 1,
          sentBy: 'bot',
          timestamp: new Date().toISOString(),
          message: result.response || "No response from bot",  // Ensure fallback if no response
        };
  
        dispatch(addMessage({ message: botMessage }));
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching bot response:', error);
      }
    }
  };
  
  
  

  return (
    <div className="text-black min-h-screen flex flex-col px-2 mb-2 w-full">
      {/* Header */}
      <div className="sticky top-16 z-3 bg-white">
        <div className="flex justify-between items-center">
          <div className="group-data flex gap-1 items-center px-1">
            <Button
              className="text-sm font-semibold hover:text-black bg:gray-200"
              onClick={() => navigate('/home/community')}
            >
              <KeyboardBackspaceIcon />
            </Button>
            <div className="flex justify-center items-center gap-3">
              <img
                src={chatBot.imgSrc}
                alt={chatBot.name || 'Chat'}
                className="h-11 w-11 p-1 border border-gray-300 rounded-full"
              />
              <h1 className="text-xl font-semibold">{chatBot.name || 'Chat'}</h1>
            </div>
          </div>
          <Button className="text-sm font-semibold hover:text-black bg:gray-200 rounded-lg">
            <MoreVertIcon />
          </Button>
        </div>
        <hr className="border my-2 mt-18" />
      </div>

      {/* Chat Messages */}
      <div className="flex-grow flex flex-col justify-end overflow-auto p-2 mt-16">
        {chatBot.messages.map((chat) => (
          <div
            key={chat.id}
            className={`flex ${chat.sentBy === 'me' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div
              className={`${
                chat.sentBy === 'me'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-400 text-black'
              } rounded-lg p-2 max-w-xs shadow-md`}
            >
              <p>{chat.message}</p>
              <span className="text-xs text-gray-900 block mt-1 text-right">
                {new Date(chat.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Area */}
      <div className="bottom-0 sticky left-0 m-2 bg-gray-400 rounded-sm p-4 flex gap-2 items-center shadow-md">
        <Button
          variant="contained"
          size="small"
          sx={{
            background: '#3b82f6',
            color: 'white',
            boxShadow: 'none',
            padding: '9px 12px',
            '&:hover': {
              backgroundColor: '#3b82f9',
            },
          }}
          onClick={() => setOpenModal(true)}
        >
          <AttachFileIcon fontSize="medium" />
        </Button>
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow border rounded-md p-2 h-11 focus:outline-none bg-white text-sm"
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            background: '#3b82f6',
            color: 'white',
            boxShadow: 'none',
            padding: '9px 12px',
            '&:hover': {
              backgroundColor: '#3b82f9',
            },
          }}
          onClick={handleSendMessage}
        >
          <SendIcon fontSize="medium" />
        </Button>
      </div>

      {/* Modal for File Upload */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="file-upload-modal"
        aria-describedby="select-file-and-submit"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            boxShadow: 24,
            borderRadius: '8px',
            padding: 2,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Select a file to upload
          </Typography>
          <div className="mb-2">
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label
              htmlFor="file-input"
              style={{
                display: 'block',
                width: '100%',
                height: '50px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                border: '1px solid #ccc',
              }}
            >
              {selectedFile ? selectedFile.name : 'Choose a file'}
            </label>
          </div>
          {filePreview && (
            <div className="mb-2">
              <Typography variant="body2">Preview:</Typography>
              <img
                src={filePreview}
                alt="File Preview"
                className="w-full max-h-60 mt-2"
              />
            </div>
          )}
          <Button
            variant="contained"
            sx={{ backgroundColor: '#3b82f6', color: 'white', width: '100%' }}
            onClick={handleFileSubmit}
          >
            Submit File
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ChatBot;
