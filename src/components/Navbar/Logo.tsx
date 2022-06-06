import React, { FC } from "react";
import { Link } from "react-router-dom";
import SketchLogo from "../../assets/sketch-logo.svg";
import { LogoImg } from "./styles";

const Logo: FC = () => {
  return (
    <Link to="/">
      <LogoImg src={SketchLogo} alt="Logo" />
    </Link>
  );
};

export default Logo;
