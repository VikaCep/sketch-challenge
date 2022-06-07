import React, { FC } from "react";
import { Container } from "../../styles/global";
import * as S from "./styles";

const LoadingPage: FC = () => {
  return (
    <Container>
      <S.CenteredText>Loading...</S.CenteredText>
    </Container>
  );
};

export default LoadingPage;
