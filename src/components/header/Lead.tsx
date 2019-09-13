import React from "react";
import { Button } from "../button/button";

export const Lead = () => (
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
);
