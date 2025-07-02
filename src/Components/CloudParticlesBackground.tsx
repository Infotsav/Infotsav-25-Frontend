import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const CloudParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="cloud-particles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0a0a0a",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#f8f8f8", "#f0f0f0", "#e8e8e8"],
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: { min: 0.1, max: 0.3 },
                        straight: false,
                        gravity: {
                            enable: true,
                            acceleration: 0.02,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.6 },
                        animation: {
                            enable: true,
                            speed: 0.3,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 3, max: 8 },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 2,
                            sync: false,
                        },
                    },
                    blur: {
                        enable: true,
                        value: { min: 2, max: 5 },
                    },
                    shadow: {
                        enable: true,
                        color: "#ffffff",
                        blur: 6,
                        offset: {
                            x: 0,
                            y: 0,
                        },
                    },
                    twinkle: {
                        enable: true,
                        frequency: 0.02,
                        opacity: 0.8,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default CloudParticlesBackground; 