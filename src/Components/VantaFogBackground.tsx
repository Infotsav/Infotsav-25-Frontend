import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        VANTA: any;
        THREE: any;
    }
}

const VantaFogBackground = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        console.log('VantaFogBackground: Component mounted');

        // Prevent multiple initializations
        if (initializedRef.current) {
            console.log('Already initialized, skipping...');
            return;
        }

        const loadScripts = async () => {
            try {
                // Step 1: Load Three.js from CDN
                if (!window.THREE) {
                    console.log('Loading Three.js from CDN...');
                    await new Promise<void>((resolve, reject) => {
                        const threeScript = document.createElement('script');
                        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
                        threeScript.onload = () => {
                            console.log('Three.js loaded successfully from CDN');
                            resolve();
                        };
                        threeScript.onerror = () => {
                            console.error('Failed to load Three.js from CDN');
                            reject(new Error('Failed to load Three.js'));
                        };
                        document.head.appendChild(threeScript);
                    });
                }

                // Step 2: Load Vanta.js from CDN
                if (!window.VANTA) {
                    console.log('Loading Vanta.js from CDN...');
                    await new Promise<void>((resolve, reject) => {
                        const vantaScript = document.createElement('script');
                        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js';
                        vantaScript.onload = () => {
                            console.log('Vanta.js loaded successfully from CDN');
                            resolve();
                        };
                        vantaScript.onerror = () => {
                            console.error('Failed to load Vanta.js from CDN');
                            reject(new Error('Failed to load Vanta.js'));
                        };
                        document.head.appendChild(vantaScript);
                    });
                }

                // Step 3: Wait for everything to initialize
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Step 4: Check what's available
                console.log('Window.THREE:', window.THREE);
                console.log('Window.VANTA:', window.VANTA);
                if (window.VANTA) {
                    console.log('Available VANTA effects:', Object.keys(window.VANTA));
                }

                // Step 5: Initialize the FOG effect using the official approach
                if (window.VANTA && window.VANTA.FOG && vantaRef.current) {
                    console.log('Initializing VANTA.FOG effect...');
                    
                    const effect = window.VANTA.FOG({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        highlightColor: 0x15152a,  // Dark blue-gray tint
                        midtoneColor: 0x0f0f1a,    // Darker blue-gray
                        lowlightColor: 0x08080a,    // Very dark blue
                        baseColor: 0x030305,        // Almost black with blue hint
                        blurFactor: 0.44,
                        speed: 1.20,
                        zoom: 1.00
                    });

                    console.log('VANTA.FOG effect created:', effect);
                    setVantaEffect(effect);
                    initializedRef.current = true; // Mark as initialized
                } else {
                    console.error('VANTA.FOG not available. VANTA object:', window.VANTA);
                    console.error('Vanta ref current:', vantaRef.current);
                    console.error('THREE available:', !!window.THREE);
                }

            } catch (error) {
                console.error('Error in loadScripts:', error);
            }
        };

        loadScripts();

        return () => {
            if (vantaEffect) {
                console.log('Destroying Vanta FOG effect');
                vantaEffect.destroy();
                initializedRef.current = false; // Reset for cleanup
            }
        };
    }, []); // Empty dependency array - only run once

    return (
        <div 
            ref={vantaRef} 
            className="absolute inset-0 w-full h-full"
            style={{ 
                backgroundColor: '#030305', // Dark with blue tint like Upside Down
                zIndex: 1 
            }}
        />
    );
};

export default VantaFogBackground; 