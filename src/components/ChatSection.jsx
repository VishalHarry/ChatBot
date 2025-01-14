import React, { useContext } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { FaPaperPlane } from 'react-icons/fa';
import img from '../assets/img 1.webp'
import { datacontext } from './context/Usercontext';

function ChatSection() {
  let {send,input,setInput}=useContext(datacontext)
  return (
    <div className="flex-1 bg-gray-900 text-white p-10 dark:bg-gray-100 dark:text-black flex flex-col">
      {/* Greeting Section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg">
          <img src={img} alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl md:text-4xl text-center mt-4">
          <p
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Hello Vishal,
          </p>
          <p className="font-bold">I am your own assistant,</p>
          <p className="font-bold">What can I help you with?</p>
        </h1>
      </div>

      {/* Input Section */}
      <div className="h-[20%] w-full p-5 flex items-center gap-3">
        <input
       onChange={(e)=>{
         setInput(e.target.value)
       }}
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2  border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-00 dark:text-black "
          value={input}
        />
        <button
        onClick={()=>{
              send(input)
        }}
          className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
          aria-label="Send Message"
        >
          <FaPaperPlane />
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default ChatSection;
