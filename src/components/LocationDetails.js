import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

function LocationDetails({ city, country, errorMessage }) {
  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  if (city === "" && country === "") {
    return <h1>Search the weather in any UK town or city.</h1>;
  }
  return <h1>{`${city}, ${country}`}</h1>;
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
