import React from 'react';

import LocationHeader from './location-header';
import SearchFormContainer from './search-form-container';
import LocationMain from './location-main';

export default function LocationContainer() {
  return (
    <div>
      <LocationHeader />
      <SearchFormContainer />
      <LocationMain />
    </div>
  );
}
