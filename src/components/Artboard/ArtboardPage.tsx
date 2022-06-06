import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Container } from "../../styles/global";
import { useParams } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";

const ArtboardPage: React.FC = () => {
  const { documentId, artboardIndex = 0 } = useParams();

  return (
    <>
      <Navbar>
      </Navbar>
      <Container>
      </Container>
    </>
  );
};

export default ArtboardPage;
