import React, { ReactElement, ReactNode } from "react";
import "./button.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  onClick: () => any;
  type?: "transparent" | "blue";
}

export const Button = ({ children, onClick, type }: Props): ReactElement => {
  const typeClass = classNames({
    "button--transparent": type === "transparent",
    "button--blue": type === "blue"
  });

  const buttonClass = [typeClass, "button"].join(" ");

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
