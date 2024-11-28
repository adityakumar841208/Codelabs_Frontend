import React from 'react';
import { Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const PostOption = () => {
  return (
    <div className=" p-4 rounded-md shadow-md m-2 border">
      {/* Start a Post Section */}
      <div className="flex items-center space-x-3 p-3 bg-slate-100 rounded-lg mb-4 border">
        <img
          src="./comp.webp"
          alt="User Avatar"
          className="rounded-full w-10 h-10 border"
        />
        <input
          type="text"
          placeholder="Write here something..."
          className="w-full p-2 rounded-full text-black placeholder-black outline-none border"
        />
      </div>

      {/* Options Section */}
      <div className="flex justify-around text-gray-400">
        <Button startIcon={<InsertPhotoIcon />} sx={{background:"blue",color:"white"}} className="hover:bg-blue-800">
          Media
        </Button>
        <Button startIcon={<EventIcon sx={{color:'primary'}}/>} sx={{background:"blue",color:"white"}} className="hover:bg-blue-800">
          Event
        </Button>
        <Button startIcon={<ArticleIcon />} sx={{background:"blue",color:"white"}} className="hover:bg-blue-800">
          Write article
        </Button>
      </div>
    </div>
  );
};

export default PostOption;
