import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: 'ChatBot',
        isOnline: true,
        isUnseen: false, // Initial unseen status
        recentmessage: "I'm good, how about you?",
        imgSrc: "/chatbot.jpg",
        messages: [
        ],
    },
];

const chatSlice = createSlice({
    name: "chatbot",
    initialState,
    reducers: {
        // Add a message to the ChatBot
        addMessage(state, action) {
            const { message } = action.payload;
            const chat = state.find(chat => chat.name === 'ChatBot');
            if (chat) {
                chat.messages.push(message);
                chat.recentmessage = message.message;
                chat.isUnseen = true;
            }
        },
        // Mark all ChatBot messages as seen
        markAsSeen(state) {
            const chat = state.find(chat => chat.name === 'ChatBot');
            if (chat) {
                chat.isUnseen = false;
            }
        },
        // Update ChatBot's online status
        updateOnlineStatus(state, action) {
            const chat = state.find(chat => chat.name === 'ChatBot');
            if (chat) {
                chat.isOnline = action.payload;
            }
        },
    },
});

export const { addMessage, markAsSeen, updateOnlineStatus } = chatSlice.actions;
export default chatSlice.reducer;
