// Convert Location to Lat/Long
export const FETCH_LOCATION_COORDS_SUCCESS = 'FETCH_LOCATION_COORDS_SUCCESS';
export const fetchLocationCoordsSuccess = (coords) => ({
  type: FETCH_LOCATION_COORDS_SUCCESS,
  coords
});

export const FETCH_LOCATION_COORDS_ERROR = 'FETCH_LOCATION_COORDS_ERROR';
export const fetchLocationCoordsError = (error) => ({
  type: FETCH_LOCATION_COORDS_ERROR,
  error
});

export const fetchLocationCoords = searchQuery => dispatch => {
  const address = searchQuery;
  return new Promise((res, rej) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      console.log('!!!!!!!!', results, status);
        if (status === 'OK') {
          const lat = results[0].geometry.location.lat();
          const long = results[0].geometry.location.lng();
          const coords = `${lat},${long}`;
          console.log(lat, long, coords);
          res(coords);
        } else {
          const error = 'Sorry! We could not geocode your location';
          rej(error);
        }
    });
  }).then((coords) => (
    dispatch(
      fetchLocationCoordsSuccess(coords)
    )
  )).catch((error) => (
    dispatch(
      fetchLocationCoordsError(error)
    )
  ));
};


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
  }).then((coords) => (
    dispatch(
      getCurrentLocationSuccess(coords)
    )
  )).catch((error) => (
    dispatch(
      getCurrentLocationError(error)
    )
  ));
};
