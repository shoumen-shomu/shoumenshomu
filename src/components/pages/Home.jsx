import AboutMe from "../layouts/AboutMe"
import Banner from "../layouts/Banner"
import Collaborations from "../layouts/Collaborations"
import Experience from "../layouts/Experience"
import Services from "../layouts/Services"


const Home = () => {
  return (
    <div>
        <Banner/>
        <Services/>
        <AboutMe/>
        <Collaborations/>
        <Experience/>
    </div>
  )
}

export default Home