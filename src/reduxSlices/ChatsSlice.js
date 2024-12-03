import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: 'ChatBot',
        isOnline: true,
        isUnseen: 'chatbot',
        recentmessage: "I'm good, how about you?",
        imgSrc: "/coder.jpg",
        messages: [
            { id: 1, sentBy: 'me', timestamp: '2024-12-03T10:00:00Z', message: 'Hello, this is Aditya.' },
            { id: 2, sentBy: 'other', timestamp: '2024-12-03T10:01:00Z', message: 'Hi Aditya, how are you?' },
            { id: 3, sentBy: 'me', timestamp: '2024-12-03T10:02:00Z', message: 'I am doing great, thank you!' },
            { id: 4, sentBy: 'other', timestamp: '2024-12-03T10:03:00Z', message: "I'm good, how about you?" }
        ],
    },
    {
        name: 'Group 1',
        isOnline: true,
        isUnseen: false,
        recentmessage: "Let's meet at 5 PM.",
        imgSrc: "/coder.jpg",
        messages: [
            { id: 1, sentBy: 'me', timestamp: '2024-12-03T09:00:00Z', message: 'Hi Group 1!' },
            { id: 2, sentBy: 'other', timestamp: '2024-12-03T09:05:00Z', message: 'Hey, what’s up?' },
            { id: 3, sentBy: 'me', timestamp: '2024-12-03T09:10:00Z', message: "Let's meet at 5 PM." },
        ],
    },
    {
        name: 'Group 2',
        isOnline: false,
        isUnseen: true,
        recentmessage: "Meeting postponed to tomorrow.",
        imgSrc: "/coder.jpg",
        messages: [
            { id: 1, sentBy: 'me', timestamp: '2024-12-03T08:30:00Z', message: 'Good morning Group 2!' },
            { id: 2, sentBy: 'other', timestamp: '2024-12-03T08:35:00Z', message: 'Morning! What’s today’s agenda?' },
            { id: 3, sentBy: 'me', timestamp: '2024-12-03T08:40:00Z', message: 'Meeting postponed to tomorrow.' },
        ],
    },
    {
        name: 'Group 3',
        isOnline: true,
        isUnseen: true,
        recentmessage: "Can someone share the notes?",
        imgSrc: "/coder.jpg",
        messages: [
            { id: 1, sentBy: 'other', timestamp: '2024-12-03T07:30:00Z', message: 'Hey everyone!' },
            { id: 2, sentBy: 'me', timestamp: '2024-12-03T07:35:00Z', message: 'Hi, any updates on the project?' },
            { id: 3, sentBy: 'other', timestamp: '2024-12-03T07:40:00Z', message: "Can someone share the notes?" },
        ],
    },
    {
        name: 'Group 4',
        isOnline: false,
        isUnseen: false,
        recentmessage: "Sounds good, let’s finalize it.",
        imgSrc: "/coder.jpg",
        messages: [
            { id: 1, sentBy: 'me', timestamp: '2024-12-03T06:00:00Z', message: 'Should we finalize the venue?' },
            { id: 2, sentBy: 'other', timestamp: '2024-12-03T06:05:00Z', message: 'Sounds good, let’s finalize it.' },
        ],
    },
];


const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        // Add a new chat
        addChat(state, action) {
            state.push(action.payload);
        },
        // Update an existing chat by name
        updateChat(state, action) {
            const { name, updates } = action.payload;
            const chatIndex = state.findIndex(chat => chat.name === name);
            if (chatIndex !== -1) {
                state[chatIndex] = { ...state[chatIndex], ...updates };
            }
        },
        // Remove a chat by name
        removeChat(state, action) {
            return state.filter(chat => chat.name !== action.payload);
        },
        // Add a message to a specific chat
        addMessage(state, action) {
            const { name, message } = action.payload;
            const chat = state.find(chat => chat.name === name);
            if (chat) {
                chat.messages.push(message);
                chat.recentmessage = message.message;
                chat.isUnseen = true; // Mark as unseen if a new message is added
            }
        },
    },
});

export const { addChat, updateChat, removeChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
