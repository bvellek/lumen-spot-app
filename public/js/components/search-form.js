import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import store from '../store';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.locationSubmit = this.locationSubmit.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }


  getCurrentLocation(e) {
    console.log(e);
    this.props.dispatch(actions.getCurrentLocation());
    console.log(store.getState());
  }

  locationSubmit(e) {
    e.preventDefault();

    const location = this.locationInput.value;
    console.log(location, e);
    // this.props.dispatch(actions.fetchGeo());
  }

  render() {
    return (
      <form className="search-form" method="get" onSubmit={this.locationSubmit}>
        <legend>
          <h2>SEARCH...</h2>
        </legend>
        <label htmlFor="search-input">Location:
          <span>(ex: Grand Canyon | Seattle, WA | 1600&nbsp;Pennsylvania Ave NW Washington, D.C.&nbsp;20500)</span>
        </label>
        <input id="search-input" type="search" name="address" ref={ref => this.locationInput = ref} />
        <div className="search-btn-container">
          <button type="submit" name="location-submit">🔎 Submit
            <span className="visually-hidden">Location</span>
          </button>{' '}
          <button type="button" name="current-location" onClick={this.getCurrentLocation}>📍 Current Location</button>
        </div>
      </form>
    );
  }
}

export default connect()(SearchForm);
