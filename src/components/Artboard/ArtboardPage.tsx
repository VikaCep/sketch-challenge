import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Container } from "../../styles/global";
import { useParams } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import { Artboard as ArtboardType } from "../../graphql/types";
import useGetDocumentById from "../../graphql/useGetDocumentById";
import CloseButton from "../Navbar/CloseButton";
import { NavbarTitle } from "../Navbar/styles";

const ArtboardPage: React.FC = () => {
  const { documentId, artboardIndex = 0 } = useParams();

  const {
    data: document,
    loading,
    error,
  } = useGetDocumentById(documentId as string);

  const [artboard, setArtboard] = useState<ArtboardType | undefined>(undefined);

  useEffect(() => {
    if (!loading) {
      const artboard = document.artboards?.entries[artboardIndex];
      if (artboard) {
        setArtboard(artboard);
      }
    }
  }, [loading, document, artboardIndex]);

  if (error || (!loading && !artboard)) {
    return <ErrorPage />;
  }

  return (
    <>
      <Navbar>
        <CloseButton homeUrl={`/documents/${documentId}`} />
        {artboard && <NavbarTitle>{artboard.name}</NavbarTitle>}
      </Navbar>
      <Container>
      </Container>
    </>
  );
};

export default ArtboardPage;
