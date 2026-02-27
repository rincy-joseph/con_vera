import { ChatBubbles } from "./ChatBubbles"

export const MessageScreen = () => {
    return <>
        <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white shadow-lg">

            {/* Header */}
            {/* <div className="sticky top-0 bg-white p-4 font-semibold text-lg">*/}
            <div className="sticky top-0 z-50 bg-white p-4 font-semibold text-lg shadow-md"> 
                Chat Room
            </div>
            <div className="mt-3">
            <ChatBubbles message={{text: '', sender: 'me'} }/>
            </div>
        </div>
    </>
}