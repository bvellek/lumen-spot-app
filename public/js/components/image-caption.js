import React from 'react';

export default function ImageCaption() {
  return (
    <figcaption>
      <p><span className="fig-num">A: </span>2.8 <span className="fig-num">ISO: </span>500 <span className="fig-num">SS: </span>1/100</p>
      <p className="photog">&copy; <span>Photographer Name</span>/ 500px</p>
    </figcaption>
  );
};
