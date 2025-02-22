import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PieChart from "../component/PieChart"

const ResultsPage = () => {
  // Mock results data
  const results = {
    riskScore: "Low Risk",
    emotionalStates: ["Anxiety", "Stress"],
    keywords: ["worried", "overwhelmed", "pressure"],
    resources: [
      { name: "National Anxiety Hotline", phone: "1-800-123-4567" },
      { name: "Local Support Group", website: "www.localsupport.com" },
    ],
  }

  return (
    <div className="container w-full px-16 py-16 dark:bg-grey-900 rounded-lg shadow-lg overflow-hidden">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white text-left">Analysis Results</h1>

      <motion.div className="flex flex-wrap gap-4">
        <div className="w-full md:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">Risk Score</h1>
          <p className="text-gray-400">Overall risk assessment</p>
          <h1 className="text-5xl font-bold text-yellow-400 py-4">65%</h1>
        </div>

        <div className="w-full md:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">Emotional State</h1>
          <p className="text-gray-400">Detected emotional condition</p>
          <h1 className="text-3xl text-red-400 py-4">Anxious</h1>
        </div>

        <div className="w-full md:w-1/3 p-4 bg-gray-800 text-white absolute right-0 rounded-lg shadow-md">
          <PieChart />
        </div>
      </motion.div>

      <motion.div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Keywords Detected</h2>
        <div className="flex flex-wrap gap-2">
          {results.keywords.map((keyword, index) => (
            <p className="rounded-full px-4 py-2 bg-gray-600 text-white" key={index}>{keyword}</p>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-8 opacity-0 hover:cursor-default">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Resources</h2>
        <ul className="space-y-2">
          {results.resources.map((resource, index) => (
            <li key={index} className="text-white">
              <strong>{resource.name}</strong>: {resource.phone || resource.website}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="mt-8">
        <Link
          to="/"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default ResultsPage
