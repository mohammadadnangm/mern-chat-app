import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Numbers from "../components/Numbers";
import Services from "../components/Services";
import AboutUs from "../components/AboutusC";
import UseApp from "../components/UseApp";
import WhyUs from "../components/WhyUs";
import ForTutor from "../components/ForTutor";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Numbers />
      <Services />
      <AboutUs />
      <UseApp />
      <WhyUs />
      <ForTutor />
      <Footer />
    </>
  );
};

export default Home;
