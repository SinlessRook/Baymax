import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import NavigationBar from "./component/NavBar.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import DataEntryPage from "./pages/Dataentry.jsx"
import ResultsPage from "./pages/ResultsPage.jsx"
import RotatingRingsLoader from "./component/Loader.jsx"
import WaveBackground from "./component/background.jsx"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Router>
      <div className={`min-h-screen overflow-hidden ${isDarkMode ? "dark" : ""}`}>
        <NavigationBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <WaveBackground/>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Routes>
            <Route path="/" element={<><LandingPage/></>} />
            <Route path="/enter-data" element={<><DataEntryPage/></>} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/loader" element={<><RotatingRingsLoader/></>} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  )
}

export default App

