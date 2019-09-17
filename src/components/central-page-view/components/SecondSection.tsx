import React from "react";
import handshake from "../../../assets/images/handshake.png";
import blueRectangle from "../../../assets/images/blue-rectangle.png";

export const SecondSection = () => (
  <div className="central-view__second-section">
    <img className="central-view__image" src={handshake} alt="handshake.png" />
    <img
      className="central-view__blue-rectangle"
      src={blueRectangle}
      alt="blue-rectangle.png"
    />
    <p className="rectangle-text">Nowość</p>
    <div>
      <p className="central-view__title central-view__title--second">Po co?</p>
      <p className="central-view__description central-view__description--second">
        UW wie co zrobić, by programy proponowanych kierunków studiów były jak
        najbardziej atrakcyjne z biznesowego punktu widzenia. Do współpracy
        zapraszamy przedsiębiorców, trenerów, doświadczonych praktyków. Dbamy o
        to, żeby nasi studenci korzystali z doświadczenia i wiedzy osób, które
        odniosły w życiu zawodowy sukces. Dążymy do tego, by wybierający naszą
        uczelnię już w trakcie studiów mieli kontakt z jak największą liczbą
        pracodawców i praktyków biznesu ponieważ wiemy, że pomoże to im w
        zdobyciu wielu potrzebnych kwalifikacji oraz umiejętności, które
        zaprocentują w każdym miejscu pracy a także zainspiruje do poszerzania
        swoich kompetencji.
      </p>
    </div>
  </div>
);
