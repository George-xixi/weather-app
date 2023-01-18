import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("renders Weather App Title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/);
  expect(linkElement).toBeInTheDocument();
});
