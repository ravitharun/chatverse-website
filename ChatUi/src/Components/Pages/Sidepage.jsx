import React from "react";

function Sidepage() {
  const name = "thaun";
  return (
    <div className="p-4 max-h-screen overflow-y-auto">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search users..."
        className="w-full mb-4 px-4 py-2 text-sm md:text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* User Bubble */}
      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition">
        {/* Left: Avatar and Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white truncate">
              Tharun Ravi
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              Hey there!
            </p>
          </div>
        </div>

        {/* Right: Message Badge */}
        <div className="bg-blue-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full shadow-sm">
          3
        </div>
      </div>
    </div>
  );
}

export default Sidepage;
