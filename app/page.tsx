'use client'
import { Provider } from "react-redux";
import { MessageScreen } from "./components/MessageScreen";
import { CommunicationListing } from "./modules/CommunicationListing/page";

import { store } from './store'

export default function ChatPage() {

  return <>
    <Provider store={store}>
      <CommunicationListing />
      {/* <MessageScreen /> */}
    </Provider>

  </>
}