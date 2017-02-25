import React from 'react';

export default function InfoAbout() {
  return (
    <section className="info-section">
      <div className="about-section">
        <h2>About</h2>
        <p><a className="sliding-middle-out" href="http://sunrise-sunset.org/" target="_sunrise">Sunrise Sunset</a>, freely provides us with the information about sunrise, sunset, and twilight times for locations around the world you are excited to photograph. All the information is provided without warranty of any&nbsp;kind.</p>
        <p><a className="sliding-middle-out" href="https://500px.com/" target="_500px">500px</a>, allows photographers to showcase and sell their work. The inspiration images provided by this service are not meant for copying, downloading, or selling. All rights are reserved by the photographers. If you want to see a picture at full size or if you want to see more by the photographer, click on the image to link to the photographer’s&nbsp;profile.</p>
        <p><a className="sliding-middle-out" href="https://www.wunderground.com" target="_wunderground">Weather Undergound</a>, provides weather conditions for specific locations. Lumen Spot shows current conditions to aid in your photographic decisions. Please follow the provided links for more detailed conditions and forecasts and to find out more about Weather Underground’s&nbsp;services.</p>
      </div>
    </section>
  );
}
