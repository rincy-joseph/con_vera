type props = {
    message: {
        text: string,
        sender: "primary" | "secondary"
    }
}
export const ChatBubbles = ({ message }: props) => {
    const isMe = true
    return <>
        <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${(message?.sender === "primary" ? "bg-blue-600 text-white mr-6  rounded-br-none" : "bg-gray-200 text-gray-900 rounded-bl-none")}`}
            >
                {message.text}
            </div>
        </div>
    </>
}