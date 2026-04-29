import React, { useState } from 'react';

type MessageInputProps = {
    onSend: (payload: { message: string }) => void;
};

export const MessageInput = ({ onSend }: MessageInputProps) => {
    const [inputValue, setInputValue] = useState({ message: '' });

    const handleSend = () => {
        if (inputValue?.message?.trim()) {
            onSend({ message: inputValue?.message });
            setInputValue({ message: ''});
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="bg-white p-4 flex items-center gap-2">
            <input
                type="text"
                value={inputValue?.message}
                onChange={(e) => setInputValue({ message: e.target.value})}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 border-none focus:ring-2 focus:ring-blue-600 rounded-full px-4 py-2 text-sm outline-none"
            />
            <button
                onClick={e => handleSend()}
                disabled={!inputValue?.message?.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
        </div>
    );
};