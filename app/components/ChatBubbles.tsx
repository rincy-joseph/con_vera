export interface Message {
    message: string,
    sender: "primary" | "others"
}
type props = {
    message: Message[]
}
export const ChatBubbles = ({ message }: props) => {
    return <>
        {message.map((item, index) =>
            <div key={index} className={`flex mt-2 ml-4 ${item?.sender === 'primary' ? "justify-end" : "justify-start"}`}>
                <div
                    className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${(item?.sender === "primary" ? "bg-blue-600 text-white mr-6  rounded-br-none" : "bg-gray-200 text-gray-900 rounded-bl-none")}`}
                >
                    {item.message}
                </div>
            </div>
)}
    </>
}