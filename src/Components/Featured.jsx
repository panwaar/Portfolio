import { motion } from "framer-motion";
import React, { useState } from "react";
import amazon_img from '../assets/amazon.jpg';
import Leukemia from '../assets/pjt1.jpg';

function Featured() {
  const [hoveredText, setHoveredText] = useState(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05, duration: 0.3 },
    }),
  };

  const projects = [
    { img: amazon_img, text: "Amazon Clone", link: "https://panwar-amazon-clone.netlify.app/" },
    { img: Leukemia, text: "Leukemia Detection", link: "https://github.com/panwaar/Leukemia-Detection" },
  ];

  // Group projects into pairs
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    groupedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <div className="relative z-10 w-full py-20 bg-[#e0d4cd]">
      <div className="w-full px-6 md:px-20">
        <h1 className="text-4xl md:text-8xl text-black font-bold tracking-tight pb-6 md:pb-8 border-b border-zinc-500">
          Featured Projects
        </h1>
      </div>

      {groupedProjects.map((group, idx) => (
        <div
          key={idx}
          className="px-6 md:px-20 flex flex-col md:flex-row gap-6 md:gap-10 mt-10 relative items-center justify-center"
        >
          {group.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full md:w-[40vw] h-[50vh] md:h-[80vh] rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredText(project.text)}
              onMouseLeave={() => setHoveredText(null)}
            >
              <img
                className="w-full h-full object-cover"
                src={project.img}
                alt={`Project ${index + 1}`}
              />
            </a>
          ))}

          {hoveredText && (
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex gap-2 text-[#989a12] text-4xl md:text-7xl pointer-events-none">
              {hoveredText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Featured;
