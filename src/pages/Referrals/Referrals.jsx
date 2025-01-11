import Header from "../../components/Header/Header";
import Table from "./TableCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchRefs } from "../../store/refSlice";
import Animation from "../../components/Animation";
import React, { useState, useEffect } from "react";
import Humanhand from "../../assets/Animation/Humanhand.png";
import Robohand from "../../assets/Animation/Robohand.png";

// const Referals = () => {
//   const dispatch = useDispatch();
//   const refError = useSelector((state) => state.ref.error);
//   const refStatus = useSelector((state) => state.ref.status);
//   const userData = useSelector((state) => state.user.data);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   useEffect(() => {
//     if (refError) {
//       toast.error(refError);
//     }
//   }, [refError]);

//   useEffect(() => {
//     if (refStatus === "idle") {
//       dispatch(fetchRefs());
//     }
//   }, [refStatus, dispatch]);

//   const handleShare = () => {
//     if (!userData) {
//       toast.error("Login to refer");
//       return;
//     }

//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Teckzite 2k24 referral",
//           text: "Register for Teckzite2k24 using this link",
//           url: `${process.env.REACT_APP_FRONTEND_URL}/register?ref=${userData.tzkid}`,
//         })
//         .then(() => console.log("Shared successfully"))
//         .catch((error) => console.error("Error sharing:", error));
//     } else {
//       alert("Share API is not supported in your browser.");
//     }
//   };
//   // Update scroll position on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Wrapper for Animation */}
//       <div className="relative w-full h-screen bg-black">
//         {/* Animation Layer */}
//         <div
//           className="fixed top-0 left-0 w-full h-screen pointer-events-none"
//           style={{ zIndex: 0 }}
//         >
//           <div className="w-screen h-screen relative">
//             {/* Human Hand Image */}
//             <img
//               src={Humanhand}
//               alt="Human Hand"
//               style={{
//                 position: "absolute",
//                 top: -scrollPosition * 0.8, // Smoother parallax
//                 left: -scrollPosition * 0.6, // Reduced lateral movement
//                 transition: "top 0.1s, left 0.1s", // Smooth transitions
//               }}
//               className="w-[90%] h-[80%]"
//             />

//             {/* Robo Hand Image */}
//             <img
//               src={Robohand}
//               alt="Robo Hand"
//               style={{
//                 position: "absolute",
//                 bottom: -scrollPosition * 1, // Adjusted for smoother motion
//                 right: -scrollPosition * 0.4, // Reduced lateral movement
//                 transition: "bottom 0.1s, right 0.1s", // Smooth transitions
//               }}
//               className="w-[90%] h-[80%]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Content */}
//       {/* <div className="w-full h-auto bg-black flex items-center justify-center text-white text-2xl">
//         <Events/>
//       </div> */}
//       {/* <div className="w-full h-screen bg-blue-600 flex items-center justify-center text-white text-2xl">
//         More interactive content
//       </div>
//       <div className="w-full h-screen bg-green-600 flex items-center justify-center text-white text-5xl">
//         This is the final section
//       </div> */}
//        <section
//       className="fixed top-2 w-full min-h-screen m-auto overflow-x-hidden bg-cover bg-center"
//       style={{
//         backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/referralsbg.jpg')",
//         backgroundAttachment: "fixed",
//         backgroundSize: "cover", // Ensures the background image covers the container
//         backgroundPosition: "center", // Centers the image
//       }}
//     >
//               <Animation/>

//       {/* Black Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         <Header />
        
//         <Table />
        
//       </div>
//     </section>
//     </>
//   );
// };

// export default Referals;

// const Referals = () => {
//   const dispatch = useDispatch();
//   const refError = useSelector((state) => state.ref.error);
//   const refStatus = useSelector((state) => state.ref.status);
//   const userData = useSelector((state) => state.user.data);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     if (refError) {
//       toast.error(refError);
//     }
//   }, [refError]);

//   useEffect(() => {
//     if (refStatus === "idle") {
//       dispatch(fetchRefs());
//     }
//   }, [refStatus, dispatch]);

//   const handleShare = () => {
//     if (!userData) {
//       toast.error("Login to refer");
//       return;
//     }

//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Teckzite 2k24 referral",
//           text: "Register for Teckzite2k24 using this link",
//           url: `${process.env.REACT_APP_FRONTEND_URL}/register?ref=${userData.tzkid}`,
//         })
//         .then(() => console.log("Shared successfully"))
//         .catch((error) => console.error("Error sharing:", error));
//     } else {
//       alert("Share API is not supported in your browser.");
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div   style={{
//       backgroundImage:
//         "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/referralsbg.jpg')",
//       backgroundAttachment: "fixed",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}>
//       {/* Animation Section */}
//       <div className="relative w-full h-screen " >
//         <div
//           className="fixed top-0 left-0 w-full h-screen pointer-events-none"
//           style={{ zIndex: 0 }}
//         >
//           <div className="w-screen h-screen relative">
//             <img
//               src={Humanhand}
//               alt="Human Hand"
//               style={{
//                 position: "absolute",
//                 top: -scrollPosition * 0.8,
//                 left: -scrollPosition * 0.6,
//                 transition: "top 0.1s, left 0.1s",
//               }}
//               className="w-[90%] h-[80%]"
//             />
//             <img
//               src={Robohand}
//               alt="Robo Hand"
//               style={{
//                 position: "absolute",
//                 bottom: -scrollPosition * 1,
//                 right: -scrollPosition * 0.4,
//                 transition: "bottom 0.1s, right 0.1s",
//               }}
//               className="w-[90%] h-[80%]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Referrals Section */}
//       <section
//         className="w-full m-auto overflow-x-hidden bg-cover bg-center"
      
//       >
//         <Animation />
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="relative z-10">
//           <Header />
//           <Table />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Referals;

 


const Referals = () => {
  const dispatch = useDispatch();
  const refError = useSelector((state) => state.ref.error);
  const refStatus = useSelector((state) => state.ref.status);
  const userData = useSelector((state) => state.user.data);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (refError) {
      toast.error(refError);
    }
  }, [refError]);

  useEffect(() => {
    if (refStatus === "idle") {
      dispatch(fetchRefs());
    }
  }, [refStatus, dispatch]);

  const handleShare = () => {
    if (!userData) {
      toast.error("Login to refer");
      return;
    }

    if (navigator.share) {
      navigator
        .share({
          title: "Teckzite 2k24 referral",
          text: "Register for Teckzite2k24 using this link",
          url: `${process.env.REACT_APP_FRONTEND_URL}/register?ref=${userData.tzkid}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share API is not supported in your browser.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/referralsbg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="w-full text-white"
    >
      {/* Animation Section */}
      <div className="relative w-full h-screen">
        <div
          className="fixed top-0 left-0 w-full h-screen pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <div className="w-screen h-screen relative">
            <img
              src={Humanhand}
              alt="Human Hand"
              style={{
                position: "absolute",
                top: -scrollPosition * 0.8,
                left: -scrollPosition * 0.6,
                transition: "top 0.1s, left 0.1s",
              }}
              className="w-[90%] h-[80%]"
            />
            <img
              src={Robohand}
              alt="Robo Hand"
              style={{
                position: "absolute",
                bottom: -scrollPosition * 1,
                right: -scrollPosition * 0.4,
                transition: "bottom 0.1s, right 0.1s",
              }}
              className="w-[90%] h-[80%]"
            />
          </div>
        </div>
      </div>

      {/* Referrals Section */}
      <section className="relative w-full m-auto overflow-x-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <Table />
        </div>
      </section>
    </div>
  );
};

export default Referals;

 

  