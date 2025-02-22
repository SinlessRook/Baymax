import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center w-full h-screen justify-center align-middle z-50">
    <div className="w-64 h-32"/>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-4 text-black dark:text-white"
      >
        Welcome to Mental Health Analyzer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl mb-8 text-gray-700 dark:text-gray-300"
      >
        Analyze your mental health based on your text entries
      </motion.p>
      <motion.div 
      initial={{ opacity: 0,x:10 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
        <Link
          to="/enter-data"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition duration-300 rounded-lg"
        >
          Get Started
        </Link>
      </motion.div>
      
    </div>
  )
}

export default LandingPage

