import React from 'react';
import { connect } from 'react-redux';

import LocationHeader from './location-header';
import SearchInfo from './search-info';
import LocationMain from './location-main';
import NoSearch from './no-search';


export class LocationContainer extends React.Component {
  render() {
    let toRender = null;
    if (this.props.displayResults) {
      toRender = <LocationMain />;
    } else if (this.props.loadingStatus) {
      toRender = <div />;
    } else {
      toRender = <NoSearch />;
    }

    return (
      <div>
        <LocationHeader />
        <SearchInfo />
        { toRender }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayResults: state.displayResults,
  loadingStatus: state.loadingStatus
});

export default connect(mapStateToProps)(LocationContainer);
