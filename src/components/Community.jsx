import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Community = () => {
    const navigate = useNavigate()
    const [isOnline, setIsOnline] = useState(true);
    const [isUnseen, setIsUnseen] = useState(true);
    const data = [
        { name: 'User 1', isOnline: true, isUnseen: false, recentmessage: "hello this is aditya" },
        { name: 'User 2', isOnline: false, isUnseen: true, recentmessage: "hello this is aditya" },
        { name: 'User 3', isOnline: true, isUnseen: true, recentmessage: "hello this is aditya" },
        { name: 'User 4', isOnline: false, isUnseen: false, recentmessage: "hello this is aditya" },
        { name: 'User 5', isOnline: false, isUnseen: false, recentmessage: "hello this is aditya" },
        { name: 'User ', isOnline: false, isUnseen: false, recentmessage: "hello this is aditya" },
        { name: 'User 6', isOnline: true, isUnseen: false, recentmessage: "hello this is aditya" },
        { name: 'User 7', isOnline: false, isUnseen: true, recentmessage: "hello this is aditya" },
        { name: 'User 8', isOnline: false, isUnseen: false, recentmessage: "hello this is aditya" },
        { name: 'User 9', isOnline: true, isUnseen: false, recentmessage: "hello this is aditya" },
        { name: 'User 10', isOnline: false, isUnseen: false, recentmessage: "hello this is aditya" },
    ]

    const showChat = (itemname) => {
        console.log(itemname)
        navigate("/home/community/chat", { state: { "chatName": itemname } });
    }

    return (
        <div className='px-2 mb-2'>

            <div className='sticky top-16 z-3 bg-white'>
                <div className="flex justify-around items-center">
                    <div className='w-full flex center text-blue-950 font-extrabold text-2xl my-3 px-6'>
                        Chats
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

                {/* divider  */}
                <hr className='border my-2 mt-18'></hr>
            </div>

            {/* tags  */}
            <div className="tags flex items-center justify-start m-2 gap-4 text-white">
                <div className='p-2 bg-gray-600 rounded-3xl'>messages</div>
                <div className='p-2 bg-gray-600 rounded-3xl'>friend</div>
            </div>

            {/* chats wrapper  */}
            <div className='chats flex flex-col item-center justify-start gap-2'>
                {/* chats  */}
                {data.map((item, i) => (
                    <>
                        {/* chats  */}
                        <div key={item.name} className="chat p-3 bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer" onClick={() => showChat(item.name)}>
                            <div className='flex items-center justify-start'>

                                {/* image  */}
                                <div className="image h-6 flex items-center justify-center p-2 rounded">
                                    <img
                                        className='h-10 md:h-12 w-10 md:w-12 rounded-full border-2 border-customBorder p-1'
                                        src="../comp.webp" alt=""
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

                            {/* user update  */}
                            <div className='flex flex-col items-end'>
                                {item.isOnline ? (
                                    <div className='text-green-700 font-bold'>
                                        online
                                    </div>
                                ) : (
                                    <div className='font-bold mb-3'>02:14</div>
                                )}

                                {/* check that is there unseen message */}
                                {item.isUnseen &&
                                    <div className='bg-green-700 h-6 w-6 rounded-full text-white flex items-center justify-center'>
                                        45
                                    </div>
                                }
                            </div>
                        </div>
                    </>
                )
                )}
            </div>
        </div>
    )
}

export default Community