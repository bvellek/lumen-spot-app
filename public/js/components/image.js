import React from 'react';

import ImageCaption from './image-caption';

export default function Image() {
  return (
    <figure className="pic-fig">
      <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://drscdn.500px.org/photo/123278719/w%3D440_h%3D440/7b53dfb85751fb1cd4a94cca70da87f8?v=6" alt="" /></a>
      <ImageCaption />
    </figure>
  );
}
