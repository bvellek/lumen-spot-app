import React from 'react';

export default function Image(props) {
  return (
    <figure className="pic-fig">
      <a href={props.imageLink} target={props.imageLinkTarget}><img src={props.imageURL} alt={props.altText} /></a>
      <figcaption>
        <p>
          <span className="fig-num">A: </span>{props.aperture ? props.aperture : 'N/P'} <span className="fig-num">ISO: </span>{props.iso ? props.iso : 'N/P'} <span className="fig-num">SS: </span>{props.ss ? props.ss : 'N/P'}
        </p>
        <p className="photog">&copy; <span>{props.photog} </span>/ 500px</p>
      </figcaption>
    </figure>
  );
}
