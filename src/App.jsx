/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Extra from "./components/Extra";
import YellowSection from "./components/YellowSection";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Extra />
      <YellowSection />
      <Footer />
    </div>
  );
}

export default App;
