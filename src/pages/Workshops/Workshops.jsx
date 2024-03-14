import ETWSCard from '../../components/Shared/ETWSCard'
// import Style from './Workshops.module.css'
import Header from '../../components/Header/Header'
import WorkshopsBanner from './WorkshopsBanner'




const Workshops = () => {

  return (
    <main>
      {/* <Header /> */}
      <WorkshopsBanner />
      
            <>
              <div className="w-full flex items-center justify-around gap-4 flex-wrap"  >
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />

              </div>
            </>
        
    </main>
  )
}

export default Workshops