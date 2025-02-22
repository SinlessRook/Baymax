import React from "react"
import { Link } from "react-router-dom"
import { Sun, Moon,House, Home } from "lucide-react"


const NavigationBar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-yellow-400 dark:bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black dark:text-white text-2xl font-bold">
          Mental Health Analyzer
        </Link>
        
        <div className="flex items-center space-x-4">
        <Link to="/enter-data" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
            Enter Data
          </Link>
          <Link to="/" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
            <Home size={24}/>
          </Link>
          
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar

