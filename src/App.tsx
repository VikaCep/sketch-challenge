import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import DocumentPage from "./components/Document/DocumentPage";
import ErrorPage from "./components/shared/ErrorPage";
import ArtboardPage from "./components/Artboard/ArtboardPage";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://graphql.sketch.cloud/api",
    cache: new InMemoryCache(),
  });
};

const client = createApolloClient();

const App: React.FC = () => (
  <Router>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<DocumentPage />} />
        <Route path="/documents/:documentId" element={<DocumentPage />} />
        <Route
          path="/documents/:documentId/artboards/:artboardIndex"
          element={<ArtboardPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ApolloProvider>
  </Router>
);

export default App;
