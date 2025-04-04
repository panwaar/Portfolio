
import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] -mt-[3vh] relative z-10'>
        <div className='text border-t-2 border-b-2 overflow-hidden border-zinc-300 flex whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:30}} className='text-[16vw] mx-32 leading-none font-["Founders_grotesk_X-Condensed"] uppercase font-semibold pr-10'>This is Rahul Panwar callsign "panny" </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:30}} className='text-[16vw] leading-none font-["Founders_grotesk_X-Condensed"] uppercase font-semibold pr-10'>This is Rahul Panwar callsign "panny" </motion.h1>            
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:30}} className='text-[16vw] leading-none font-["Founders_grotesk_X-Condensed"] uppercase font-semibold pr-10'>This is Rahul Panwar callsign "panny" </motion.h1>            
        </div> 
    </div>
  )
}

export default Marquee
