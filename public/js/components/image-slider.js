import React from 'react';


export default function ImageSlider() {
  return (
    <section className="photo-slide-section">
      <div id="slider">
        <figure>
          <img src="./img/img-slider/01-min-circle.jpg" alt="circle on far left" />
          <img src="./img/img-slider/02-min-circle.jpg" alt="circle moved toward right" />
          <img src="./img/img-slider/03-min-circle.jpg" alt="cirle centered" />
          <img src="./img/img-slider/04-min-circle.jpg" alt="circle to right" />
          <img src="./img/img-slider/01-min-circle.jpg" alt="circle on far left" />
        </figure>
      </div>
    </section>
  );
}
