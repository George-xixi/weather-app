import React from "react";
import PropTypes from "prop-types";
import { WiWindDeg } from "react-icons/wi";

function WindDirection({ windDirection }) {
  let angle;
  const firstLetter = windDirection.substring(0, 1);
  if (firstLetter === "n") {
    angle = 0;
    if (windDirection === "nw") {
      angle = 315;
    } else if (windDirection === "nnw") {
      angle = 337.5;
    } else if (windDirection === "nne") {
      angle = 22.5;
    } else if (windDirection === "ne") {
      angle = 45;
    }
  }
  if (firstLetter === "e") {
    angle = 90;
    if (windDirection === "ene") {
      angle = 315;
    } else if (windDirection === "ese") {
      angle = 337.5;
    }
  }
  if (firstLetter === "s") {
    angle = 180;
    if (windDirection === "se") {
      angle = 135;
    } else if (windDirection === "sse") {
      angle = 157.5;
    } else if (windDirection === "ssw") {
      angle = 202.5;
    } else if (windDirection === "sw") {
      angle = 225;
    }
  }
  if (firstLetter === "w") {
    angle = 270;
    if (windDirection === "wsw") {
      angle = 247.5;
    } else if (windDirection === "wnw") {
      angle = 292.5;
    }
  }
  return (
    <WiWindDeg
      className={windDirection}
      style={{ transform: `rotate(${angle}deg)` }}
    />
  );
}

WindDirection.propTypes = {
  windDirection: PropTypes.string.isRequired,
};

export default WindDirection;
