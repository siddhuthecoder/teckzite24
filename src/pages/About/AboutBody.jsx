import React from 'react'
import i1 from '../../assets/img/about/img01.webp'
import i2 from '../../assets/img/about/img02.webp'
import i3 from '../../assets/img/about/img03.webp'
import i4 from '../../assets/img/about/img04.webp'
import i5 from '../../assets/img/about/img05.webp'
import i6 from '../../assets/img/about/img06.webp'
import i7 from '../../assets/img/about/img07.webp'
import i8 from '../../assets/img/about/img08.webp'
import i9 from '../../assets/img/about/img09.webp'
import i10 from '../../assets/img/about/img10.webp'
import i11 from '../../assets/img/about/img11.webp'
import i12 from '../../assets/img/about/img12.webp'



const AboutBody = () => {
  return (
    <>
        <div className="w-full min-h-[100vh]">
            <div className="text-center  font-bold text-[40px] sm:text-[60px] md:text-[80px] text-white main-heading">ABOUT</div>
            <div className="w-[97%] max-w-[1200px] border-[#f529a3] rounded-[5px]  border-[2px] flex justify-center items-center mx-auto min-h-[400px] backdrop-blur-md relative ">
                <div className="mx-3 z-[2]">
                    <p className="px-3 mt-3" style={{textIndent:"30px"}}>Teckzite is a national-level technological extravaganza that ignites young minds with its unique vision for the future of technology. Organized by the SDCAC wing of RGUKT Nuzvid, it serves as South India's largest pageant. Our vision for Teckzite is to not only impart knowledge and deepen thinking but also to explore new horizons in technology.</p>
                    <p className="px-3 mt-3" style={{textIndent:"30px"}}>The event this time spans over 2 days and 3 nights, packed with a wide array of competitions, exhibitions, and entertainment activities. Participants engage in various technical competitions ranging from coding challenges, robotics competitions, circuit designing, to hackathons. These events provide students with the opportunity to apply their theoretical knowledge to real-world problems, fostering innovation and critical thinking.</p>
                    <p className="px-3 mt-3" style={{textIndent:"30px"}}>
                        Moreover, Teckzite often hosts workshops and seminars conducted by industry experts and academics. These sessions cover a wide range of topics including the latest technological advancements, career guidance, entrepreneurship, and emerging trends in various fields.
                        Beyond the competitive events and workshops, fun activities, gaming zones, cultural performances, and celebrity appearances add an element of entertainment and excitement to the festival, creating a vibrant and dynamic atmosphere.</p>
                    <p className="px-3 mt-3 mb-3" style={{textIndent:"30px"}}>
                    Every time, the event comes with a new theme, aiming to inspire creativity and innovation among participants. The theme for this year's Teckzite is METAVERSE, a virtual reality space, where people can interact, play and work in a digital world. The theme is to impart knowledge on students to know more about Virtual Reality and Augmented Reality. The futur
                    e of technology lies in the hands of metaverse "Metaverse," embodies innovation, creativity, and the explora
                    tion of new frontiers in technology. Participants are encouraged to envision and create their own interpretation
                    s of the metaverse, pushing the boundaries of virtual reality, social interaction, and digital experiences. Through 
                    workshops, competitions, and discussions, Teckzite aims to inspire and empower students to contribute to the ongoing 
                    evolution of the metaverse and shape the future of digital technology.
                    </p>
                </div>               
            </div>
            <div className="text-center  font-bold text-[40px] sm:text-[60px] md:text-[80px] text-white main-heading">MEMORIES</div>
            <div className="w-full my-3 mb-[80px]">
            <div className="memos w-[97%]  max-w-[1200px] mx-auto ">
                <a href="#" className="memo-1">
                    <img src={i1} />
                </a> 
                <a href="#" className="memo-2">
                    <img src={i2} />
                </a>
                <a href="#" className="memo-3">
                    <img src={i3} />
                </a>
                <a href="#" className="memo-4">
                    <img src={i4} />
                </a>
                <a href="#" className="memo-5">
                    <img src={i5} />
                </a>
                <a href="#" className="memo-6">
                    <img src={i6} />
                </a>
                <a href="#" className="memo-7">
                    <img src={i7} />
                </a>
                <a href="#" className="memo-8">
                    <img src={i8} />
                </a>
                <a href="#" className="memo-9">
                    <img src={i9} />
                </a>
                <a href="#" className="memo-10">
                    <img src={i10} />
                </a>
                <a href="#" className="memo-11">
                    <img src={i11} />
                </a>
                <a href="#" className="memo-12">
                    <img src={i12} />
                </a>
                
            </div>  
            </div>
        </div>
    </>
  )
}

export default AboutBody
