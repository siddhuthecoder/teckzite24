import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Cardteam from "../../assets/img/Cardteam.png"

const TeamTable = () => {
  const [teamData, setTeamData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const staticTeamData = [
    {
      _id: "6797dae29da2d32b73cbadae",
      name: "K.Krishna Kireeti",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1738005217/user_photos/i9rgchdgmzzdpulksih7.jpg",
      position: "Student Convenor",
    },
    {
      _id: "679881d4c40188c86f8d9ef1",
      name: "U.Vijaya Krishna",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1738047955/user_photos/eagbqed4lasfoynvyui4.jpg",
      position: "Student Co-Convenor",
    },
    {
      _id: "679882e1c40188c86f8d9efb",
      name: "T.Phanindra",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1738048224/user_photos/hvdz8klgvdrq1idqveco.jpg",
      position: "Student Treasurer",
    },
    {
      _id: "67988335c40188c86f8d9f02",
      name: "G.Sai Vineesha",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1738048308/user_photos/a40sbhvq6subznfe2qch.jpg",
      position: "Events Coordinator",
    },
    {
      _id: "679883a4c40188c86f8d9f05",
      name: "K.V.Abhinash Kumar",
      image: "https://res.cloudinary.com/djkjpikye/image/upload/v1738048420/user_photos/eenu5gre4jkem1omjrgd.jpg",
      position: "Marketing Coordinator",
    },
  ]

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://tzm-1.onrender.com/api/coreteam")
        if (!response.ok) throw new Error("Failed to fetch team data")
        const data = await response.json()
        setTeamData(data.length > 0 ? data : staticTeamData)
      } catch (error) {
        console.error("Error fetching team data:", error)
        setError(error.message)
        setTeamData(staticTeamData) // Use static data on error
      } finally {
        setLoading(false)
      }
    }

    fetchTeamData()
  }, [])

  const renderTeamMember = (member, isLoading = false) => (
    <div key={member._id} className="flex flex-row justify-evenly items-center mt-[15px] relative flex-wrap">
      <img src={Cardteam || "/placeholder.svg"} alt="Row Tail" className="object-cover w-[300px] md:w-[400px]" />
      <div className="inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 text-white font-semibold">
        <div
          className={`absolute w-[75px] h-[75px] md:w-[100px] md:h-[100px] text-center ml-[-455px] md:ml-[-605px] rounded-md mt-[-6px] overflow-hidden ${
            isLoading ? "animate-pulse bg-gray-300" : ""
          }`}
        >
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className={`w-[95px] h-[95px] ml-[3px] object-cover ${isLoading ? "opacity-50" : ""}`}
          />
        </div>
        <div>
          <p
            className={`absolute ml-[-170px] md:ml-[-230px] mt-[-40px] md:mt-[-40px] md:text-[17px] w-[150px] md:w-[220px] ${
              isLoading ? "animate-pulse" : ""
            }`}
          >
            {member.name}
          </p>
          <p
            className={`absolute ml-[-170px] md:ml-[-230px] mt-[5px] md:mt-[5px] md:text-[17px] md:w-[220px] w-[150px] ${
              isLoading ? "animate-pulse" : ""
            }`}
          >
            {member.position}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Header />
      <div className="mb-10 relative">
        <div
          className="fixed inset-0 top-0 bg-cover bg-center min-h-screen bg-no-repeat"
          style={{
            backgroundImage: "url('/workshopbg.webp')",
          }}
        ></div>
        <div className="fixed inset-0 top-0 h-screen bg-black bg-opacity-80"></div>
        <h2 className="text-[26px] mt-[10px] text-center text-white relative z-10">Student Core</h2>
        <div className="w-full overflow-x-auto relative z-10">
          {error ? (
            <div className="flex flex-wrap justify-evenly items-center w-full mt-[60px]">
              {staticTeamData.map((member) => renderTeamMember(member, false))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-evenly items-center w-full mt-[60px]">
              {(loading ? staticTeamData : teamData).map((member) => renderTeamMember(member, loading))}
            </div>
          )}
          <div className="w-full h-[100px]"></div>
        </div>
      </div>
    </>
  )
}

export default TeamTable

