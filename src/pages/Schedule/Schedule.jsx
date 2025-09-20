import Style from './Schedule.module.css'
import {useState} from 'react'
import EWschedule from './EWschedule'
import Header from '../../components/Header/Header';
import TabsButton from "../../components/button/TabsButton";
const Schedule = () => {
  const [tab,setTab] = useState("Events")
  return (
    <div style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('notfound2bg.webp')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      w  <Header />
        <div className="text-center main-heading"></div>
        <div className="w-full max-w-[500px] flex items-center justify-around  mx-auto">
          <div className={` py-2 mt-[120px] rounded-[4px] cursor-pointer ${tab=="Events"?"gradient-bg":""}`} onClick={() => setTab("Events")}>   
            <TabsButton
                name="Events"
                isActive={tab ==="Events"} 
              /></div>
          
        </div>
        <div className="mx-auto mt-[20px]">
          {tab=== "Events" && (
            <EWschedule />
          )} 
        </div>

    </div>

  )
}

export default Schedule