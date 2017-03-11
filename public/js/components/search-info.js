import React from 'react';

import SearchFormContainer from './search-form-container';
import SearchCoordContainer from './search-coord-container';


export default function SearchInfo() {
  return (
      <div>
        <SearchFormContainer />
        <SearchCoordContainer />
        <hr />
      </div>
  );
}
