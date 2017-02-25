import React from 'react';


import SunResults from './sun-results';
import WeatherResults from './weather-results';

export default function LocationInfoContainer() {
  return (
    <div className="info-container">
      <SunResults />
      <WeatherResults />
    </div>
  );
}
