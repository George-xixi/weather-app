import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        <h2>{formattedDate}</h2>
      </div>
      <div className="forecast-details__max-temperature">
        max temp: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__min-temperature">
        min temp: {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">humidity: {humidity}</div>
      <div className="forecast-details__wind">
        wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
