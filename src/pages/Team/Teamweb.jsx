// import React, { useEffect, useState } from "react";
// import Header from "../../components/Header/Header";
// import Teamcard from "../../assets/img/Teamcard.webp";

// const Teamweb = () => {
//   const [team, setTeam] = useState([]);

//   // Fetch team data from the API
//   useEffect(() => {
//     const fetchTeamData = async () => {
//       try {
//         const response = await fetch("https://tzm-1.onrender.com/api/teams"); 
//         const data = await response.json();
//         setTeam(data);
//       } catch (error) {
//         console.error("Error fetching team data:", error);
//       }
//     };

//     fetchTeamData();
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
//         backgroundAttachment: "fixed",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <Header />
//       <div className="flex flex-wrap justify-center items-center gap-4 py-[100px]">
//         {team.map((member) => (
//           <div key={member._id} className="relative">
//             <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
//             <img
//               src={member.image}
//               className="absolute w-52 h-52 top-16 left-16 object-cover rounded-full"
//               alt={member.name}
//             />
//             <p className="absolute ml-[70px] bottom-6 text-white">
//               {member.name}
//             </p>
//             <p className="absolute bottom-1 ml-[70px] font-bold text-[black]">
//               {member.position}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Teamweb;



import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Teamcard from "../../assets/img/Teamcard.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Teamweb.css'

const Teamweb = () => {
  const [team, setTeam] = useState([]);

  // Fetch team data from the API
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://tzm-1.onrender.com/api/teams");
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Keeps the middle card in focus
    centerPadding: "0px",
    focusOnSelect: true, // Allows clicking on slides to focus
    centerMode: true,  // Keeps the middle slide in focus
    centerPadding: "0px",

    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 1400, // Slides every 2 seconds
    pauseOnHover: true, // Stops autoplay when hovered
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only one slide on smaller screens
        },
      },
    ],
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="flex  justify-center items-center gap-4 py-[100px]">
        <Slider {...settings} className="w-[80%] h-full md:mt-[170px] mt-[80px] lg:mt-[70px]">
          {team.map((member) => (
            <div key={member._id} className="relative">
              <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
              <img
                src={member.image}
                className="absolute lg:w-52 lg:h-52 w-52 h-52 md:w-[150px] md:h-[150px] md:top-24 md:left-8 lg:top-16 top-16 left-10 lg:left-14  rounded-full"
                alt={member.name}
              />
              <p className="absolute ml-[70px] bottom-6 text-white">
                {member.name}
              </p>
              <p className="absolute bottom-1 ml-[70px] font-bold text-[black]">
                {member.position}
              </p>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Teamweb;
