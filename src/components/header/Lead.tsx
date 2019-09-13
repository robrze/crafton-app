import React from "react";
import { Button } from "../button/button";

export const Lead = () => (
  <div className="lead">
    <div className="lead__content">
      <span className="lead__text">
        Będziesz uczyć się z ciekawością. <br />
        <span className="lead__text--blue">Obiecujemy.</span>
      </span>
      <br />
      <div className="lead__actions">
        <Button onClick={() => {}}>ZOBACZ WIĘCEJ</Button>
        <Button transparent onClick={() => {}}>
          UMÓW SIĘ Z ANIOŁEM
        </Button>
      </div>
    </div>
  </div>
);
