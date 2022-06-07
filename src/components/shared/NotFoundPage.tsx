import React, { FC } from "react";
import { Container } from "../../styles/global";
import Logo from "../Navbar/Logo";
import Navbar from "../Navbar/Navbar";
import * as S from "../Navbar/styles";

const NotFoundPage: FC = () => {
  return (
    <>
      <Navbar>
        <S.NavbarEdge>
          <Logo />
          <S.NavbarTitle>Not found</S.NavbarTitle>
        </S.NavbarEdge>
      </Navbar>
      <Container>
        <p>Nothing to see here.</p>
      </Container>
    </>
  );
};

export default NotFoundPage;
