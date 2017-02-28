import React from 'react';

import LocationInfoContainer from './location-info-container';
import ImageResultsContainer from './image-results-container';

export default function LocationMain() {
  return (
    <main>
      <LocationInfoContainer />
      <ImageResultsContainer />
    </main>
  );
}
