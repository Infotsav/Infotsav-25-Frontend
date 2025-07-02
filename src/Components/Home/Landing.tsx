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

export default Landing