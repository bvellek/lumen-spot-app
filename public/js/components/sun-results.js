import React from 'react';

export default function SunResults() {
  return (
    <section className="sun-info-section">
      <details open>
        <summary>
          <h3>Sun Times</h3>
        </summary>

        <table>
          <tbody>
            <tr>
              <td>Astronimical Twilight(am):</td>
              <td>5:21 AM</td>
            </tr>
            <tr>
              <td>Nautical Twilight(am):</td>
              <td>5:56 AM</td>
            </tr>
            <tr>
              <td>Civil Twilight(am):</td>
              <td>6:31 AM</td>
            </tr>
            <tr>
              <td>Sunrise:</td>
              <td>7:02 AM</td>
            </tr>
            <tr>
              <td>Solar Noon:</td>
              <td>12:12 PM</td>
            </tr>
            <tr>
              <td>Sunset:</td>
              <td>5:38 PM</td>
            </tr>
            <tr>
              <td>Civil Twilight(pm):</td>
              <td>6:09 PM</td>
            </tr>
            <tr>
              <td>Nautical Twilight(pm):</td>
              <td>6:45 PM</td>
            </tr>
            <tr>
              <td>Astronomical Twilight(pm)</td>
              <td>7:20 PM</td>
            </tr>
          </tbody>
          <caption>Times based on your local timezone</caption>
        </table>
      </details>
    </section>
  );
}
