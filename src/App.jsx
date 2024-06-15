import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <Footer />
    </>
  );
}

export default App;
