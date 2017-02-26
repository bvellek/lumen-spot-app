import React from 'react';
import { connect } from 'react-redux';


export class WeatherResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let weatherDiv;
    const weatherInfo = this.props.weatherResults;
    if (weatherInfo != null) {
      const iconURL = `https://icons.wxug.com/i/c/i/${weatherInfo.current_observation.icon}.gif`;
      const iconAlt = `${weatherInfo.current_observation.icon} icon`;
      const weatherWord = weatherInfo.current_observation.weather;
      const temp = weatherInfo.current_observation.temp_f;
      const uv = weatherInfo.current_observation.UV;
      const wind = weatherInfo.current_observation.wind_string;
      const forecastURL = weatherInfo.current_observation.forecast_url;
      const forecastURLTarget = `_${forecastURL}`;
      weatherDiv = (
        <div className="weather-container">
          <figure>
            <img src={iconURL} alt={iconAlt} />
          </figure>
          <figcaption>
            <table>
              <tbody>
                <tr>
                  <td>weather:</td>
                  <td>{weatherWord}</td>
                </tr>
                <tr>
                  <td>temp:</td>
                  <td>{temp}<span> &deg;F</span></td>
                </tr>
                <tr>
                  <td>UV:</td>
                  <td>{uv}</td>
                </tr>
                <tr>
                  <td>wind:</td>
                  <td>{wind}</td>
                </tr>
                <tr>
                  <td colSpan="2"><a className="sliding-middle-out" href={forecastURL} target={forecastURLTarget}>Detailed Forecast</a></td>
                </tr>

              </tbody>
              <caption>Powered by Weather Underground:
                <a href="https://www.wunderground.com" target="_wunderground"><img className="wu-logo" src="./img/wu-logo-horizontal.png" alt="Weather Underground Logo" /></a>
              </caption>
            </table>
          </figcaption>
        </div>
      );
    } else {
        weatherDiv = (
          <div className="weather-container">
            <p>Sorry! Something went wrong and we cannot provide weather conditions at this time. </p>
          </div>
      );
    }
    return (
      <section className="weather-info-section">
        <details>
          <summary>
            <h3>Weather Info</h3>
          </summary>
          { weatherDiv }
        </details>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  weatherResults: state.weatherResults
});

export default connect(mapStateToProps)(WeatherResults);
