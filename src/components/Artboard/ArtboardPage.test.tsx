import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ArtboardPage from "./ArtboardPage";
import getMockedDocument, { id1 } from "../../graphql/mocks/document";
import { MemoryRouter } from "react-router-dom";
import getErrorResponse, { wrongId } from "../../graphql/mocks/error";
import Router from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const SuccessResponseMock1 = getMockedDocument(id1);
const ErrorResponseMock = getErrorResponse();

const App = (
  <MockedProvider
    mocks={[SuccessResponseMock1, ErrorResponseMock]}
    addTypename={false}
  >
    <ArtboardPage />
  </MockedProvider>
);

it("renders the loading state", async () => {
  jest
    .spyOn(Router, "useParams")
    .mockReturnValue({ documentId: id1, artboardIndex: "0" });

  render(App, { wrapper: MemoryRouter });
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

describe("after loading", () => {
  beforeEach(() => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ documentId: id1, artboardIndex: "0" });
  });

  it("renders the artboard title and image", async () => {
    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    await screen.findByText("Xerox alto");
    expect(screen.getByAltText("Xerox alto")).toBeVisible();
  });
});

describe("loading a different artboard", () => {
  beforeEach(() => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ documentId: id1, artboardIndex: "2" });
  });

  it("renders the artboard title and image", async () => {
    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    await screen.findByText("Android");
    expect(screen.getByAltText("Android")).toBeVisible();
  });
});

describe("Error state", () => {
  it("Displays an error when there is no document in the response", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ documentId: wrongId });

    render(App, { wrapper: MemoryRouter });
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    await screen.findByText("Oops");
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
