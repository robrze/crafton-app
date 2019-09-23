import React, { useState } from "react";
//@ts-ignore
import ModalVideo from "react-modal-video";
import "./play-button.scss";
import "./third-section.scss";

export const ThirdSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  console.log("videoOpen: ", videoOpen);

  return (
    <div className="third-section">
      <div>
        <p className="title">Z kim?</p>
        <p className="description">
          Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi do
          ciągłego rozwoju. CDV to miejsce, w którym studenci z zainteresowaniem
          i z przyjemnością zdobywają wiedzę. Zarówno studenci, absolwenci, jak
          i pracownicy to osoby nie tylko ciekawe świata, ale także pełne pasji
          w odkrywaniu nowych rzeczy i w pozytywny sposób wpływające na swoje
          otoczenie. <br />
          <br /> Nasze kierunki studiów są interesujące i innowacyjne, tworzone
          we współpracy z pracodawcami oraz na podstawie trendów w światowej
          gospodarce i kierunku zmian na dynamicznym rynku pracy. Nasi
          absolwenci znajdują pracę zgodną ze swoimi zainteresowaniami i
          wykształceniem.
          <br />
          <br />
        </p>
      </div>
      <img
        className="central-view__image central-view__image--video"
        src={require('../../../assets/images/video.png')}
        onClick={() => setVideoOpen(true)}
        alt="video.png"
      />
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setVideoOpen(false)}
      />
      <div className="play-button"></div>
    </div>
  );
};
