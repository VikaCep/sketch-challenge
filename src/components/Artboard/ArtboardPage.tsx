import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Container } from "../../styles/global";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import { Artboard as ArtboardType } from "../../graphql/types";
import useGetDocumentById from "../../graphql/useGetDocumentById";
import CloseButton from "../Navbar/CloseButton";
import * as S from "../Navbar/styles";
import Navigator from "../Navbar/Navigator";
import Artboard from "./Artboard";
import LoadingPage from "../shared/LoadingPage";

const ArtboardPage: React.FC = () => {
  const { documentId, artboardIndex = 0 } = useParams();
  const navigateTo = useNavigate();

  const {
    data: document,
    loading,
    error,
  } = useGetDocumentById(documentId as string);

  const [artboard, setArtboard] = useState<ArtboardType | undefined>(undefined);
  const [total, setTotal] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!loading) {
      const entries = document?.artboards?.entries || [];
      const artboard = entries[artboardIndex];

      if (!entries || !artboard) {
        navigateTo("/error");
      }

      setTotal(entries.length);
      setArtboard(artboard);
    }
  }, [loading, document, artboardIndex, navigateTo]);

  if (error) {
    return <ErrorPage />;
  }

  const handleNavigatorChange = (index: number) => {
    navigateTo(`/documents/${documentId}/artboards/${index}`);
  };

  return (
    <>
      <Navbar>
        <S.NavbarEdge>
          <CloseButton homeUrl={`/documents/${documentId}`} />
          {!loading && (
            <Navigator
              index={Number(artboardIndex)}
              total={total}
              onChange={handleNavigatorChange}
            />
          )}
        </S.NavbarEdge>
        <S.ArtboardName data-testid="artboard-name">{artboard?.name}</S.ArtboardName>
        <S.NavbarEdge />
      </Navbar>
      <Container>
        {loading && <LoadingPage />}
        {!loading && artboard && <Artboard artboard={artboard} />}
      </Container>
    </>
  );
};

export default ArtboardPage;
