import React from "react";
import PropTypes from "prop-types";
import { WiWindDeg } from "react-icons/wi";
import angles from "../data/windDirectionAngle.json";
import "../styles/WindDirection.css";

function WindDirection({ windDirectionString }) {
  return (
    <WiWindDeg
      className="wind-direction"
      style={{ transform: `rotate(${angles[windDirectionString]}deg)` }}
    />
  );
}

WindDirection.propTypes = {
  windDirectionString: PropTypes.string.isRequired,
};

export default WindDirection;
