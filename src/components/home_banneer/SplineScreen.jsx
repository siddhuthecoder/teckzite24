import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState, useMemo } from 'react';
// import './App.css';

function SplineScreen() {
  const splineRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Track screen size

  // Use useMemo to cache the Spline scene paths
  const splineSceneDesktop = useMemo(() => '/assets/scene.splinecode', []);
  const splineSceneMobile = useMemo(() => '/assets/scene_mobile.splinecode', []);

  useEffect(() => {
    const adjustViewAndScreen = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (splineRef.current) {
        if (mobile) {
          splineRef.current.emit('setZoom', 0.5); // Adjust zoom level for mobile
          splineRef.current.emit('setPosition', { x: 0, y: 1, z: 10 }); // Adjust camera position for mobile
        } else {
          splineRef.current.emit('setZoom', 1.0); // Default zoom for desktop
          splineRef.current.emit('setPosition', { x: 0, y: 0, z: 6 }); // Default camera position for desktop
        }
      }
    };

    adjustViewAndScreen();

    window.addEventListener('resize', adjustViewAndScreen);
    return () => window.removeEventListener('resize', adjustViewAndScreen);
  }, []);

  return (
    <div className="spline-container  h-screen z-1 relative">
      
      <Spline
        scene={isMobile ? splineSceneMobile : splineSceneDesktop} // Use mobile or desktop scene
        onLoad={(spline) => {
          splineRef.current = spline;
          setIsLoading(false); // Stop loading when the scene is fully loaded
        }}
        style={{
          zIndex: '2',
        }}
      />
    </div>
  );
}

export default SplineScreen;
