import Style from './About.module.css'
import AboutBanner from './AboutBanner'
import Header from '../../components/Header/Header'
import Banner from '../../components/banner/Banner'


const About = () => {
  return (
    <>
      <Header />
      <Banner text="ABOUT" bg="about-heading" />
      <div className="w-full h-screen"></div>
    </>
  )
}

export default About