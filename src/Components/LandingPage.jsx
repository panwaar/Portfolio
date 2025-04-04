import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowUpLong } from "react-icons/fa6";
import bgvideo from "../assets/video.mp4";
import { motion } from 'framer-motion';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div data-scroll data-scroll-speed="-.8" className='relative w-full h-screen text-white overflow-hidden'>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className='relative z-10 w-full h-full bg-[#011110]/50 pt-55 px-4 md:px-20'>
        <div className='textStructure mt-20 md:mt-40 space-y-2'>
          {["Hello, Welcome!", "I’m Rahul Panwar", "A student passionate about technology"].map((item, index) => (
            <div key={index} className='masker'>
              <div className='w-fit flex items-center'>
                
                <h1 className="uppercase text-[6vw] leading-[5.5vw] md:text-[3.5vw] md:leading-[3.2vw] tracking-tight font-[Founders_Grotesk_X-Condensed] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className='border-t-[1px] border-white mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6'>
          <div className='space-y-2 bold'>
            {["The Only Easy Day Was Yesterday"].map((item, index) => (
              <p key={index} className='text-sm md:text-md  tracking-tight leading-none'>
                {item}
              </p>
            ))}
          </div>

          <div className='start flex items-center gap-4'>
            <a 
              href="/resume.pdf" 
              download="Rahul_Panwar_Resume.pdf"
              className='px-5 py-2 border-[2px] border-white font-light text-sm capitalize rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-300'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default LandingPage;