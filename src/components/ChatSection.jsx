import React, { useContext } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { FaPaperPlane } from 'react-icons/fa';
import img from '../assets/img 1.webp';
import img1 from '../assets/ai.png';
import img2 from '../assets/user.webp';
import { datacontext } from './context/Usercontext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ChatSection() {
  let { send, input, setInput, showResult, resultData, resentPrompt, loading } = useContext(datacontext);

  return (
    <div className="flex flex-col bg-gray-900 text-white dark:bg-gray-100 dark:text-black h-screen w-full max-w-8xl mx-auto">
      {/* Main Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* Greeting Section */}
        {!showResult ? (
          <div className="flex flex-col items-center justify-center gap-5 h-full ">
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <img src={img} alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="text-2xl md:text-4xl text-center mt-4">
              <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Hello Vishal,
              </p>
              <p className="font-bold">I am your own assistant,</p>
              <p className="font-bold">What can I help you with?</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* User Message */}
            <div className="flex items-start gap-3 p-4  rounded-lg shadow ">
              <img src={img2} alt="User Avatar" className="w-12 h-12 rounded-full object-cover" />
              <p className="text-base md:text-lg break-words">{resentPrompt}</p>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3 p-4  rounded-lg shadow ">
              <img src={img1} alt="AI Avatar" className="w-12 h-12 rounded-full object-cover" />
              {loading ? (
                <div className="w-full flex flex-col gap-5">
                  {/* Three animated lines */}
                  <hr className="animate-gradient w-full mb-2" />
                  <hr className="animate-gradient w-full animate-delay" />
                  <hr className="animate-gradient w-full animate-delay-2" />
                </div>
              ) : (
                <div className="space-y-4">
                {Array.isArray(resultData) && resultData.length > 0 ? (
                  resultData.map((part, index) => {
                    // Check if the part is a code block (triple backticks)
                    if (part.startsWith('```') && part.endsWith('```')) {
                      const codeContent = part.slice(3, -3).trim(); // Remove the backticks
                      return (
                        <SyntaxHighlighter
                          key={index}
                          language="javascript"
                          style={dark}
                          className="overflow-x-auto rounded-md"
                        >
                          {codeContent}
                        </SyntaxHighlighter>
                      );
                    } else if (part.startsWith('-')) {
                      // Render as list item
                      return (
                        <li key={index} className="text-base md:text-lg break-words list-disc ml-5">
                          {part.slice(1).trim()}
                        </li>
                      );
                    } else if (part.startsWith('*')) {
                      // Render as bold text
                      return (
                        <p key={index} className="text-base md:text-lg break-words font-bold">
                          {part.slice(1).trim()}
                        </p>
                      );
                    } else {
                      // Render as normal paragraph
                      return (
                        <p key={index} className="text-base md:text-lg break-words">
                          {part.trim()}
                        </p>
                      );
                    }
                  })
                ) : (
                  <p className="text-base md:text-lg break-words italic text-gray-500">
                    No content to display.
                  </p>
                )}
              </div>


              )}

            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="w-full p-5 flex items-center gap-3 border-t border-gray-700 dark:border-gray-300">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-200 dark:text-black"
        />
        <button
          onClick={() => send(input)}
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
