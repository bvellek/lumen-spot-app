import React from 'react';

import SearchLink from './search-link';


export default function LinkSection() {
  return (
    <section className="link-section">
      <h2>
        <SearchLink linkTitle="Find Your Light" />
      </h2>
    </section>
  );
}
