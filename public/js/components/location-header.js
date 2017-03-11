import React from 'react';
import { Link } from 'react-router';

import SVGLogo from './svg-logo';


export default function LocationHeader() {
  return (
    <header className="search-header">
      <div className="logo-container">
        <Link to="/">
          <h1>
            <SVGLogo />
          </h1>
        </Link>
      </div>
    </header>
  );
}
