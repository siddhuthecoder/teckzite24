import Style from './About.module.css'
import Header from '../../components/Header/Header'
import Banner from '../../components/banner/Banner'
import AboutBody from './AboutBody'


const About = () => {
  return (
    <>
      <Header />
      {/* <Banner text="ABOUT" bg="about-heading" /> */}
      <AboutBody />
    </>
  )
}

export default About