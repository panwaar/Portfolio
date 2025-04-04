import React from 'react';
import bg_img from '../assets/bg.jpg';

function About() {
  return (
    <div className='w-full p-5 sm:p-10 md:p-20 bg-[#e0d4cd] rounded-tl-3xl rounded-tr-3xl text-black relative z-10'>
      <h1 className='font-["Neue_Montreal"] text-[6vw] sm:text-[4vw] md:text-[2.5vw] leading-[7vw] sm:leading-[5vw] md:leading-[3.1vw] tracking-tight'>
        Hello Everyone, I am Rahul Panwar, a Computer Science graduate from Vellore Institute of Technology. During my time at VIT, I was an active member of the <span className='font-bold'>IoThinC</span> Club, where I contributed as a Web Developer, working on projects related to the Internet of Things.
        <br />
        <br />
        I have a strong passion for technology and a deep interest in web development, data structures, algorithms, and machine learning. Additionally, I had the opportunity to intern with the <span className='font-bold'>Indian Army</span> as a Database Intern, where I gained hands-on experience in database management and system optimization.
        <br />
        <br />
        Beyond academics, I have been actively involved in volunteering and social initiatives, striving to make a meaningful impact through technology and community engagement.
      </h1>

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