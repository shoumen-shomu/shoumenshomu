import AboutMe from "../layouts/AboutMe"
import Banner from "../layouts/Banner"
import Collaborations from "../layouts/Collaborations"
import Skills from "../layouts/Skills"
import Services from "../layouts/Services"
import Portfolio from "../layouts/Portfolio"
import Testimonials from "../layouts/Testimonials"

const Home = () => {
  return (
    <div>
        <Banner/>
        <Services/>
        <AboutMe/>
        <Collaborations/>
        <Skills/>
        <Portfolio/>
        <Testimonials/>
    </div>
  )
}

export default Home