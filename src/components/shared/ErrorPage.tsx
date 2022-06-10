import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global";
import Logo from "../Navbar/Logo";
import Navbar from "../Navbar/Navbar";
import * as S from "../Navbar/styles";

const ErrorPage: FC = () => {
  return (
    <>
      <Navbar>
        <S.NavbarEdge>
          <Logo />
          <S.NavbarTitle>Oops</S.NavbarTitle>
        </S.NavbarEdge>
      </Navbar>
      <Container>
        <p data-testid="error-text">
          There has been an error. Please try again later or go back to{" "}
          <Link to={`/`}>the main page</Link>.
        </p>
      </Container>
    </>
  );
};

export default ErrorPage;
