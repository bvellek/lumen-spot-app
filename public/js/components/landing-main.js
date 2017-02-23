import React from 'react';


import InfoWhat from './info-what';
import ImageSlider from './image-slider';
import InfoLight from './info-light';
import LinkSection from './link-section';
import InfoAbout from './info-about';


export default function LandingMain() {
  return (
    <main>
      <InfoWhat />
      <ImageSlider />
      <InfoLight />
      <LinkSection />
      <InfoAbout />
    </main>
  );
};


module.exports = LandingMain;
