// import React from 'react'
// import ParticlesBackground from "../Components/ParticlesBackground"
import aboutImage from "../assets/EventsPage/about.png"

function About() {
  return (

    <div className="max-w-7xl mt-[100px] mx-auto">

      {/* <div className="absolute -z-10"><ParticlesBackground /></div> */}
      <h1 className="scroll-m-20 text-[#FEFEFE] text-[16vw] md:text-[9vw] tracking-tight text-center font-pixelify mb-5 md:mb-0">
        About Us
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-1/3 md:px-10 px-5">
          <h3 className='text-[#FEFEFE] text-3xl font-pixelify tracking-tight scroll-m-10 uppercase mb-6'>
            About Infotsav
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">


          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">

          </p>
        </div>
        <div className="md:w-2/3 overflow-hidden">

        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-1/2 md:px-10 px-5">
          <h3 className='text-[#FEFEFE] text-3xl font-pixelify tracking-tight scroll-m-10 uppercase mb-6'>
       
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
    
          </p>
        </div>
        <div className="md:w-1/2">
          {/* Placeholder for future image */}
        </div>
      </div>
    </div>
  )
}

export default About