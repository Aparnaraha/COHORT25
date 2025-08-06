import React from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FleetShowcase from "./components/FleetShowcase";
import CarTypes from "./components/CarTypes";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import Compliance from "./components/Compliance";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AchievementCounter from "./components/AchievementCounter";
import EnquirySection from "./components/EnquirySection";
import StillHaveQuestions from "./components/StillHaveQuestions";
import "./styles.css";

const App = () => {
  return (
    <div className="bg-[#F5F7F8]">
      <NavBar />
      <HeroSection />
      <FleetShowcase />
      <CarTypes />
      <Services />
      <WhyChooseUs />
      <AchievementCounter />
      <BlogSection />
      <StillHaveQuestions />
      <Compliance />
      <EnquirySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
