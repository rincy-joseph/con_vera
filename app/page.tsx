'use client'
import { Provider } from "react-redux";
import { MessageScreen } from "./components/MessageScreen";
import { store } from './store'

export default function ChatPage() {
  return <>
    <Provider store={store}>
      <MessageScreen />
    </Provider>

  </>
}