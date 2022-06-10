import React, { FC } from "react";
import Logo from "../Navbar/Logo";
import Navbar from "../Navbar/Navbar";
import Document from "./Document";
import { Container } from "../../styles/global";
import * as S from "../Navbar/styles";
import useGetDocumentById from "../../graphql/useGetDocumentById";
import ErrorPage from "../shared/ErrorPage";
import { Artboard } from "../../graphql/types";
import { useParams } from "react-router-dom";
import LoadingPage from "../shared/LoadingPage";

const DocumentPage: FC = () => {
  const params = useParams();
  const documentId =
    params.documentId || "e981971c-ff57-46dc-a932-a60dc1804992";

  const { data: document, error, loading } = useGetDocumentById(documentId);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <Navbar>
        <S.NavbarEdge>
          <Logo />
          <S.NavbarTitle data-testid="document-name">{loading ? "..." : document.name}</S.NavbarTitle>
        </S.NavbarEdge>
      </Navbar>
      <Container>
        {loading && <LoadingPage />}
        {!loading && (
          <Document
            documentId={documentId}
            artboards={
              document.artboards?.entries.filter(
                (entry: Artboard) => entry.isArtboard
              ) || []
            }
          />
        )}
      </Container>
    </>
  );
};

export default DocumentPage;
