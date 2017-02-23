import React from 'react';

import SearchLink from './search-link';

export default function HeroNav() {
  return (
    <nav className="landing-nav">
      <SearchLink linkTitle="Search..." />
    </nav>
  );
};

module.exports = HeroNav;
