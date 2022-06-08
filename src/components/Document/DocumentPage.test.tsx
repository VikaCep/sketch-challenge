import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import DocumentPage from "./DocumentPage";
import getMockedDocument, { id1, id2 } from "../../graphql/mocks/document";
import { MemoryRouter } from "react-router-dom";
import getErrorResponse, { wrongId } from "../../graphql/mocks/error";
import Router from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const SuccessResponseMock1 = getMockedDocument(id1);
const SuccessResponseMock2 = getMockedDocument(id2);
const ErrorResponseMock = getErrorResponse();

const App = (
  <MockedProvider
    mocks={[SuccessResponseMock1, SuccessResponseMock2, ErrorResponseMock]}
    addTypename={false}
  >
    <DocumentPage />
  </MockedProvider>
);

it("renders the loading state", async () => {
  jest.spyOn(Router, "useParams").mockReturnValue({ documentId: id1 });

  render(App, { wrapper: MemoryRouter });
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

describe("after loading", () => {
  beforeEach(() => {
    jest.spyOn(Router, "useParams").mockReturnValue({ documentId: id1 });
  });

  it("renders the document title", async () => {
    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(screen.getByText(`Document ${id1}`)).toBeInTheDocument();
  });

  it("renders the correct amount of artboard thumbnails", async () => {
    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(
      SuccessResponseMock1.result.data.share.version.document.artboards.entries
        .length
    );
  });
});

describe("loading a different document", () => {
  beforeEach(() => {
    jest.spyOn(Router, "useParams").mockReturnValue({ documentId: id2 });
  });

  it("renders the document title", async () => {
    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(screen.getByText(`Document ${id2}`)).toBeInTheDocument();
  });

  it("renders the correct amount of artboard thumbnails", async () => {
    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(
      SuccessResponseMock2.result.data.share.version.document.artboards.entries
        .length
    );
  });
});

describe("Error state", () => {
  beforeEach(() => {
    jest.spyOn(Router, "useParams").mockReturnValue({ documentId: wrongId });
  });

  it("Displays an error when there is no document in the response", async () => {
    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(screen.getByText("Oops")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
