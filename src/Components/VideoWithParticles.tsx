import { useEffect, useRef, useState } from 'react';
import ParticlesBackground from './ParticlesBackground';

interface VideoWithParticlesProps {
    videoSrc: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    playsInline?: boolean;
    className?: string;
}

const VideoWithParticles = ({
    videoSrc,
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    className = ""
}: VideoWithParticlesProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isVideoSupported, setIsVideoSupported] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [videoError, setVideoError] = useState<string | null>(null);

    useEffect(() => {
        console.log('VideoWithParticles: Component mounted');
        console.log('Video source:', videoSrc);
        
        // Check if device is mobile
        const checkMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
            setIsMobile(isMobileDevice);
            console.log('Is mobile device:', isMobileDevice);
        };

        checkMobile();

        // Check video support
        const video = document.createElement('video');
        const canPlayMP4 = video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
        const canPlayWebM = video.canPlayType('video/webm; codecs="vp8, vorbis"');
        
        console.log('Can play MP4:', canPlayMP4);
        console.log('Can play WebM:', canPlayWebM);
        
        if (!canPlayMP4 && !canPlayWebM) {
            setIsVideoSupported(false);
            console.log('Video not supported, falling back to particles');
        }
    }, [videoSrc]);

    const handleVideoLoad = () => {
        console.log('Video loaded successfully');
        setIsVideoLoaded(true);
        setVideoError(null);
    };

    const handleVideoError = (e: any) => {
        console.error('Video error:', e);
        setVideoError('Video failed to load');
        setIsVideoSupported(false);
    };

    const handleVideoCanPlay = () => {
        console.log('Video can play');
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Autoplay failed:', error);
            });
        }
    };

    // Don't render video on mobile for performance, just show particles
    if (isMobile) {
        console.log('Mobile device detected, showing particles only');
        return (
            <div className={`absolute inset-0 w-full h-full ${className}`}>
                <ParticlesBackground />
            </div>
        );
    }

    // Don't render video if not supported, just show particles
    if (!isVideoSupported) {
        console.log('Video not supported, showing particles only');
        return (
            <div className={`absolute inset-0 w-full h-full ${className}`}>
                <ParticlesBackground />
            </div>
        );
    }

    return (
        <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
            {/* Background Video Layer */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                onLoadedData={handleVideoLoad}
                onCanPlay={handleVideoCanPlay}
                onError={handleVideoError}
                style={{
                    opacity: isVideoLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    zIndex: 0
                }}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Particles Overlay */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <ParticlesBackground />
            </div>
            
            {/* Loading overlay */}
            {!isVideoLoaded && !videoError && (
                <div className="absolute inset-0 bg-black flex items-center justify-center" style={{ zIndex: 10 }}>
                    <div className="text-white text-lg">Loading video...</div>
                </div>
            )}
            
            {/* Error overlay */}
            {videoError && (
                <div className="absolute inset-0 bg-black flex items-center justify-center" style={{ zIndex: 10 }}>
                    <div className="text-white text-lg">Video failed to load, showing particles only</div>
                </div>
            )}
        </div>
    );
};

export default VideoWithParticles; 