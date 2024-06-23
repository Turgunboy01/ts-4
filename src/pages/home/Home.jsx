import React from "react";
import Hero from "../../components/home/hero/Hero";
import About from "../../components/home/about/About";
import Services from "../../components/home/services/Services";
import Believer from "../../components/home/believer/Believer";
import Contact from "../../components/home/contact/Contact";
import Portfolio from "../../components/home/portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Believer />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
