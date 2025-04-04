import React from 'react';

function Footer() {
  return (
    <div className='w-full h-[60vh] bg-[#004D43] px-6 py-10 flex flex-col lg:flex-row font-["Founders_Grotesk_X-Condensed"]'>

      {/* Left Side */}
      <div className='w-full lg:w-1/2 flex flex-col justify-between relative'>

        {/* Heading */}
        <div>
          <h1 className='text-[12vw] sm:text-[8vw] lg:text-[2vw] uppercase font-semibold leading-tight'>Designed & developed by Rahul Panwar</h1>
        </div>


        <div className='mt-10 lg:mt-0 lg:static absolute bottom-6 left-6 lg:left-0'>
        </div>
      </div>

      {/* Right Side */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center mt-20 lg:mt-0 pl-0 lg:pl-20'>
        <h1 className='text-[7vw] sm:text-[8vw] lg:text-[5vw] font-semibold leading-none uppercase'>
        Always evolving, always learning.
        </h1>
        <h3 className='text-[4vw] sm:text-[2.5vw] lg:text-[2vw] mt-8 lg:mt-10'>
        © 2025 
        </h3>
      </div>
    </div>
  );
}

export default Footer;