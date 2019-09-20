import React from "react";
import { Button } from "../button/button";

const VerticalBullets = () => (
  <div className="bullets">
    <span className="bullet">•</span>
    <span className=" bullet bullet--yellow">•</span>
    <span className="bullet">•</span>
    <span className="bullet">•</span>
  </div>
);

export const Lead = () => (
  <div className="lead">
    <div className="lead__content">
      <p className="lead__text">
        Będziesz uczyć się z ciekawością. <br />
        <span className="lead__blue-text">Obiecujemy.</span>
      </p>
      <br />
      <div>
        <Button onClick={() => {}}>ZOBACZ WIĘCEJ</Button>
        <Button type="transparent" onClick={() => {}}>
          UMÓW SIĘ Z ANIOŁEM
        </Button>
      </div>
      <VerticalBullets />
    </div>
  </div>
);
