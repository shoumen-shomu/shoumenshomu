import AboutMe from "../layouts/AboutMe";
import Banner from "../layouts/Banner";
import Collaborations from "../layouts/Collaborations";
import Skills from "../layouts/Skills";
import Services from "../layouts/Services";
import Portfolio from "../layouts/Portfolio";
import Testimonials from "../layouts/Testimonials";

import ContactPart from "../layouts/ContactPart";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Services />
      <Collaborations />
      <Skills />
      <Portfolio />
      <Testimonials />
      <ContactPart />
    </div>
  );
};

export default Home;
