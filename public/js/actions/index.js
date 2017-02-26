// Convert Location to Lat/Long
export const FETCH_LOCATION_COORDS_SUCCESS = 'FETCH_LOCATION_COORDS_SUCCESS';
export const fetchGeoSuccess = (locationInput, coords) => ({
  type: FETCH_LOCATION_COORDS_SUCCESS,
  locationInput,
  coords
});

export const FETCH_LOCATION_COORDS_ERROR = 'FETCH_LOCATION_COORDS_ERROR';
export const fetchGeoError = (locationInput, coords, error) => ({
  type: FETCH_LOCATION_COORDS_ERROR,
  locationInput,
  coords,
  error
});

// Find Current Location
export const GET_CURRENT_LOCATION_SUCCESS = 'GET_CURRENT_LOCATION_SUCCESS';
export const getCurrentLocationSuccess = (coords) => ({
  type: GET_CURRENT_LOCATION_SUCCESS,
  coords
});

export const GET_CURRENT_LOCATION_ERROR = 'GET_CURRENT_LOCATION_ERROR';
export const getCurrentLocationError = (error) => ({
  type: GET_CURRENT_LOCATION_ERROR,
  error
});

export const getCurrentLocation = () => dispatch => {
  const positionOptions = {
    timeout: 6000
  };
  return new Promise((res, rej) => {
    function success(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const coords = `${lat},${long}`;
      console.log(coords);
      res(coords);
    }
    function error(err) {
      console.warn(`Error ${err.code}: ${err.message}`);
      rej(err);
    }
    navigator.geolocation.getCurrentPosition(success, error, positionOptions);
  })
  .then((coords) => (
    dispatch(
      getCurrentLocationSuccess(coords)
    )
  )).catch((error) => (
    dispatch(
      getCurrentLocationError(error)
    )
  ));
};
