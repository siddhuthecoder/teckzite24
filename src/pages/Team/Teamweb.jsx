import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Teamcard from "../../assets/img/Teamcard.webp";
import Pipe from "../../assets/img/pipe.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Teamweb.css";

const Teamweb = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyData = [
    { _id: "1", name: "John Doe", position: "Developer", image: "/assets/dummy1.png" },
    { _id: "2", name: "Jane Smith", position: "Designer", image: "/assets/dummy2.png" },
    { _id: "3", name: "Alice Johnson", position: "Project Manager", image: "/assets/dummy3.png" },
    { _id: "4", name: "Bob Williams", position: "Marketing", image: "/assets/dummy4.png" },
    { _id: "5", name: "Charlie Brown", position: "Tester", image: "/assets/dummy5.png" }
  ];

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://tzm-1.onrender.com/api/teams");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setTeam(data.length > 0 ? data : dummyData);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setTeam(dummyData);
      } finally {
        setLoading(false);
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
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1400,
    pauseOnHover: true,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/assets/cbg.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="flex flex-col w-screen justify-center items-center gap-4 py-[100px]">
        <div className="absolute top-[-39px] md:-right-20 lg:right-0 md:top-[170px] lg:top-[70px]">
          <img src={Pipe} className="md:w-[350px] w-[250px] md:h-[590px] h-[300px] md:rotate-0 rotate-90" />
        </div>
        <div className="absolute md:-left-36 lg:-left-16 md:top-[170px] top-[450px] lg:top-[70px]">
          <img src={Pipe} className="md:w-[350px] w-[250px] md:h-[590px] h-[300px] md:rotate-0 rotate-90 scale-y-[-1]" />
        </div>
        <Slider {...settings} className="w-[80%] h-full md:mt-[170px] mt-[100px] lg:mt-[70px]">
          {team.map((member) => (
            <div key={member._id} className="relative">
              <img src={Teamcard} className="w-80 md:h-96 h-80" alt="Team Card" />
              <img
                src={member.image}
                className="absolute lg:w-52 lg:h-52 w-[170px] h-[170px] md:w-[150px] md:h-[150px] md:top-24 md:left-8 lg:top-16 top-16 left-14 lg:left-14 rounded-full"
                alt={member.name}
              />
              <p className="absolute ml-[70px] bottom-6 text-white">{member.name}</p>
              <p className="absolute bottom-1 ml-[70px] font-bold text-[black]">{member.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Teamweb;
  