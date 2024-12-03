import React,{useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({ username, jobTitle, postText, imageUrl, likes, comments, shares, reposts, postDate }) => {
    const [follow, setFollow] = useState(false)
    return (
        <div className="w-full mx-auto rounded-lg overflow-hidden shadow-md border mb-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center p-2">
                    <img
                        src="./coder2.jpg"
                        alt="Profile"
                        className="w-12 h-12 rounded-full mr-2 object-contain"
                    />
                    <div>
                        <h2 className="font-semibold">{username}</h2>
                        <p className="text-sm ">{jobTitle}</p>
                        <p className="text-xs ">{postDate}</p>
                    </div>
                </div>
                <div className="bg-blue-700 text-white rounded-lg px-3 py-1 cursor-pointer mr-6" onClick={()=>setFollow(!follow)}>
                    {follow ? 'Followed':'Follow'}
                </div>
            </div>

            {/* Post Content */}
            <div>
                <p className="p-2">{postText}</p>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Post"
                        className="w-full object-cover"
                    />
                )}
            </div>

            {/* Footer (likes, comments, etc.) */}
            <div className="px-4 py-2 border-t border-gray-300 flex justify-between text-sm">
                <div className="flex items-center space-x-1">
                    <button className="flex items-center">
                        <FavoriteBorderIcon />
                        <span className="ml-1">{likes}</span>
                    </button>
                </div>
                <div className="flex items-center justify-evenly space-x-2 gap-2">
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
