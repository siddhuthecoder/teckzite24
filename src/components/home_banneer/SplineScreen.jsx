import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RiCoinsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function SplineScreen() {
  const userData = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const splineRef = useRef(null);
  const containerRef = useRef(null); // Ref for the container div to observe its viewport visibility
  const [isLoading, setIsLoading] = useState(true); // Track loading state of the Spline scene
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Track screen size
  const [shouldRenderScene, setShouldRenderScene] = useState(false); // Control when to mount Spline

  // Cache the Spline scene paths in memory
  const splineSceneDesktop = useMemo(() => "/scene.splinecode", []);
  const splineSceneMobile = useMemo(() => "/scene_mobile.splinecode", []);

  // Use IntersectionObserver to defer rendering of the Spline component until the container is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRenderScene(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Adjust the view based on screen size (desktop vs mobile).
  useEffect(() => {
    const adjustViewAndScreen = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (splineRef.current && typeof splineRef.current.emit === "function") {
        if (mobile) {
          splineRef.current.emit("setZoom", 0.5); // Adjust zoom level for mobile
          splineRef.current.emit("setPosition", { x: 0, y: 1, z: 10 }); // Adjust camera position for mobile
        } else {
          splineRef.current.emit("setZoom", 1.0); // Default zoom for desktop
          splineRef.current.emit("setPosition", { x: 0, y: 0, z: 6 }); // Default camera position for desktop
        }
      }
    };

    adjustViewAndScreen();

    window.addEventListener("resize", adjustViewAndScreen);
    return () => window.removeEventListener("resize", adjustViewAndScreen);
  }, []);

  return (
    <div ref={containerRef} className="spline-container h-screen relative">
      {/* Mobile User Button */}
      <button className="backdrop-blur-[25px] backdrop-saturate-[136%] bg-white/5 border-[1px] border-gray-300/30 rounded-full text-white flex justify-center items-center px-3 py-[4px] mx-auto md:hidden">
        {userData ? (
          <div className="flex items-center gap-[8px] relative after:content-['|'] after:absolute after:right-[70px]">
            <span className="bg-gradient-to-b from-[#D7AC5D] via-[#D7AC5D] to-[#4F3025] bg-clip-text text-transparent">
              {userData.tzkid.toUpperCase()}
            </span>
            <span className="text-[20px] ml-[20px]">
              <RiCoinsLine className="text-[20px] text-[#D7AC5D]" />
            </span>
            <span className="bg-gradient-to-b from-[#D7AC5D] via-[#D7AC5D] to-[#4F3025] bg-clip-text text-transparent">
              {userData?.credits}
            </span>
          </div>
        ) : (
          <div
            onClick={() => navigate("/register")}
            className="flex items-center gap-[5px]"
          >
            Click Here To Register <FaArrowRight />
          </div>
        )}
      </button>
      {shouldRenderScene ? (
        <>
          {/* Loading spinner shown until the Spline scene is fully loaded */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-white text-xl">Loading...</span>
            </div>
          )}
          <Spline
            scene="https://prod.spline.design/7w5I0rW2167SAmYb/scene.splinecode"
            onLoad={(spline) => {
              splineRef.current = spline; // Save the Spline instance reference
              setIsLoading(false); // Mark loading complete
            }}
           
          />
        
        </>
      ) : (
        // If not yet in view, show a placeholder (this div could be styled further or contain a preview image)
        <div className="w-full h-full bg-gray-900"></div>
      )}
    </div>
  );
}

export default SplineScreen;
