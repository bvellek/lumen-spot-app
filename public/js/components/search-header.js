import React from 'react';
import { Link } from 'react-router';

import SVGLogo from './svg-logo';

export default function SearchHeader() {
  return (
    <header className="search-header">
      <div className="logo-container">
        <Link to="/">
          <SVGLogo />
        </Link>
      </div>
    </header>
  );
};
