import React from 'react';

import SearchLink from './search-link';


export default function HeroNav() {
  return (
    <nav className="landing-nav">
      <SearchLink linkTitle="Search..." accessibilitySpan="for a location to find sun, weather, and image results" />
    </nav>
  );
}
