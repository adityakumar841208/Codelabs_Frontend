import React from 'react';
import { Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const PostOption = () => {
  return (
    <div className="bg-slate-400 p-4 rounded-md shadow-md m-2 border border-customBorder">
      {/* Start a Post Section */}
      <div className="flex items-center space-x-3 p-3 bg-slate-200 rounded-lg mb-4 border border-customBorder">
        <img
          src="./comp.webp"
          alt="User Avatar"
          className="rounded-full w-10 h-10 border border-customBorder"
        />
        <input
          type="text"
          placeholder="Write here something..."
          className="w-full p-2 bg-slate-400 rounded-full text-black placeholder-black outline-none border"
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
