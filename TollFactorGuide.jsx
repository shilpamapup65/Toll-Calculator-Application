import React from 'react';
import ReactTooltip from 'react-tooltip';

const TollFactorsGuide = () => {
  return (
    <div>
      <button data-tip data-for="tollFactorsTooltip">
        Learn about Toll Factors
      </button>
      <ReactTooltip id="tollFactorsTooltip" place="bottom" effect="solid">
        <div>
          <h3>Factors Affecting Toll Costs</h3>
          <p>
            Toll costs are influenced by various factors, including:
            <ul>
              <li>Distance between waypoints</li>
              <li>Types of roads and highways</li>
              <li>Vehicle type (e.g., car, truck)</li>
              <li>Time of day and traffic conditions</li>
              <li>Additional toll fees and charges</li>
            </ul>
          </p>
          <p>
            These factors contribute to the overall toll calculation, and the TollGuru API takes
            them into account when estimating toll costs for a given route.
          </p>
        </div>
      </ReactTooltip>
    </div>
  );
};

export default TollFactorsGuide;
