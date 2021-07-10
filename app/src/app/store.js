import { configureStore } from '@reduxjs/toolkit'
import chatRoomMngReducer from "./chatRoomMng";

export default configureStore({
  reducer: {
    chatRoomMng: chatRoomMngReducer,
  },
})