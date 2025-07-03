// import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import ParticlesBackground from './Components/ParticlesBackground';
import FogBackground from './Components/FogBackground';

const MainLayout = () => {

    return (
        
        <div className='overflow-hidden'>
            <div className="fixed inset-0 -z-20">
                <ParticlesBackground />
            </div>
            <FogBackground />

            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
