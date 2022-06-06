import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import DocumentPage from "./components/Document/DocumentPage";

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
      </Routes>
    </ApolloProvider>
  </Router>
);

export default App;
