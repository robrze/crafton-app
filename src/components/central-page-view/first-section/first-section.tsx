import React from 'react';
import globe from '../../../assets/images/globe.png';
import './first-section.scss';

export const FirstSection = () => (
  <div className="first-section">
    <div>
      <p className="title">Dla kogo?</p>
      <div className="description">
        Dedykowane nauczycielom posiadającym przygotowanie pedagogiczne, którzy
        chcą uzyskać merytoryczne i metodyczne przygotowanie do nauczania
        kolejnego przedmiotu - Geografii.
        <br />
        <br /> Studia adresowane są do osób legitymujących się wyższym
        wykształceniem na poziomie studiów licencjackim o specjalnościach
        nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne, lub
        słuchaczy legitymujących się wyższym wykształceniem na poziomie studiów
        magisterskich nadających kwalifikacje nauczycielskie i przygotowanie
        pedagogiczne, zgodnie z Rozporządzeniem Ministra Edukacji Narodowej z
        dnia 1 sierpnia 2017 r. w sprawie szczegółowych kwalifikacji wymaganych
        od nauczycieli{' '}
        <span className="description-link">(Dz.U. 2017 poz. 1575)</span>.
        <div className="requirements">
          <p>Wymagane od kandydata:</p>
          <div className="requirement-row">
            <p className="arrow"> → </p>
            <p>Ukończone studia wyższe</p>
          </div>
          <div className="requirement-row">
            <p className="arrow"> → </p>
            <p>Przygotowanie pedagogiczne</p>
          </div>
        </div>
      </div>
    </div>
    <img className="central-view__image" src={globe} alt="globe.png" />
  </div>
);
