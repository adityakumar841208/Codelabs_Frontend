import React from 'react';
import { Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const PostOption = () => {
  return (
    <div className="bg-slate-900 p-4 rounded-md shadow-md m-2 border">
      {/* Start a Post Section */}
      <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg mb-4">
        <img
          src="./comp.webp"
          alt="User Avatar"
          className="rounded-full w-10 h-10 border"
        />
        <input
          type="text"
          placeholder="Write here something..."
          className="w-full p-2 bg-gray-800 rounded-full text-gray-300 placeholder-gray-500 outline-none border"
        />
      </div>

      {/* Options Section */}
      <div className="flex justify-between text-gray-400">
        <Button startIcon={<InsertPhotoIcon />} className="text-gray-400 hover:bg-primaryHover hover:text-white">
          Media
        </Button>
        <Button startIcon={<EventIcon sx={{color:'primary'}}/>} className="text-gray-400 hover:bg-primaryHover hover:text-white">
          Event
        </Button>
        <Button startIcon={<ArticleIcon />} className="text-gray-400 hover:bg-primaryHover hover:text-white">
          Write article
        </Button>
      </div>
    </div>
  );
};

export default PostOption;
