import React, { FC } from "react";
import { Link } from "react-router-dom";
import SketchLogo from "../../assets/sketch-logo.svg";
import * as S from "./styles";

const Logo: FC = () => {
  return (
    <Link to="/">
      <S.LogoImg src={SketchLogo} alt="Logo" />
    </Link>
  );
};

export default Logo;
