

import React from 'react';

const ExperienceItem = ({ company, position, period, description }) => {
  return (
    <div className="ExperienceItem">
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{period}</p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceItem;