import React from 'react';

export default function SearchForm() {
  return (
    <form className="search-form" action="index.html" method="get">
      <legend><h2>SEARCH...</h2></legend>
      <label htmlFor="search-input">Location: <span>(ex: Grand Canyon | Seattle, WA | 1600&nbsp;Pennsylvania Ave NW Washington, D.C.&nbsp;20500)</span></label>
      <input id="search-input" type="search" name="address" />
      <div className="search-btn-container">
        <button type="submit" name="address-submit">🔎 Submit <span className="visually-hidden">Location</span></button>{' '}
        <button type="button" name="current-location">📍 Current Location</button>
      </div>
    </form>
  );
};
