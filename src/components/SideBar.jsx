import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { datacontext } from "./context/Usercontext";

function SideBar() {
  const { resentPrompt } = useContext(datacontext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-gray-800 text-white dark:bg-gray-200 dark:text-black h-screen p-4 flex flex-col items-start space-y-6 transition-all duration-200 ${
        isCollapsed ? "w-[5%]" : "w-[13%]"
      } hidden lg:flex`} // Hide on mobile, visible on large screens
    >
      {/* Hamburger Icon */}
      <div>
        <FaBars
          className="text-2xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-800 ml-2"
          onClick={toggleSidebar}
        />
      </div>

      {/* New Chat Section */}
      <div
        className={`flex items-center dark:text-black ${
          isCollapsed ? "justify-center" : "space-x-2"
        } p-2 rounded-md bg-gray-600 text-white dark:bg-gray-400 hover:bg-gray-700 dark:hover:bg-gray-500 cursor-pointer`}
      >
        <HiPlus
          className={`text-2xl text-white transition-all duration-300 ${
            isCollapsed ? "rounded-full p-1 bg-gray-700" : ""
          }`}
        />
        {!isCollapsed && <p className="text-md text-white dark:text-black">New Chat</p>}
      </div>

      {/* Message Section */}
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "space-x-2"
        } p-2 rounded-md hover:bg-gray-700 cursor-pointer dark:hover:bg-gray-400`}
      >
        <MdMessage className="text-2xl" />
        {!isCollapsed && <p className="text-md dark:text-black">{resentPrompt}</p>}
      </div>
    </div>
  );
}

export default SideBar;
