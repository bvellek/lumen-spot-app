// Convert Location to Lat/Long
export const FETCH_GEO_SUCCESS = 'FETCH_GEO_SUCCESS';
export const fetchGeoSuccess = () => ({
  type: FETCH_LOCATION_COORDS_SUCCESS,
  locationInput,
  coords
});

export const FETCH_GEO_ERROR = 'FETCH_GEO_ERROR';
export const fetchGeoError = () => ({
  type: FETCH_LOCATION_COORDS_ERROR,
  locationInput,
  coords,
  error
});








// Find Current Location
export const GET_CURRENT_LOCATION_SUCCESS = 'GET_CURRENT_LOCATION_SUCCESS';
export const getCurrentLocationSuccess = () => ({
  type: GET_CURRENT_LOCATION_SUCCESS,
  coords
});

export const GET_CURRENT_LOCATION_ERROR = 'GET_CURRENT_LOCATION_ERROR';
export const getCurrentLocationError = () => ({
  type: GET_CURRENT_LOCATION_ERROR,
  error
});


export const getCurrentLocation = () => dispatch => {

  return new Promise(function(res, rej) {
    const posOptions = {
      timeout: 6000
    };

    function success(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let coords = `${lat},${long}`;
      console.log(coords);
      return coords;
    }

    function error(err) {
      console.warn('Error' + err.code + ': ' + err.message);
    }

    navigator.geolocation.getCurrentPosition(success, error, posOptions);


  }.then((coords) => (
    dispatch(
      getCurrentLocationSuccess(coords)
    )
  )).catch((error) => (
    dispatch(
      getCurrentLocationError(error)
    )
  ))
};
