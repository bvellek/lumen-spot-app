import React from 'react';

import Hero from './hero';
import LandingMain from './landing-main';
import LandingFooter from './landing-footer';

export default function LandingContainer() {
  return (
    <div>
      <Hero />
      <LandingMain />
      <LandingFooter />
    </div>
  );
}


module.exports = LandingContainer;
