import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({ username, jobTitle, postText, imageUrl, likes, comments, shares, reposts, postDate }) => {
    return (
        <div className="max-w-full mx-auto bg-slate-900 rounded-lg overflow-hidden border border-gray-300 mb-6 relative">
            {/* Header */}
            <div className="flex items-center p-2">
                <img
                    src="./comp.webp"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-4 object-contain border"
                />
                <div>
                    <h2 className="font-semibold">{username}</h2>
                    <p className="text-sm ">{jobTitle}</p>
                    <p className="text-xs ">{postDate}</p>
                </div>
            </div>

            {/* Post Content */}
            <div className="p-2">
                <p className=" mb-2 h-10">{postText}</p>
                {imageUrl && (
                    <img src={imageUrl} alt="Post" className="w-60 rounded-md object-cover border m-auto" />
                )}
            </div>

            {/* Footer (likes, comments, etc.) */}
            <div className="px-4 py-2 border-t border-gray-300 flex justify-between text-sm relative">
                <div className="flex items-center space-x-1">
                    <button className="flex items-center">
                        <FavoriteBorderIcon />
                        <span className="ml-1">{likes}</span>
                    </button>
                </div>
                <div className="flex items-center justify-evenly space-x-2">
                    <button className="flex items-center">
                        <InsertCommentIcon />
                        <span className="ml-1">{comments}</span>
                    </button>
                    <button className="flex items-center">
                        <ShareIcon />
                        <span className="ml-1">{reposts}</span>
                    </button>
                    <button className="flex items-center">
                        <ShareIcon /> 
                        <span className="ml-1">{shares}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;