import * as actions from '../actions/index';

const initialState = {
  locationCoords: null,
  warningState: false,
  warningMessage: null
};

export const locationReducer = (state = initialState, action) => {
  if (action.type === actions.GET_CURRENT_LOCATION_SUCCESS) {
    const coords = action.coords;
    const modState = Object.assign({}, state, {
      locationCoords: coords
    });
    return modState;
  } else if (action.type === actions.GET_CURRENT_LOCATION_ERROR) {
    const warning = action.error;
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning
    });
    return modState;
  }

  return state;
};
