import React from 'react';
import { connect } from 'react-redux';

import Image from './image';


export class ImageResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imageList;
    const images = this.props.inspiration;
    if (images != null) {
      imageList = images.photos.map((pic, i) => {
        return (
          <Image altText={pic.name} aperture={pic.aperture} iso={pic.iso} ss={pic.shutter_speed} imageURL={pic.image_url} imageLink={`https://500px.com${pic.url}`} imageLinkTarget={`_${pic.user.id}`} photog={`${(pic.user.firstname).toUpperCase()} ${(pic.user.lastname).toUpperCase()}`} key={i} />
        );
      });
    } else {
        imageList = (
            <p>Sorry! Something went wrong and we cannot provide inspiration pictures at the moment. </p>
      );
    }
    return (
      <section className="pic-section">
        <h3 className="visually-hidden">Images for Inspiration</h3>
        { imageList }
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  inspiration: state.inspirationResults
});

export default connect(mapStateToProps)(ImageResultsContainer);
