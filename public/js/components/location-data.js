import React from 'react';

import SunResultsContainer from './sun-results-container';
import WeatherResultsContainer from './weather-results-container';


export default function LocationData() {
  return (
    <div className="info-container">
      <SunResultsContainer />
      <WeatherResultsContainer />
    </div>
  );
}
