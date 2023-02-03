/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
import "../styles/App.css";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleCitySearch = (e) => {
    e.preventDefault();
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const { city, country } = location;

  return (
    <div className="weather-app">
      <LocationDetails
        city={city}
        country={country}
        errorMessage={errorMessage}
      />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
