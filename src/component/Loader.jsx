import React from "react";
import { motion } from "framer-motion";

const ringVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "linear",
    },
  },
};

const RotatingRingsLoader = () => {
  const rings = [
    { color: "#F59E0B", x: 0, y: -60 }, // Yellow ring
    { color: "#EF4444", x: -52, y: 30 }, // Red ring
    { color: "#6366F1", x: 52, y: 30 }, // Blue ring
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {rings.map((ring, index) => (
          <motion.div
            key={index}
            variants={ringVariants}
            animate="animate"
            className="absolute"
            style={{
              border: `10px solid ${ring.color}`,
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              top: "50%",
              left: "50%",
              x: ring.x,
              y: ring.y,
              transform: "translate(-50%, -50%)",
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default RotatingRingsLoader;
