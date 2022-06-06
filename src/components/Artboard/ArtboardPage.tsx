import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Container } from "../../styles/global";
import { useParams } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import { Artboard as ArtboardType } from "../../graphql/types";
import useGetDocumentById from "../../graphql/useGetDocumentById";
import CloseButton from "../Navbar/CloseButton";
import { NavbarTitle } from "../Navbar/styles";
import Navigator from "../Navbar/Navigator";
import Artboard from "./Artboard";

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

  const handleNavigatorChange = (index: number) => {
    const artboard = document.artboards?.entries[index];
    if (artboard) {
      setArtboard(artboard);
    }
  };

  return (
    <>
      <Navbar>
        <CloseButton homeUrl={`/documents/${documentId}`} />
        <Navigator
          index={Number(artboardIndex)}
          total={document?.artboards?.entries.length || "..."}
          onChange={handleNavigatorChange}
        />
        {artboard && <NavbarTitle>{artboard.name}</NavbarTitle>}
      </Navbar>
      <Container>
        {loading && "Loading"}
        {!loading && artboard && <Artboard artboard={artboard} />}
      </Container>
    </>
  );
};

export default ArtboardPage;
