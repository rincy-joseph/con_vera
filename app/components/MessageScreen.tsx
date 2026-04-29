import { useDispatch, useSelector } from "react-redux"
import { ChatBubbles } from "./ChatBubbles"
import { RootState } from "../store"
import { io } from 'socket.io-client';
import { useEffect, useRef } from "react"
import { MessageInput } from "./MessageInput";
import { setMessages } from "../redux";
const socket = io("http://localhost:3001")

export const MessageScreen = () => {
    const dispatch = useDispatch()
    const systemAddress = useRef('')
    interface Individual {
        message: string
    }
    const { messages } = useSelector((state: RootState) => state.chat)

    console.log("CommonMessage message", messages)
    useEffect(() => {
        systemAddress.current = localStorage.getItem('user_uuid') || '';
        if (!systemAddress.current) {
            systemAddress.current = crypto.randomUUID();
            localStorage.setItem('user_uuid', systemAddress.current);
        }
        socket.on('receive_message', (data) => {
            console.log("CommonMessage systemAddress", systemAddress?.current)
            console.log("CommonMessage data.senderMAC", data.senderMAC)
            console.log("CommonMessage condition", systemAddress?.current == data.senderMAC)


            dispatch(setMessages({...data, sender: systemAddress?.current == data.senderMAC ? 'primary' : 'others'}))
        })
        return () => {
            socket.off("receive_message");
        };
    }, [])
    const handleSend = (messageIndiv: Individual) => {
        socket.emit("send_message", { ...messageIndiv, senderMAC: systemAddress.current });
    }
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom whenever messages change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);
    return <>
        <div className="flex flex-col flex-1 max-w-3xl w-full mx-auto h-screen bg-white shadow-lg overflow-hidden">
            <div className="p-4 bg-gray-100 font-bold">
                Chat Support
            </div>
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none"
            >
                <ChatBubbles message={messages} />
            </div>
            <div className="p-4 bg-white shrink-0">
                <MessageInput onSend={(data) => handleSend(data)} />
            </div>

        </div>
    </>
}