'use client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import chatReducer from './redux'; // This pulls the default export we fixed above

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}