import React from "react";
import WeatherIcon from "react-icons-weather";
import PropTypes from "prop-types";
import "../styles/ForecastSummary.css";

function ForecastSummary({ forecast, onSelect }) {
  const { date, description, icon, temperature } = forecast;
  const options = { weekday: "short", month: "short", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-GB", options);

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon.toString()} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
