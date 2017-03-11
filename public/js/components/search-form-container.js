import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';


export class SearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.locationSubmit = this.locationSubmit.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    const store = this.props;

    // try to get onpopstate (forward or backward) on client-side, but not on server
    try {
      window.onpopstate = function (event) {
        if (event.state.lat && event.state.lng) {
          const lat = event.state.lat;
          const lng = event.state.lng;
          if (!isNaN(lat) && !isNaN(lng)) {
            const coords = `${lat},${lng}`;
            store.dispatch(actions.fetchLocationCoordsSuccess(coords));
            return Promise.all([
              store.dispatch(actions.fetchSunTimes(coords)),
              store.dispatch(actions.fetchWeather(coords)),
              store.dispatch(actions.fetchInspiration(coords))
            ]);
          }
        }
      };
    } catch (e) {
      console.log('<SearchFormContainer />: this is rendering on server, so window is not defined. this is expected.');
    }
  }

  getCurrentLocation() {
    this.props.dispatch(actions.getCurrentLocation()).then((coords) => {
      const latLng = coords.split(',');
      const browserLocation = {
        lat: latLng[0].trim(),
        lng: latLng[1].trim()
      };
      history.pushState(browserLocation, 'Current Location', `/location/?lat=${browserLocation.lat}&lng=${browserLocation.lng}`);
    }).catch((err) => {
      console.log(err);
    });
  }

  // for text input
  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  locationSubmit(e) {
    e.preventDefault();
    const location = this.state.value;
    this.props.dispatch(actions.fetchLocationCoords(location)).then((coords) => {
      const latLng = coords.split(',');
      const browserLocation = {
        lat: latLng[0].trim(),
        lng: latLng[1].trim()
      };
      history.pushState(browserLocation, location, `/location/?lat=${browserLocation.lat}&lng=${browserLocation.lng}`);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <form className="search-form" method="get" onSubmit={this.locationSubmit}>
        <legend>
          <h2>SEARCH...</h2>
        </legend>
        <label htmlFor="search-input">Location:{' '}
          <span>
            (ex: Grand Canyon | Seattle, WA | 1600&nbsp;Pennsylvania Ave NW Washington, D.C.&nbsp;20500)</span>
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

export default connect()(SearchFormContainer);
