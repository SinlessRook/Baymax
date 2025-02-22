import { motion } from 'framer-motion';

const FloatingBlobs = () => {
  const blobs = [
    { id: 1, size: 'w-40 h-40', gradient: 'from-purple-400 to-pink-600', x: -300, y: -200, delay: 0 },
    { id: 2, size: 'w-56 h-56', gradient: 'from-blue-400 to-cyan-500', x: 250, y: -150, delay: 2 },
    { id: 3, size: 'w-48 h-48', gradient: 'from-green-400 to-lime-500', x: -200, y: 300, delay: 4 },
  ];

  return (
    <div className="absolute w-full h-screen overflow-hidden">
    </div>
  );
};

export default FloatingBlobs;