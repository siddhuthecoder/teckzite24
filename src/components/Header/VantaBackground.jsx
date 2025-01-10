import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

const VantaBackground = () => {
  const dotsRef = useRef(null);

  useEffect(() => {
    if (dotsRef.current) {
      const vantaEffect = DOTS({
        el: dotsRef.current,
        THREE: THREE,
        color: 0xf120ff,
        backgroundColor: 0x0,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        count: 1000,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        showLines: false,
      });

      // Clean up function
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={dotsRef}
      className="dots-container w-full h-full absolute z-0 top-0 left-0"
    ></div>
  );
};

export default VantaBackground;
