import React from 'react';
import { FaBars } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';

function SideBar() {
    return (
        <div className="bg-gray-800 text-white h-screen p-4 flex flex-col items-start space-y-6 w-[13%]">
            {/* Hamburger Icon */}
            <div>
                <FaBars className="text-2xl cursor-pointer hover:text-gray-400 ml-2" />
            </div>

            {/* New Chat Section */}
            <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-600 hover:bg-gray-700 cursor-pointer">
                <HiPlus className="text-2xl text-white" />
                <p className="text-md text-white">New Chat</p>
            </div>


            {/* Message Section */}
            <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
                <MdMessage className="text-2xl" />
                <p className="text-md">Hi Vishal</p>
            </div>
        </div>
    );
}

export default SideBar;
