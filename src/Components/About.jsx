import React from 'react';
import bg_img from '../assets/bg.jpg';

function About() {
  return (
    <div className='w-full px-5 md:px-20 pt-24 md:pt-28 pb-16 md:pb-20 bg-[#e0d4cd] text-black'>
      <h1 className='text-3xl md:text-5xl text-black font-bold tracking-tight pb-5 md:pb-6 border-b border-zinc-500 mb-8 md:mb-10'>
        About Me
      </h1>

      <p className='font-["Neue_Montreal"] text-[4vw] sm:text-[2.6vw] md:text-[1.5vw] leading-[6.5vw] sm:leading-[4vw] md:leading-[2.3vw] tracking-tight'>
        I am Rahul Panwar, an AI engineer at <span className='font-bold'>Karma AI</span>, where I build document
        intelligence systems for government agencies. Most of my work is retrieval: hybrid search across tens of
        thousands of court judgments, pulling structured records out of unstructured case files, and the evaluation
        infrastructure that tells me when a model is quietly getting things wrong.
        <br />
        <br />
        I graduated from <span className='font-bold'>Vellore Institute of Technology</span> with a B.Tech in Computer
        Science, specialising in AI and Robotics, and spent those years as a web developer with the{' '}
        <span className='font-bold'>IoThinC</span> club. Before Karma AI I was at <span className='font-bold'>FirstLease</span>,
        where I built their first internal RAG system and put natural language search over long client documents into
        the hands of the sales, operations and compliance teams.
        <br />
        <br />
        What keeps me interested is grounding. Getting a model to sound confident is easy. Getting it to point at the
        exact span of text an answer came from, and to fail loudly when it cannot, is the harder problem, and the one
        that decides whether anyone can actually rely on the output.
      </p>

      {/* Green Box Container */}
      <div className='w-full sm:w-1/2 h-[50vh] sm:h-[70vh] rounded-3xl bg-[#7a8944] mt-10 mx-auto relative overflow-hidden'>
        {/* Image Section */}
        <img
          src={bg_img}
          alt="Rahul Panwar"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Centered Text Section */}
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 md:p-20 text-white text-center z-10 bg-gradient-to-b from-[#718625ad] to-transparent'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2 sm:mb-4'>Beyond the Screen</h2>
          <p className='text-xs sm:text-sm md:text-md leading-relaxed'>
            Life outside of code matters too. I’m someone who thrives on <span className='font-bold'>discipline</span> and finds balance through experiences like 🌄 <span className='font-semibold'>trekking</span>, 🚴‍♂️ <span className='font-semibold'>cycling</span>, 🧳 <span className='font-semibold'>traveling</span>, and 💪 <span className='font-semibold'>hitting the gym</span>.
            <br /><br />
            Whether it’s grinding through a bug or climbing a steep trail, I bring the same energy, consistency, and curiosity everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
