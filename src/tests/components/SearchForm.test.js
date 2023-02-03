import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("ForecastSummary", () => {
  const searchText = "Edinburgh";
  const setSearchText = jest.fn();
  const onSubmit = jest.fn();

  it("renders forecast details", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders search form correctly", () => {
    render(
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={onSubmit}
      />
    );
    const buttons = screen.getAllByRole("button");
    const searchFormElement = screen.getAllByRole("search");
    const inputElement = screen.getByTestId("search-input");

    expect(buttons[0]).toHaveClass("button");
    expect(searchFormElement[0]).toContainElement(inputElement);
    expect(searchFormElement[0]).toContainElement(buttons[0]);
  });

  it("calls correct function by clicking button", () => {
    render(
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={onSubmit}
      />
    );
    fireEvent.click(screen.getByTestId("search-button"));

    expect(onSubmit).toHaveBeenCalled();
  });
});
