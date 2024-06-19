import About from "../components/About";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Expertise />
      <Footer />
    </>
  );
};

export default Home;
