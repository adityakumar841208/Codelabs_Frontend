import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Community = () => {
    const navigate = useNavigate();

    // const data = [
    //     {
    //         name: 'ChatBot',
    //         isOnline: true,
    //         isUnseen: 'chatbot',
    //         recentmessage: "hello this is aditya",
    //         imgSrc: "../coder.jpg"
    //     },
    //     {
    //         name: 'Group 1',
    //         isOnline: true,
    //         isUnseen: false,
    //         recentmessage: "hello this is aditya",
    //         imgSrc: "../coder.jpg"
    //     },
    //     {
    //         name: 'Group 2',
    //         isOnline: false,
    //         isUnseen: true,
    //         recentmessage: "hello this is aditya",
    //         imgSrc: "../coder.jpg"
    //     },
    //     {
    //         name: 'Group 3',
    //         isOnline: true,
    //         isUnseen: true,
    //         recentmessage: "hello this is aditya",
    //         imgSrc: "../coder.jpg"
    //     },
    //     {
    //         name: 'Group 4',
    //         isOnline: false,
    //         isUnseen: false,
    //         recentmessage: "hello this is aditya",
    //         imgSrc: "../coder.jpg"
    //     },
    // ];
    const data2 = useSelector((state) => state.chats)

    const showChat = (itemname) => {
        console.log(itemname);
        navigate("/home/community/chat", { state: { "chatName": itemname } });
    };

    return (
        <div className='px-2 mb-2 w-full'>
            {/* header */}
            <div className='sticky top-16 z-3 bg-white'>
                <div className="flex justify-around items-center">
                    <div className='w-full flex center text-blue-950 font-extrabold text-2xl px-1 py-2'>
                        Community
                    </div>
                    <div className="lefticon flex justify-between items-center gap-10">
                        <div className='rounded-md cursor-pointer'>
                            <AddBoxIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className='rounded-md cursor-pointer'>
                            <SearchIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className='rounded-md cursor-pointer'>
                            <MoreVertIcon sx={{ fontSize: "30px" }} />
                        </div>
                    </div>
                </div>

                {/* divider */}
                <hr className='border my-2 mt-18'></hr>
            </div>

            {/* tags */}
            <div className="tags flex items-center justify-between m-2 gap-4 text-white">
                <div className='flex items-center m-2 gap-4 text-white'>
                    <div className='px-2 py-1 bg-gray-600 rounded-3xl'>messages</div>
                    <div className='px-2 py-1 bg-gray-600 rounded-3xl'>friend</div>
                </div>
                <div>
                    <button className='px-2 py-1 bg-gray-600 rounded-3xl'>
                        Explore Groups
                    </button>
                </div>
            </div>

            {/* chats wrapper */}
            <div className='chats w-full flex flex-col item-center justify-start gap-2'>

                {/* ChatBot  */}
                <div
                    className="chat p-3 bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer"
                    onClick={() => navigate("/home/community/chatbot")}
                >
                    <div className='flex items-center justify-start'>
                        {/* image */}
                        <div className="image h-6 flex items-center justify-center p-2 rounded">
                            <img
                                className='h-10 md:h-12 w-10 md:w-12 rounded-full border-2 border-customBorder p-1'
                                src="../chatbot.jpg"
                                alt=""
                            />
                        </div>

                        {/* chat name */}
                        <div className='flex flex-col'>
                            <div className='text-2xl'>
                                ChatBot
                            </div>
                            <div className=' mx-1 text-sm'>
                                Nothing here
                            </div>
                        </div>
                    </div>

                    {/* user update */}
                    <div className='flex flex-col items-end'>
                            <div className='text-green-700 font-bold'>
                                online
                            </div>
                        {/* {/* check that is there unseen message 
                        {(item.isUnseen && item.isUnseen !== "chatbot") &&
                            <div className='bg-green-700 h-6 w-6 rounded-full text-white flex items-center justify-center'>
                                45
                            </div>
                        }*/}
                    </div>

                </div>

                {/* chats */}
                {data2.map((item, i) => (
                    <div
                        key={item.name}
                        className="chat p-3 bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer"
                        onClick={() => showChat(item.name)}
                    >
                        <div className='flex items-center justify-start'>
                            {/* image */}
                            <div className="image h-6 flex items-center justify-center p-2 rounded">
                                <img
                                    className='h-10 md:h-12 w-10 md:w-12 rounded-full border-2 border-customBorder p-1'
                                    src={item.imgSrc}
                                    alt=""
                                />
                            </div>

                            {/* chat name */}
                            <div className='flex flex-col'>
                                <div className='text-2xl'>
                                    {item.name}
                                </div>
                                <div className=' mx-1 text-sm'>
                                    {item.recentmessage}
                                </div>
                            </div>
                        </div>

                        {/* user update */}
                        <div className='flex flex-col items-end'>
                            {item.isOnline ? (
                                <div className='text-green-700 font-bold'>
                                    online
                                </div>
                            ) : (
                                <div className='font-bold mb-3'>
                                    {item.isUnseen === 'chatbot' ? '' : '02:14'}
                                </div>
                            )}

                            {/* check that is there unseen message */}
                            {(item.isUnseen && item.isUnseen !== "chatbot") &&
                                <div className='bg-green-700 h-6 w-6 rounded-full text-white flex items-center justify-center'>
                                    45
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
