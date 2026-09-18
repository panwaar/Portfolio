import React from 'react';
import bgvideo from "../assets/video.mp4";
import poster from "../assets/poster.jpg";
import resume from '../assets/resume.pdf';

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.8" className='relative w-full min-h-screen text-white overflow-hidden'>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className='relative z-10 w-full min-h-screen bg-[#011110]/60 pt-28 md:pt-32 px-5 md:px-20 pb-10'>
        <div className='textStructure mt-16 md:mt-24 space-y-1'>
          {["Hello, Welcome!", "I’m Rahul Panwar", "AI Engineer — RAG & LLM systems"].map((item, index) => (
            <div key={index} className='masker'>
              <div className='w-fit flex items-center'>

                <h1 className="uppercase text-[5vw] leading-[5.2vw] md:text-[2.3vw] md:leading-[2.5vw] tracking-tight font-[Founders_Grotesk_X-Condensed] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Short intro */}
        <p className='mt-6 max-w-2xl text-[3.4vw] md:text-base leading-relaxed text-white/85'>
          I build retrieval systems that turn dense, high-stakes documents into answers
          people can actually trust — hybrid search over tens of thousands of records,
          structured extraction from messy PDFs, and the evaluation harnesses that keep
          a model honest once it reaches production.
        </p>
        <p className='mt-3 max-w-2xl text-[3.4vw] md:text-base leading-relaxed text-white/70'>
          Computer Science graduate from VIT, currently shipping document intelligence
          for government agencies. Off the keyboard: trekking, cycling, and the gym.
        </p>

        <div className='border-t-[1px] border-white/70 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-5'>
          <div className='space-y-2 bold'>
            {["The Only Easy Day Was Yesterday"].map((item, index) => (
              <p key={index} className='text-xs md:text-sm tracking-tight leading-none'>
                {item}
              </p>
            ))}
          </div>

          <div className='start flex items-center gap-4'>
            <a
              href={resume}
              download="Rahul_Panwar_Resume.pdf"
              className='px-5 py-2 border-[2px] border-white font-light text-xs md:text-sm capitalize rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-300'
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
