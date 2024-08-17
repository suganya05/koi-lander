import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import AboutUs from "./components/Aboutus";
import VideoPromo from "./components/VideoPromo";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <VideoPromo />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
