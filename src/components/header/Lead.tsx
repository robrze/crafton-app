import React from "react";
import { Button } from "../button/button";

export const Lead = () => (
  <div className="lead">
    <div className="lead__content">
      <span className="lead__text">
        Będziesz uczyć się z ciekawością. <br />
        <span className="lead__blue-text">Obiecujemy.</span>
      </span>
      <br />
      <div>
        <Button onClick={() => {}}>ZOBACZ WIĘCEJ</Button>
        <Button transparent onClick={() => {}}>
          UMÓW SIĘ Z ANIOŁEM
        </Button>
      </div>
    </div>
  </div>
);
