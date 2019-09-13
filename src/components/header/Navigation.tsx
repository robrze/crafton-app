import React from "react";
import logo from "../../assets/icons/UW-bialy.png";

export const Navigation = () => (
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
);
