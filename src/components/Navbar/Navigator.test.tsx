import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import Navigator from "./Navigator";

const total = 5;
const index = 2;
const onChange = jest.fn();

const Component = <Navigator total={total} index={index} onChange={onChange} />;

it("renders the navigator", () => {
  render(Component);
  expect(screen.getByTestId("current-index")).toHaveTextContent("3");
  expect(screen.getByTestId("total")).toHaveTextContent(total.toString());
});

it("goes to the first position and stops in 1", async () => {
  render(Component);
  expect(screen.getByTestId("current-index")).toHaveTextContent("3");

  userEvent.click(screen.getByAltText("previous image"));
  await waitFor(() =>
    expect(screen.getByTestId("current-index")).toHaveTextContent("2")
  );

  userEvent.click(screen.getByAltText("previous image"));
  await waitFor(() =>
    expect(screen.getByTestId("current-index")).toHaveTextContent("1")
  );

  userEvent.click(screen.getByAltText("previous image"));
  await waitFor(() =>
    expect(screen.getByTestId("current-index")).toHaveTextContent("1")
  );

  expect(onChange).toHaveBeenCalledTimes(2);
});

it(`goes to the last position and stops in ${total}`, async () => {
  render(Component);
  expect(screen.getByTestId("current-index")).toHaveTextContent("3");

  userEvent.click(screen.getByAltText("next image"));
  await waitFor(() =>
    expect(screen.getByTestId("current-index")).toHaveTextContent("4")
  );

  userEvent.click(screen.getByAltText("next image"));
  await waitFor(() =>
    expect(screen.getByTestId("current-index")).toHaveTextContent("5")
  );

  userEvent.click(screen.getByAltText("next image"));
  await waitFor(() =>
    expect(screen.getByTestId("current-index")).toHaveTextContent("5")
  );

  expect(onChange).toHaveBeenCalledTimes(2);
});
