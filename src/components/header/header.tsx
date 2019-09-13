import React from "react";
import logo from "../../assets/icons/UW-bialy.png";
import { Button } from "../button/button";
import "./header.scss";

export const Header = () => (
  <>
    <nav className="navigation">
      <img src={logo} alt="logo" className="navigation__logo" />
      <ul className="navigation__items">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            I stopnia
          </a>
        </li>
        <li>
          <a href="/" className="navigation__link">
            II stopnia
          </a>
        </li>
        <li>
          <a href="/" className="navigation__link">
            Podyplomowe
          </a>
        </li>
        <li>
          <a href="/" className="navigation__link">
            Szkolenia
          </a>
        </li>
        <li>
          <a href="/" className="navigation__link">
            Usługi
          </a>
        </li>
      </ul>
    </nav>

    <div className="lead">
      <div className="lead__content">
        <p className="lead__text">Będziesz uczyć się z ciekawością.</p>
        <p className="lead__text lead__text--blue">Obiecujemy.</p>
        <div className="lead__actions">
          <Button onClick={() => {}}>ZOBACZ WIĘCEJ</Button>
          <Button transparent onClick={() => {}}>
            UMÓW SIĘ Z ANIOŁEM
          </Button>
        </div>
      </div>
    </div>
  </>
);
