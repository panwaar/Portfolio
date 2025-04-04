import React from 'react'
import linkedin from '../assets/linke_logo.png'
import github from '../assets/github.png'

function Cards() {
  return (
    <div className='w-full min-h-screen bg-[#e0d4cd] border-t items-center px-6 py-10 flex flex-col lg:flex-row gap-6 lg:gap-5'>
      
      {/* LinkedIn Card */}
      <div className='w-full lg:w-1/2 h-[50vh]'>
        <div className='w-full h-full rounded-3xl bg-[#004D43] flex items-center justify-center relative p-5'>
          <img className='w-[40%] max-w-[180px] sm:max-w-[250px]' src={linkedin} alt="LinkedIn Logo" />
          <a
            href="https://www.linkedin.com/in/rahul-panwar-198a42221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="absolute cursor-pointer left-5 bottom-5 px-5 py-2 text-lg font-semibold text-[#e0d4cd] border-2 border-[#e0d4cd] rounded-full overflow-hidden transition-all duration-100 hover:text-white before:absolute before:inset-0 before:m-auto before:content-[''] before:rounded-full before:w-[20em] before:h-[20em] before:left-[-5em] before:transition-[box-shadow] before:duration-300 hover:before:shadow-[inset_0_0_0_10em_#0077B5]">
              <span className="relative z-10">Profile</span>
            </button>
          </a>
        </div>
      </div>

      {/* GitHub and Instagram Cards */}
      <div className='w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 h-[50vh]'>
        
        {/* GitHub */}
        <div className='w-full h-full rounded-3xl bg-[#012924] relative flex items-center justify-center'>
          <img className='w-[30vw] sm:w-[15vw] max-w-[120px]' src={github} alt="GitHub Logo" />
          <a
            href="https://github.com/panwaar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="absolute cursor-pointer left-5 bottom-5 px-5 py-2 text-lg font-semibold text-[#e0d4cd] border-2 border-[#e0d4cd] rounded-full overflow-hidden transition-all duration-200 hover:text-white before:absolute before:inset-0 before:m-auto before:content-[''] before:rounded-full before:w-[20em] before:h-[20em] before:left-[-5em] before:transition-[box-shadow] before:duration-300 hover:before:shadow-[inset_0_0_0_10em_#0077B5]">
              <span className="relative z-10">Profile</span>
            </button>
          </a>
        </div>

        {/* Instagram */}
        <div className='w-full h-full rounded-3xl bg-[#012924] relative flex items-center justify-center'>
          <img className='w-[30vw] sm:w-[15vw] max-w-[120px]' src="https://img.icons8.com/win10/512/FFFFFF/instagram-new.png" alt="Instagram Logo" />
          <a
            href="https://www.instagram.com/panwaar_rahul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="absolute cursor-pointer left-5 bottom-5 px-5 py-2 text-lg font-semibold text-[#e0d4cd] border-2 border-[#e0d4cd] rounded-full overflow-hidden transition-all duration-200 hover:text-white before:absolute before:inset-0 before:m-auto before:content-[''] before:rounded-full before:w-[20em] before:h-[20em] before:left-[-5em] before:transition-[box-shadow] before:duration-300 hover:before:shadow-[inset_0_0_0_10em_#0077B5]">
              <span className="relative z-10">Profile</span>
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Cards