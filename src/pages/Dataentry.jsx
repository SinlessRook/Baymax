import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

const tabs = ["WhatsApp", "Instagram", "Twitter", "Chat"];

const DataEntryPage = () => {
  const [activeTab, setActiveTab] = useState("WhatsApp");
  const [textInputs, setTextInputs] = useState({ WhatsApp: "", Instagram: "", Twitter: "" });
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const navigate = useNavigate();

  const handleTextChange = (platform, value) => {
    setTextInputs({ ...textInputs, [platform]: value });
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim() !== "") {
      setChatMessages([...chatMessages, { sender: "You", text: currentMessage }]);
      setCurrentMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/results");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16 z-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Social Media Data Entry</h1>

      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-lg font-semibold ${
              activeTab === tab ? "bg-yellow-400 text-black" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-2xl mx-auto"
        >
          {activeTab !== "Chat" ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <textarea
                  value={textInputs[activeTab]}
                  onChange={(e) => handleTextChange(activeTab, e.target.value)}
                  placeholder={`Enter ${activeTab} text here...`}
                  className="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black dark:text-white bg-white dark:bg-gray-700"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowHelp(!showHelp)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <HelpCircle size={24} />
                </button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Analyzing..." : `Analyze ${activeTab} Text`}
              </motion.button>
            </form>
          ) : (
            <div className="border rounded-lg p-4 h-96 flex flex-col bg-white dark:bg-gray-700">
              <div className="flex-1 overflow-y-auto mb-4">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className="mb-2">
                    <strong className="text-black dark:text-white">{msg.sender}:</strong> <span className="text-gray-800 dark:text-gray-200">{msg.text}</span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black dark:text-white bg-gray-100 dark:bg-gray-600"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-r-lg"
                >
                  Send
                </button>
              </form>
            </div>
          )}

          {showHelp && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h2 className="text-xl font-bold mb-2 text-black dark:text-white">How to Format Your Input</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Enter your text in a natural, conversational manner. You can include multiple sentences or paragraphs.
                The more context you provide, the more accurate the analysis will be.
              </p>
            </motion.div>
          )}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
                <div className="loader mb-4"></div>
                <p className="text-black dark:text-white">Analyzing your text...</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DataEntryPage;