import React, { FC } from "react";
import { ListLink } from "../../styles/global";
import { Artboard } from "../../graphql/types";
import {
  ArtboardWrapper,
  ImgWrapper,
  ThumbnailWrapper,
  ThumbnailImg,
  ThumbnailName,
} from "./styles";

interface ArtboardThumbnailProps {
  artboard: Artboard;
  documentId: string;
  index: number;
}

const ArtboardThumbnail: FC<ArtboardThumbnailProps> = ({
  artboard,
  documentId,
  index,
}) => (
  <ArtboardWrapper>
    <ListLink to={`/documents/${documentId}/artboards/${index}`}>
      <ThumbnailWrapper>
        <ImgWrapper>
          <ThumbnailImg src={artboard.files[0].thumbnails[0].url} />
        </ImgWrapper>
      </ThumbnailWrapper>
      <ThumbnailName>{artboard.name}</ThumbnailName>
    </ListLink>
  </ArtboardWrapper>
);

export default ArtboardThumbnail;
