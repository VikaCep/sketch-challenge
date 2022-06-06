import React, { FC } from "react";
import { Artboard } from "../../graphql/types";
import ArtboardThumbnail from "../Artboard/ArtboardThumbnail";
import { DocumentContainer } from "./styles";

interface DocumentProps {
  artboards: Artboard[];
  documentId: string;
}

const Document: FC<DocumentProps> = ({ artboards, documentId }) => (
  <DocumentContainer>
    {artboards.map((artboard: Artboard, index: number) => (
      <ArtboardThumbnail
        key={index}
        artboard={artboard}
        documentId={documentId}
        index={index}
      />
    ))}
  </DocumentContainer>
);

export default Document;
