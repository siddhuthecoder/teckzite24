import React from 'react'
import s1 from '../../assets/img/s1.svg'
import s2 from '../../assets/img/s2.svg'
import s3 from '../../assets/img/s3.svg'
import s4 from '../../assets/img/s4.svg'
import s5 from '../../assets/img/s5.svg'
import s6 from '../../assets/img/s6.svg'
import s7 from '../../assets/img/s7.svg'
import s8 from '../../assets/img/s8.svg'
import Eve from '../../assets/img/event.jpg'


const EWCard = () => {
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-[250px] h-[360px] flex justify-center   relative">
                    <img src={s1} alt="" className='absolute left-[-20%] top-[-20%]' />
                    <img src={s2} alt="" className='absolute right-[-20%] top-[-20%]' />
                    <img src={s3} alt="" className="absolute top-[27.55%] left-[-20%] " />
                    <img src={s4} alt="" className="absolute top-[27.55%] right-[-23%] " />
                    <img src={s5} alt="" className="absolute bottom-[0%] left-[23%] scale-[1.3] " />
                    <img src={s6} alt="" className="absolute bottom-[0%] left-[28.4%]  " />
                    <img src={s7} alt="" className="absolute bottom-[-14%] left-[17%] scale-[1.3] " />
                    <img src={s8} alt="" className="absolute bottom-[-14%] right-[0%] scale-[1.3] " />
                    <img src={s8} alt="" className="absolute bottom-[-14%] left-[0%] scale-[1.3] " style={{ transform: "rotateY(180)" }} />
                    <div className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute left-[3%] top-[40%]" style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}></div>
                    <div className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute right-[3%] top-[40%]" style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}></div>
                    <div className="w-[67px] h-[4px] bg-[#C8016D]   absolute bottom-[-5%] left-[21%] " style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}></div>
                    <div className="w-[67px] h-[4px] bg-[#C8016D]  absolute bottom-[-5%] right-[21%] " style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}></div>
                    <div className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[0%] left-[5%] " style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ", transform: "rotate(45deg)" }}></div>
                    <div className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[0%] right-[5%] " style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ", transform: "rotate(-45deg)" }}></div>
                    <div className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[10%] left-[-5%] " style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ", transform: "rotate(70deg)" }}></div>
                    <div className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[10%] right-[-5%] " style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ", transform: "rotate(-70deg)" }}></div>
                    <div className="w-[200px] h-[270px] ">
                        <img src={Eve} alt="" className='w-[200px] h-[270px]' />
                    </div>

                </div>
            </div >
        </>
    )
}

export default EWCard
/* Rectangle 23 */
