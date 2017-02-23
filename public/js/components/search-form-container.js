import React from 'react';

import SearchForm from './search-form';
import SearchCoordResults from './search-coord-results';

export default function SearchFormContainer() {
  return (
      <div>
        <SearchForm />
        <SearchCoordResults />
        <hr />
      </div>
  );
};


module.exports = SearchFormContainer;
