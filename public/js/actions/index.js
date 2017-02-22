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
export const FETCH_CURRENT_LOCATION_SUCCESS = 'FETCH_CURRENT_LOCATION_SUCCESS';
export const fetchCurrentLocationSuccess = () => ({
  type: FETCH_CURRENT_LOCATION_SUCCESS,
  coords
});

export const FETCH_CURRENT_LOCATION_ERROR = 'FETCH_CURRENT_LOCATION_ERROR';
export const fetchCurrentLocationError = () => ({
  type: FETCH_CURRENT_LOCATION_ERROR,
  coords,
  error
});
