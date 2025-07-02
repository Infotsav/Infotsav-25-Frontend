// import React from 'react'
// import ComingSoon from '../Components/ComingSoon'

import MajorEvent from "../Components/Events/MajorEvent";
// import ParticlesBackground from "../Components/ParticlesBackground";



function Events() {
  return (
    <>
<<<<<<< HEAD
      <main className="font-pixelify text-[#FEFEFE] max-w-[1440px] mx-auto relative">
        {/* Particles Background Layer */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <ParticlesBackground />
        </div>

        {/* Content Layer */}
        <div className="relative pt-[150px]" style={{ zIndex: 3 }}>
          <div className="relative text-center mb-40 text-slate-50 z-10 lg:text-[7vw] md:text-4xl text-4xl">
            Events
          </div>
          <section className="my-20">
            <MajorEvent />
          </section>
          <section className="relative font-pixelify">
            <Tabs />
          </section>
        </div>
=======
      <main className="font-pixelify text-[#FEFEFE] max-w-[1440px] mx-auto">
        {/* <ParticlesBackground /> */}
        <section className="my-20">
          <MajorEvent />
        </section>

>>>>>>> a331ce39967023072a0c96480c61ad7e851ab65d
      </main>
    </>
  );
}

export default Events;
