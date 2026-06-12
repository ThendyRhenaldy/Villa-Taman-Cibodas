import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Facilities from "./sections/Facilities";
import Statistics from "./sections/Statistics";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import FAQ from "./sections/FAQ";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Statistics />
      <Gallery />
      <Location />
      <FAQ />
      <WhatsappButton />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;