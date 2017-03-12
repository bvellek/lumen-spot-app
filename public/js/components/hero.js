import React from 'react';

import HeroNav from './hero-nav';
import SVGLogo from './svg-logo';


export default function Hero() {
  return (
    <header className="landing-header">
      <HeroNav />
      <div className="logo-container">
        <h1>
          <span className="visually-hidden">Lumen Spot</span>
          <SVGLogo />
        </h1>
      </div>
    </header>
  );
}
