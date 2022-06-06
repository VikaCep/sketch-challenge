import React, { FC, PropsWithChildren } from "react";
import * as S from "./styles";

const Navbar: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <S.NavbarWrapper>{children}</S.NavbarWrapper>;
};

export default Navbar;
