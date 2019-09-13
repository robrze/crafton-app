import React, { ReactElement, ReactNode } from "react";
import "./button.scss";

interface Props {
  children: ReactNode;
  onClick: () => any;
  transparent?: boolean;
}

export const Button = ({ children, onClick, transparent }: Props): ReactElement => {
  const buttonClassName = transparent ? "button button--transparent" : "button";

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
