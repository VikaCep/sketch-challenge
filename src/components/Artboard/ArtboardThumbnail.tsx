import React, { FC } from "react";
import { ListLink } from "../../styles/global";
import { Artboard } from "../../graphql/types";
import * as S from "./styles";

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
  <S.ArtboardWrapper data-testid="artboard-thumbnail">
    <ListLink to={`/documents/${documentId}/artboards/${index}`}>
      <S.ThumbnailWrapper>
        <S.ImgWrapper>
          <S.ThumbnailImg src={artboard.files[0].thumbnails[0].url} />
        </S.ImgWrapper>
      </S.ThumbnailWrapper>
      <S.ThumbnailName>{artboard.name}</S.ThumbnailName>
    </ListLink>
  </S.ArtboardWrapper>
);

export default ArtboardThumbnail;
