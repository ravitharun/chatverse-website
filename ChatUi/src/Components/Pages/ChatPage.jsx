import React from "react";
import { FaVideo, FaPhoneAlt } from "react-icons/fa"; // import icons
import Sidepage from "./Sidepage";

function ChatPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto">
        <Sidepage />
      </aside>

      {/* Main Chat Section */}
      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Username
              </h3>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>

          {/* Call Buttons with Icons */}
          <div className="flex gap-2">
            <button title="Video call" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-3xl">
              <FaVideo /> 
            </button>
            <button title="Voice call" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1.5 rounded-3xl">
              <FaPhoneAlt />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center text-gray-500 dark:text-gray-400">
            No messages yet. Start a conversation.
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
      </main>
    </div>
  );
}

export default ChatPage;
