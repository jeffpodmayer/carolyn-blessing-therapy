import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Services />
      <Footer />
    </>
  );
}

export default App;
