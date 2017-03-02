import React from 'react';
import { connect } from 'react-redux';

export class SearchCoordContainer extends React.Component {

  render() {
    const url = `https://www.google.com/maps/@${this.props.coords},12z`;
    const targetString = `_${this.props.coords}`;

    let message = null;
    if (this.props.displayResults) {
      message = <h4 className="coord-results">Your search <a className="sliding-middle-out" href={url} target={targetString}>coordinates</a> are {this.props.coords}</h4>;
    } else if (this.props.loadingStatus) {
      message = (
        <div className="loading-element">
          <h4>Finding your location...</h4>
          <div className="loader">Loading...</div>
        </div>
    );
    } else {
      message = <div />;
    }
    return (
      <div>
        { message }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coords: state.locationCoords,
  displayResults: state.displayResults,
  loadingStatus: state.loadingStatus
});

export default connect(mapStateToProps)(SearchCoordContainer);
