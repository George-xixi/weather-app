import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    humidity: 80,
    wind: {
      speed: 30,
      direction: "s",
    },
    temperature: {
      max: 12,
      min: 12,
    },
  };

  it("renders forecast details", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    const high = getByText("High", { exact: false });
    const low = getByText("Low", { exact: false });
    const humidity = getByText("Humidity", { exact: false });
    const wind = getByText("Wind", { exact: false });
    expect(high).toHaveTextContent("High: 12");
    expect(low).toHaveTextContent("Low: 12");
    expect(humidity).toHaveTextContent("Humidity: 80%");
    expect(wind).toHaveTextContent("Wind: 30mph");
    expect(getByText("Monday, 30 April")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
  });
});
