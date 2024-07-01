// src/components/EducationItem.js

import React from 'react';

const EducationItem = ({ institution, course, period, description }) => {
  return (
    <div className="EducationItem">
      <h3>{institution}</h3>
      <p>{course}</p>
      <p>{period}</p>
      <p>{description}</p>
    </div>
  );
}

export default EducationItem;
