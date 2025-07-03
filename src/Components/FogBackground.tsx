import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type VantaEffectType = {
  destroy: () => void;
};

const FogBackground = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffectType | null>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA?.FOG && vantaRef.current) {
      const effect = window.VANTA.FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
                 highlightColor: 0x4a90e2, // Light blue
         midtoneColor:   0x2c5aa0, // Medium blue
         lowlightColor: 0x1e3a8a, // Dark blue
         baseColor:  0x0f172a, // Dark blue-gray base
         // Old colors (commented out):
         // highlightColor: 0x15152a, //0xee00ff,
         // midtoneColor:   0x0f0f1a, //0xa43328,
         // lowlightColor: 0x08080a, //0xde628d,
         // baseColor:  0x030305,
        blurFactor: 0.44, //0.6,
        speed: 2.0,
        zoom: 2.0,
      });
      setVantaEffect(effect);
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full opacity-[10%] " />;
};

export default FogBackground;
