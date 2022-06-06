import React, { FC, PropsWithChildren } from "react";
import { NavbarWrapper } from "./styles";

const Navbar: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <NavbarWrapper>{children}</NavbarWrapper>;
};

export default Navbar;
