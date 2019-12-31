import {
  GET_TRIPS_SUCCESS, GET_TRIPS_ERROR,
} from '../actions/types';

const initialState = {
  tripsData: null,
  tripsDataError: null,
  tripsStatus: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS_SUCCESS:
      return {
        ...state,
        tripsData: action.payload,
        tripsDataError: null,
        tripsStatus: 'success',
      };
    case GET_TRIPS_ERROR:
      return {
        ...state,
        tripsDataError: action.payload,
        tripsData: null,
        tripsStatus: 'error',
      };
    default:
      return {
        ...state,
      };
  }
};
