import React, { useEffect } from "react";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import Sidepage from "./Sidepage";
import socket from "./Scoket";
function ChatPage({ roomId }) {
  useEffect(() => {
    socket.emit("joinRoom", { roomID: "tharun_pranav" });

    socket.emit("sendMessage", { message: "hi from user 1" });
    socket.on("receiveMessage", (data) => {
      console.log("📩 Received:", data.reply);
    });

    return () => {
      // Optionally leave room or clean up
      socket.off("receiveMessage");
    };
  }, [roomId]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto">
        <Sidepage />
      </aside>

      {/* Main Chat Section */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
              {"Tharun".charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Tharun Ravi
              </h3>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>

          {/* Call Buttons */}
          <div className="flex gap-2">
            <button
              title="Video Call"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full shadow"
            >
              <FaVideo />
            </button>
            <button
              title="Voice Call"
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white w-10 h-10 rounded-full shadow"
            >
              <FaPhoneAlt />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
          {/* Sender Message */}
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-xl shadow max-w-xs md:max-w-md">
              Hi from user1
            </div>
          </div>

          {/* Receiver Message */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow max-w-xs md:max-w-md">
              Hi reply from user1
            </div>
          </div>

          {/* More Messages can go here */}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChatPage;
