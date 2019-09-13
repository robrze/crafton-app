import React from "react";
import globe from "../../assets/images/globe.png";
import "./central-page-view.scss";

export const CentralPageView = () => {
  return (
    <div className="central-view">
      <div className="central-view__first-section">
        <div>
          <p className="central-view__title">Dla kogo?</p>
          <p className="central-view__description">
            Dedykowane nauczycielom posiadającym przygotowanie pedagogiczne,
            którzy chcą uzyskać merytoryczne i metodyczne przygotowanie do
            nauczania kolejnego przedmiotu - Geografii.
            <br />
            <br /> Studia adresowane są do osób legitymujących się wyższym
            wykształceniem na poziomie studiów licencjackim o specjalnościach
            nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne,
            lub słuchaczy legitymujących się wyższym wykształceniem na poziomie
            studiów magisterskich nadających kwalifikacje nauczycielskie i
            przygotowanie pedagogiczne, zgodnie z Rozporządzeniem Ministra
            Edukacji Narodowej z dnia 1 sierpnia 2017 r. w sprawie szczegółowych
            kwalifikacji wymaganych od nauczycieli{" "}
            <span className="central-view__link">(Dz.U. 2017 poz. 1575)</span>.
            <br />
            <br />
            <p className="requirement-text">Wymagane od kandydata:</p>
            <p className="requirement-row">
              <p className="arrow"> → </p>
              <p className="requirement-text">Ukończone studia wyższe</p>
            </p>
            <p className="requirement-row">
              <p className="arrow"> → </p>
              <p className="requirement-text">Przygotowanie pedagogiczne</p>
            </p>
          </p>
        </div>
        <img className="central-view__globe" src={globe} alt="globe.png" />
      </div>
    </div>
  );
};

export default CentralPageView;
