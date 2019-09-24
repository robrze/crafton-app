import React, { useState } from "react";
import "./checkbox.scss";

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <span onClick={() => setIsChecked(!isChecked)}>
      <input type="checkbox" checked={isChecked} />
      <span></span>
    </span>
  );
};
