import React from 'react';


export default function WeatherResults() {
  return (
    <section className="weather-info-section">
      <details>
        <summary>
          <h3>Weather Info</h3>
        </summary>
        <div className="weather-container">
          <figure>
            <img src="http://icons.wxug.com/i/c/i/snow.gif" alt="snow" />
          </figure>
          <figcaption>
            <table>
              <tbody>
                <tr>
                  <td>weather:</td>
                  <td>Snow</td>
                </tr>
                <tr>
                  <td>temp:</td>
                  <td>35.3<span> &deg;F</span></td>
                </tr>
                <tr>
                  <td>UV:</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>wind:</td>
                  <td>From the SSW at 1.6 MPH Gusting to 2.0 MPH</td>
                </tr>
                <tr>
                  <td colSpan="2"><a className="sliding-middle-out" href="https://www.wunderground.com/US/WA/Mount_Rainier_Natl_Park.html" target="_blank">Detailed Forecast</a></td>
                </tr>

              </tbody>
              <caption>Powered by Weather Underground:
                <a href="https://www.wunderground.com" target="_wunderground"><img className="wu-logo" src="./public/img/wu-logo-horizontal.png" alt="Weather Underground Logo" /></a>
              </caption>
            </table>
          </figcaption>
        </div>
      </details>
    </section>
  );
};
