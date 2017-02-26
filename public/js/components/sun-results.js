import React from 'react';
import { connect } from 'react-redux';


export class SunResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sunTable;
    if (this.props.sunResults != null) {
      const times = [
        this.props.sunResults.results.astronomical_twilight_begin,
        this.props.sunResults.results.nautical_twilight_begin,
        this.props.sunResults.results.civil_twilight_begin,
        this.props.sunResults.results.sunrise,
        this.props.sunResults.results.solar_noon,
        this.props.sunResults.results.sunset,
        this.props.sunResults.results.civil_twilight_end,
        this.props.sunResults.results.nautical_twilight_end,
        this.props.sunResults.results.astronomical_twilight_end
      ];

      const formattedTimes = times.map(time => {
        const options = { hour: '2-digit', minute: '2-digit' };
        return (new Date(time)).toLocaleTimeString('en-us', options);
      });
      console.log(formattedTimes);

      sunTable = (
        <table>
          <tbody>
            <tr>
              <td>Astronimical Twilight(am):</td>
              <td>{formattedTimes[0]}</td>
            </tr>
            <tr>
              <td>Nautical Twilight(am):</td>
              <td>{formattedTimes[1]}</td>
            </tr>
            <tr>
              <td>Civil Twilight(am):</td>
              <td>{formattedTimes[2]}</td>
            </tr>
            <tr>
              <td>Sunrise:</td>
              <td>{formattedTimes[3]}</td>
            </tr>
            <tr>
              <td>Solar Noon:</td>
              <td>{formattedTimes[4]}</td>
            </tr>
            <tr>
              <td>Sunset:</td>
              <td>{formattedTimes[5]}</td>
            </tr>
            <tr>
              <td>Civil Twilight(pm):</td>
              <td>{formattedTimes[6]}</td>
            </tr>
            <tr>
              <td>Nautical Twilight(pm):</td>
              <td>{formattedTimes[7]}</td>
            </tr>
            <tr>
              <td>Astronomical Twilight(pm)</td>
              <td>{formattedTimes[8]}</td>
            </tr>
          </tbody>
          <caption>Times based on your local timezone</caption>
        </table>
      );
    } else {
      sunTable = (
        <p>Sorry! Something went wrong and we cannot provide sun times right now. </p>
      );
    }


    return (
      <section className="sun-info-section">
        <details open>
          <summary>
            <h3>Sun Times</h3>
          </summary>
            {sunTable}
        </details>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  sunResults: state.sunTimesResults
});

export default connect(mapStateToProps)(SunResults);
