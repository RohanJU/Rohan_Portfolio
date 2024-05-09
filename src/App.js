import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Myexperience from "./Components/Myexperience/Myexperience";
import Nav from "./Components/Nav/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import { Testimonials } from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Myexperience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
