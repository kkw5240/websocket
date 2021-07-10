import { createSlice } from '@reduxjs/toolkit'

export const chatRoomMngSlice = createSlice({
  name: 'chatRoomMng',
  initialState: {
    id : "all",
    name : "all"
  },
  reducers: {
    update: (state, action) => { 
      state.id = action.payload.roomId;
      state.name = action.payload.roomName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = chatRoomMngSlice.actions;
export const selectCount = state => state.counter.value;

export default chatRoomMngSlice.reducer;