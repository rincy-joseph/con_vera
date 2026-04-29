import { createSlice } from '@reduxjs/toolkit';
export interface Message {
  message: string,
  sender: "primary" | "others"
}
interface chatState {
  messages: Message[];
  activeChatId: string | null;
}
const initialState: chatState = {
  messages: [], 
  activeChatId: null,
}
const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    updateMessageStatus: (state, action) => {
    //   const message = state.messages.find(m => m.id === action.payload.tempId);
    //   if (message) {
    //     message.status = 'sent';
    //     message.id = action.payload.finalId; 
    //   }
    },
    setMessages: (state, action) => {
      state.messages = [...state.messages, action.payload];
    }
  }
});

export const { addMessage, updateMessageStatus, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
