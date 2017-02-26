import React from 'react';

export default function Image(props) {
  return (
    <figure className="pic-fig">
      <a href={props.imageLink} target={props.imageLinkTarget}><img src={props.imageURL} alt={props.altText} /></a>
      <figcaption>
        <p>
          <span className="fig-num">A: </span>{props.aperture} <span className="fig-num">ISO: </span>{props.iso} <span className="fig-num">SS: </span>{props.ss}
        </p>
        <p className="photog">&copy; <span>{props.photog} </span>/ 500px</p>
      </figcaption>
    </figure>
  );
}
