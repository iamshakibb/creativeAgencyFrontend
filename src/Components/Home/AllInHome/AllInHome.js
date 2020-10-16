import React from "react";
import ClientFeedBack from "../ClientFeedBack/ClientFeedBack";
import ClientSection from "../ClientSection/ClientSection";
import ContactUs from "../ContactUs/ContactUs";
import FooterSectiom from "../FooterSection/FooterSectiom";
import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../NavBar/NavBar";
import ServiceSection from "../ServiceSection/ServiceSection";
import WorkSection from "../WorkSection/WorkSection";
import "./AllInHome.css";

export default function AllInHome() {
  document.body.style.backgroundColor = "#fff";
  return (
    <div>
      <div className="LandingSite">
        <NavBar />
        <HeroSection />
      </div>
      <ClientSection />
      <ServiceSection />
      <WorkSection />
      <ClientFeedBack />
      <div className="FooterSection" id="FooterSection">
        <ContactUs />
        <FooterSectiom />
      </div>
    </div>
  );
}
