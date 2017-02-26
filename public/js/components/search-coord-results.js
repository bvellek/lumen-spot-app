import React from 'react';
import { connect } from 'react-redux';

export class SearchCoordResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = `https://www.google.com/maps/@${this.props.coords},12z`;
    const targetString = `_${this.props.coords}`;

    let message = null;
    if (this.props.displayResults) {
      message = <h4 className="coord-results">Your search <a className="sliding-middle-out" href={url} target={targetString}>coordinates</a> are {this.props.coords}</h4>;
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

const mapStateToProps = (state, props) => ({
  coords: state.locationCoords,
  displayResults: state.displayResults
});

export default connect(mapStateToProps)(SearchCoordResults);
