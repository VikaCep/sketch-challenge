import React, { FC } from "react";
import { Artboard as ArtboardType } from "../../graphql/types";
import { ArtboardContainer, ArtboardImg } from "./styles";

interface ArtboardProps {
  artboard: ArtboardType;
}

const Artboard: FC<ArtboardProps> = ({ artboard }) => (
  <ArtboardContainer>
    <ArtboardImg src={artboard.files[0].url} alt={artboard.name} />
  </ArtboardContainer>
);

export default Artboard;
