import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from '../reduxSlices/ProfileSlice'
import ChatsSlice from '../reduxSlices/ChatsSlice'
import ChatBotSlice from '../reduxSlices/ChatBotSlice'

export const store = configureStore({
  reducer: {
    profile:ProfileReducer,
    chats:ChatsSlice,
    chatbot:ChatBotSlice,
  },
})

