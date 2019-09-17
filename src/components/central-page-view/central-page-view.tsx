import React from "react";
import "./central-page-view.scss";
import { ThirdSection } from "./components/ThirdSection";
import { SecondSection } from "./components/SecondSection";
import { FirstSection } from "./components/FirstSection";
import { ContactForm } from "./contact-form";

export const CentralPageView = () => {
  return (
    <div className="central-view">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ContactForm />
    </div>
  );
};

export default CentralPageView;
