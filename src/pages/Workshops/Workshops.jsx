// import ETWSCard from '../../components/Shared/ETWSCard'
// import Style from './Workshops.module.css'
import Header from '../../components/Header/Header'
import ETWSCard from '../../components/Shared/ETWSCard'
import WorkshopsBanner from './WorkshopsBanner'
import { WebTeamCard } from "../../constants";

import WebCard from "../../components/Shared/WebCard";

// import Header from "../../components/Header/Header";


const Workshops = () => {

  return (
    <main>
<Header/>
      <WorkshopsBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {WebTeamCard.map((t) => (
            <div key={t.id} className="flex justify-center">
              <WebCard img={t.img} name={t.name} role={t.role} />
            </div>
          ))}

        </div>
      </div>
        
    </main>
  )
}

export default Workshops