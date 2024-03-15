import React from 'react'
import Eve from '../../assets/img/events_card1.png'
import img from '../../assets/events/competetion.png'

const WECard = () => {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center  ">

                <div className="w- border flex flex-col border w-[200px] h-[300px] relative " >
                    <img src={Eve} alt="" className='scale-[1] mx-auto absolute top-0 left-[0px] ' />
                </div>
            </div>
        </>
    )
}

export default WECard
