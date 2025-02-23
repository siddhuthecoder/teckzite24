import Style from './Schedule.module.css'
import {useState} from 'react'
import EWschedule from './EWschedule'
import Header from '../../components/Header/Header';
import TabsButton from "../../components/button/TabsButton";
const Schedule = () => {
  const [tab,setTab] = useState("Events")
  return (
    <>
        <Header />
        <div className="text-center main-heading"></div>
        <div className="w-full max-w-[500px] flex items-center justify-around mt-[120px]  mx-auto">
          <div className={` py-2 rounded-[4px] cursor-pointer ${tab=="Events"?"gradient-bg":""}`} onClick={() => setTab("Events")}>   
            <TabsButton
                name="Events"
                isActive={tab ==="Events"} 
              /></div>
          <div className={` px-2 py-1 rounded-[4px] cursor-pointer ${tab=="Workshops"?"gradient-bg":""}`} onClick={() => setTab("Workshops")}>
          <TabsButton
                name="Workshops"
                isActive={tab ==="Workshops"} 
              />
          </div>
          <div className={` px-2 py-1 rounded-[4px] cursor-pointer ${tab=="Stage"?"gradient-bg":""}`} onClick={() => setTab("Stage")}>
          <TabsButton
                name="Stage"
                isActive={tab ==="Stage"} 
              />
          </div>
        </div>
        <div className="mx-auto">
          {tab=== "Events" && (
            <EWschedule />
          )} 
        </div>

    </>

  )
}

export default Schedule