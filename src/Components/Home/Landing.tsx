<<<<<<< HEAD
// import React from 'react';
import ParticlesBackground from '../ParticlesBackground';
import TitleSvg from '../../../public/LOGO.svg';

const Landing = () => {
    return (
        <div className='relative bg-transparent h-screen w-full overflow-hidden'>
            {/* Particles Layer */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <ParticlesBackground />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center" style={{ zIndex: 3 }}>
                <img
                    src={TitleSvg}
                    alt="Infotsav 2025"
                    className="logo title"
                />
            </div>
        </div>
    );
}
=======
import { useEffect, useRef } from 'react';
// import ParticlesBackground from '../ParticlesBackground';
import { gsap } from 'gsap';


const Landing: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const imgRef    = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance: fade & slight pop
      gsap.from(imgRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'back.out(1.7)'
      });
    }, container);
>>>>>>> a331ce39967023072a0c96480c61ad7e851ab65d

    return () => ctx.revert();
  }, []);

  const onMouseEnter = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / centerY * 10;
    const rotateY = (x - centerX) / centerX * 6;


    gsap.to(imgRef.current, {
      rotateY: rotateY,
      rotateX: rotateX,
      duration: 0.4,
      ease: 'power2.out'
    });
  };
  const onMouseLeave = () => {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  return (
    <div
      ref={container}
      className="w-full h-screen flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      {/* <ParticlesBackground /> */}

      <img
        ref={imgRef}
        src="/src/assets/2025/LandingPage/HeroText.svg"
        alt="Infotsav 2025"
        className="neon-img cursor-default z-50"
        style={{
          width: '750px',       // <- increased from 320px to 400px
          maxWidth: '90vw',     // still responsive
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default Landing;
