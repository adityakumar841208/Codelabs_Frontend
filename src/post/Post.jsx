import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';

const Post = ({ username, jobTitle, postText, imageUrl, likes, comments, shares, reposts, postDate }) => {
    const [liked, setLiked] = useState(false); //like state
    const [likeCount, setLikeCount] = useState(likes);
    const [commentText, setCommentText] = useState("");
    const [commentCount, setCommentCount] = useState(comments);
    const [shareCount, setShareCount] = useState(shares);
    const [showComments, setShowComments] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    const handleCommentSubmit = () => {
        if (commentText.trim()) {
            setCommentCount((prev) => prev + 1); // Increment comments
            setCommentText(""); // Clear input field
            alert("Comment Done!");
        }
    };

    const handleShare = () => {
        setShareCount((prev) => prev + 1); // Increment share count
        alert("Post shared!");
    };

    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing); // Toggle follow state
    };

    return (
        <div className="w-full mx-auto rounded-lg overflow-hidden shadow-md border mb-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center p-2 cursor-pointer">
                    <img
                        src="./coder2.jpg"
                        alt="Profile"
                        className="w-12 h-12 rounded-full mr-2 object-contain"
                    />
                    <div>
                        <h2 className="font-semibold overflow-hidden line-clamp-1 hover:underline cursor-pointer">{username}</h2>
                        <p className="text-sm overflow-hidden line-clamp-1">{jobTitle}</p>
                        <p className="text-xs overflow-hidden line-clamp-1">{postDate}</p>
                    </div>
                </div>
                <button
                    className={`px-2 py-1 mr-2 md:mr-4 md:px-3 md:py-2 rounded-lg text-white ${isFollowing ? 'bg-gray-500' : 'bg-blue-800'
                        }`}
                    onClick={handleFollowToggle}
                >
                    {isFollowing ? 'Following' : 'Follow'}
                </button>
            </div>

            {/* Post Content */}
            <div>
                <p className={`p-1 line-clamp-2 sm:line-clamp-3`}>
                    {postText}
                </p>
                {imageUrl && (
                    <div className="w-full">
                        <img
                            src={imageUrl}
                            alt="Post"
                            className="w-full h-auto object-cover cursor-pointer"
                            onClick={() => setShowImageModal(true)} // Show modal on click
                        />
                    </div>
                )}
            </div>

            {/* Footer (likes, comments, etc.) */}
            <div className="px-4 py-2 border-t border-gray-300 flex justify-between text-sm">
                {/* Likes */}
                <div className="flex items-center space-x-1 cursor-pointer" onClick={handleLikeToggle}>
                    <button
                        className={`flex items-center ${liked ? "text-red-500 animate-bounceLike" : ""
                            }`}
                    >
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </button>
                    <span className="ml-1">{likeCount}</span>
                </div>


                {/* Comments */}
                <div className="flex items-center justify-evenly space-x-2 gap-2">
                    <button
                        className="flex items-center"
                        onClick={() => setShowComments(!showComments)}
                    >
                        <InsertCommentIcon />
                        <span className="ml-1">{commentCount}</span>
                    </button>

                    {/* Shares */}
                    <button className="flex items-center" onClick={handleShare}>
                        <ShareIcon />
                        <span className="ml-1">{shareCount}</span>
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            {showComments && (
                <div className="px-4 py-2">
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></textarea>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={handleCommentSubmit}
                    >
                        Post Comment
                    </button>
                </div>
            )}

            {/* Image Modal */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setShowImageModal(false)}>
                    <div className="relative">
                        <img
                            src={imageUrl}
                            alt="Fullscreen"
                            className="max-w-full max-h-screen object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={() => setShowImageModal(false)} // Close modal
                        >
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
