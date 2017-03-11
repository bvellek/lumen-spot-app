import React from 'react';

import InfoWhat from './info-what';
import LandingImageSlider from './landing-image-slider';
import InfoLight from './info-light';
import LinkSection from './link-section';
import InfoAbout from './info-about';


export default function LandingMain() {
  return (
    <main>
      <InfoWhat />
      <LandingImageSlider />
      <InfoLight />
      <LinkSection />
      <InfoAbout />
    </main>
  );
}
