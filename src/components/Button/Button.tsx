import { MouseEventHandler } from "react";
import { Btn } from "./Button.styled";

interface ButtonProps {
  buttonText: string;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  children?: JSX.Element | JSX.Element[];
}

export const Button = ({
  buttonText,
  clickHandler,
  type,
  children,
}: ButtonProps) => {
  if (clickHandler) {
    return (
      <Btn type={type} onClick={clickHandler}>
        {children && children}
        {buttonText}
      </Btn>
    );
  }
  return (
    <Btn type={type}>
      {children && children}
      {buttonText}
    </Btn>
  );
};
