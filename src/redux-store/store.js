import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from '../reduxSlices/ProfileSlice'

export const store = configureStore({
  reducer: {
    profile:ProfileReducer,
  },
})

