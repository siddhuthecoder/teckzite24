import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Teamcard from "../../assets/img/Teamcard.webp"
import Pipe from "../../assets/img/pipe.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./Teamweb.css"

const Teamweb = () => {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  const staticTeamData = [
    {
      _id: "6795bd88f817652fe3cdcc39",
      name: "Y.Siddartha",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1737866631/user_photos/zhinj3u5863lswwfkpke.png",
      position: "Web Team Manager",
    },
    {
      _id: "6795bdeef817652fe3cdcc3c",
      name: "Shiva",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1737866733/user_photos/kkbdrattv0ksc7opg7se.png",
      position: "Web Team Coordinator",
    },
    {
      _id: "6795be21f817652fe3cdcc3e",
      name: "Sribabu Mandraju",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1737872904/user_photos/dckcr5g4oswa7cekf5p5.png",
      position: "Web Team Coordinator",
    },
    {
      _id: "6795be8df817652fe3cdcc40",
      name: "Yasvanth",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1737873332/user_photos/sd0ktlmb63ddmyjdfufz.png",
      position: "Web Team Coordinator",
    },
    {
      _id: "67978db85bcea54807682441",
      name: "Aswini Kodati",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1737985463/user_photos/yjzzjzysygty6m6zrt3q.png",
      position: "Web designer",
    },
  ]

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://tzm-1.onrender.com/api/teams")
        if (!response.ok) throw new Error("Failed to fetch")
        const data = await response.json()
        setTeam(data.length > 0 ? data : staticTeamData)
      } catch (error) {
        console.error("Error fetching team data:", error)
        setTeam(staticTeamData)
      } finally {
        setLoading(false)
      }
    }

    fetchTeamData()
  }, [])

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
  }

  const renderTeamMember = (member) => (
    <div key={member._id} className="relative">
      <img src={Teamcard || "/placeholder.svg"} className="w-80 md:h-96 h-80" alt="Team Card" />
      <img
        src={member.image || "/placeholder.svg"}
        className="absolute lg:w-52 lg:h-52 w-[170px] h-[170px] md:w-[150px] md:h-[150px] md:top-24 md:left-8 lg:top-16 top-16 left-14 lg:left-14 rounded-full"
        alt={member.name}
      />
      <p className="absolute  ml-[70px] bottom-5 md:bottom-6 text-white">{member.name}</p>
      <p className="absolute  bottom-1 md:ml-[70px] ml-[55px] font-bold text-[black]">{member.position}</p>
    </div>
  )

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/assets/cbg.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="flex flex-col w-screen justify-center items-center gap-4 py-[100px]">
        <div className="absolute top-[-39px] md:-right-20 lg:right-0 md:top-[170px] lg:top-[70px]">
          <img
            src={Pipe || "/placeholder.svg"}
            className="md:w-[350px] w-[250px] md:h-[590px] h-[300px] md:rotate-0 rotate-90"
            alt="Pipe"
          />
        </div>
        <div className="absolute md:-left-36 lg:-left-16 md:top-[170px] top-[450px] lg:top-[70px]">
          <img
            src={Pipe || "/placeholder.svg"}
            className="md:w-[350px] w-[250px] md:h-[590px] h-[300px] md:rotate-0 rotate-90 scale-y-[-1]"
            alt="Pipe"
          />
        </div>
        {loading ? (
          <div className="text-white text-2xl">Loading...</div>
        ) : (
          <Slider {...settings} className="w-[80%] h-full md:mt-[170px] mt-[100px] lg:mt-[70px]">
            {team.map(renderTeamMember)}
          </Slider>
        )}
      </div>
    </div>
  )
}

export default Teamweb

