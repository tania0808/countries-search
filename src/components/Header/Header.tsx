import React from "react";
import { Wrapper, NavLogo, ToggleModeButton } from "./Header.styled";
import { FaRegMoon, FaMoon } from "react-icons/fa";
type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Header = ({ children, ...restProps }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }: Props) {
  return <NavLogo>{children}</NavLogo>;
};

interface ThemeTogglerProps {
  themeToggler: () => void;
}

Header.ToggleButton = function HeaderToggleButton({ themeToggler }: ThemeTogglerProps) {
  const theme = localStorage.getItem('theme');
  return (
    <ToggleModeButton>
      {theme !== 'light' ? (
        <>
          <FaRegMoon onClick={themeToggler}/>
          <p>Light Mode</p>
        </>
      ): (
        <>
          <FaMoon onClick={themeToggler}/>
          <p>Dark Mode</p>
        </>
      )}
    </ToggleModeButton>
  );
};
