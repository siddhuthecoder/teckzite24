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
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Track screen size

  // Cache the Spline scene paths using useMemo
  const splineSceneDesktop = useMemo(() => "/scene.splinecode", []);
  const splineSceneMobile = useMemo(() => "/scene_mobile.splinecode", []);

  useEffect(() => {
    const adjustViewAndScreen = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (splineRef.current) {
        if (typeof splineRef.current.emit === "function") {
          if (mobile) {
            splineRef.current.emit("setZoom", 0.5); // Adjust zoom level for mobile
            splineRef.current.emit("setPosition", { x: 0, y: 1, z: 10 }); // Adjust camera position for mobile
          } else {
            splineRef.current.emit("setZoom", 1.0); // Default zoom for desktop
            splineRef.current.emit("setPosition", { x: 0, y: 0, z: 6 }); // Default camera position for desktop
          }
        } else {
          console.error(
            'splineRef.current does not support the "emit" method.'
          );
        }
      }
    };

    adjustViewAndScreen();

    window.addEventListener("resize", adjustViewAndScreen);
    return () => window.removeEventListener("resize", adjustViewAndScreen);
  }, []);

  return (
    <div className="spline-container h-screen relative">
      {/* {isLoading && <div  >Loading </div>} Show Preloader */}
      {/* {!isLoading && (
        
      )} */}
      <button className="backdrop-blur-[25px] backdrop-saturate-[136%] bg-white/5 border-[1px] border-gray-300/30 rounded-full text-white flex justify-center items-center px-3 py-[4px] mx-auto md:hidden">
        {userData ? (
          <div className="flex items-center gap-[8px] relative after:content-['|'] after:absolute after:right-[70px] ">
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
      <Spline
        scene={isMobile ? splineSceneMobile : splineSceneDesktop}
        onLoad={(spline) => {
          splineRef.current = spline; // Assign Spline instance to ref
          setIsLoading(false); // Stop loading when the scene is fully loaded
        }}
        style={{
          zIndex: 2,
          display: isLoading ? "none" : "block", // Hide Spline until loading is done
        }}
      />
    </div>
  );
}

export default SplineScreen;
