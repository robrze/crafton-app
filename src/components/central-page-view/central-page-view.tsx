import React from "react";
import "./central-page-view.scss";
import { ThirdSection } from "./third-section/third-section";
import { SecondSection } from "./second-section/second-section";
import { FirstSection } from "./first-section/first-section";
import { ContactForm } from "./contact-form/contact-form";
import { Footer } from "../footer/footer";

export const CentralPageView = () => {
  return (
    <div className="central-view">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <div>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default CentralPageView;
