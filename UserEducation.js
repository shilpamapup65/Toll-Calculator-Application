import React, { useState } from 'react';

const UserEducation = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="user-education">
      <button onClick={toggleTooltip}>Learn More</button>
      {showTooltip && (
        <div className="tooltip">
          <h3>How Toll Calculations Work</h3>
          <p>
            Toll calculations are performed based on various factors such as distance, toll rates,
            and any additional fees. The route between two waypoints is analyzed, and the toll cost
            is estimated using the TollGuru API.
          </p>
          <p>
            Keep in mind that toll rates may vary, and the calculated cost is an estimate. Actual
            toll charges may differ based on real-time conditions and specific toll policies.
          </p>
          <button onClick={toggleTooltip}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserEducation;
