import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DocumentPage from "./components/Document/DocumentPage";
const App: React.FC = () => (
  <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<DocumentPage />} />
      </Routes>
  </Router>
);

export default App;
