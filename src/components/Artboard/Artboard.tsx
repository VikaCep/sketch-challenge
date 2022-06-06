import React, { FC } from "react";
import { Artboard as ArtboardType } from "../../graphql/types";
import * as S from "./styles";

interface ArtboardProps {
  artboard: ArtboardType;
}

const Artboard: FC<ArtboardProps> = ({ artboard }) => (
  <S.ArtboardContainer>
    <S.ArtboardImg src={artboard.files[0].url} alt={artboard.name} />
  </S.ArtboardContainer>
);

export default Artboard;
