import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: jest.fn(),
  };

  it("renders", () => {
    const { asFragment } = render(
      <ForecastSummary forecast={validProps} onSelect={validProps.onSelect} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary forecast={validProps} onSelect={validProps.onSelect} />
    );

    expect(getByText("Mon, 30 Apr")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveAttribute(
      "class",
      "forecast-summary__icon"
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
    expect(getByText("More")).toHaveAttribute("type", "button");
  });

  it("calls correct function by clicking button", () => {
    render(
      <ForecastSummary forecast={validProps} onSelect={validProps.onSelect} />
    );
    const buttonsArray = screen.getByText("More");
    fireEvent.click(buttonsArray);

    expect(validProps.onSelect).toHaveBeenCalled();
  });
});
