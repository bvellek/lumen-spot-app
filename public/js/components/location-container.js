import React from 'react';
import { connect } from 'react-redux';

import LocationHeader from './location-header';
import SearchFormContainer from './search-form-container';
import LocationMain from './location-main';
import NoSearch from './no-search';

export class LocationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let toRender = null;
    if (this.props.displayResults) {
      toRender = <LocationMain />;
    } else {
      toRender = <NoSearch />;
    }

    return (
      <div>
        <LocationHeader />
        <SearchFormContainer />
        { toRender }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  displayResults: state.displayResults
});

export default connect(mapStateToProps)(LocationContainer);
