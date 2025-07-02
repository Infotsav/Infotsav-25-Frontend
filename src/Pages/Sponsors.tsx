import ParticlesBackground from '../Components/ParticlesBackground';
import {SponsorsComponent} from '../Components/SponsorsComponent';

function Sponsors() {
    return (
        <div className='relative min-h-screen bg-transparent'>
            {/* Particles Background Layer */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <ParticlesBackground />
            </div>

            {/* Content Layer */}
            <div className="relative pt-[150px]" style={{ zIndex: 2 }}>
                <SponsorsComponent />
            </div>
        </div>
    );
}

export default Sponsors;
