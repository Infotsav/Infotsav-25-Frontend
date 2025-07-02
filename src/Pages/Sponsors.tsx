// import ParticlesBackground from '../Components/ParticlesBackground';
import {SponsorsComponent} from '../Components/SponsorsComponent';

function Sponsors() {
    return (
<<<<<<< HEAD
        <div className='relative min-h-screen bg-transparent'>
            {/* Particles Background Layer */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <ParticlesBackground />
            </div>

            {/* Content Layer */}
            <div className="relative pt-[150px]" style={{ zIndex: 2 }}>
                <SponsorsComponent />
            </div>
=======
        <div className=''>
            {/* <ParticlesBackground /> */}
            <SponsorsComponent />
>>>>>>> a331ce39967023072a0c96480c61ad7e851ab65d
        </div>
    );
}

export default Sponsors;
