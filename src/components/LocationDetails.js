import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  if (city === "" && country === "") {
    return <h1>Hi, want to search the weather?</h1>;
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
