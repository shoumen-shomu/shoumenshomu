import AboutMe from "../layouts/AboutMe"
import Banner from "../layouts/Banner"
import Collaborations from "../layouts/Collaborations"
import Services from "../layouts/Services"


const Home = () => {
  return (
    <div>
        <Banner/>
        <Services/>
        <AboutMe/>
        <Collaborations/>
    </div>
  )
}

export default Home