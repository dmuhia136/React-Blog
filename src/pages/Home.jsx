import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StorySection from "../components/StorySection";

function Home() {
  return (
    <div className="relative w-full">
      <Navbar />
      <HeroSection />
      <StorySection />
      <Footer />
    </div>
  );
}

export default Home;
