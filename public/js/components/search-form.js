import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.locationSubmit = this.locationSubmit.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }


  getCurrentLocation() {
    this.props.dispatch(actions.getCurrentLocation());
  }

  handleChange(event) {
      this.setState({ value: event.target.value.toUpperCase() });
    }

  locationSubmit(e) {
    e.preventDefault();
    const location = this.state.value;
    this.props.dispatch(actions.fetchLocationCoords(location));
  }

  render() {
    return (
      <form className="search-form" method="get" onSubmit={this.locationSubmit}>
        <legend>
          <h2>SEARCH...</h2>
        </legend>
        <label htmlFor="search-input">Location:
          <span> (ex: Grand Canyon | Seattle, WA | 1600&nbsp;Pennsylvania Ave NW Washington, D.C.&nbsp;20500)</span>
        </label>
        <input id="search-input" type="search" name="address" value={this.state.value} onChange={this.handleChange} />
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
