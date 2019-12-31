import {
  GET_TRIPS_SUCCESS, GET_TRIPS_ERROR,
} from './types';
import backendCall from '../../helpers/backendCall';

const tripsType = (type, payload) => ({
  type,
  payload,
});

export const getTripsAction = () => (dispatch) => backendCall.get('/trips')
  .then((response) => {
    dispatch(tripsType(GET_TRIPS_SUCCESS, response.data));
  })
  .catch((err) => {
    dispatch(tripsType(GET_TRIPS_ERROR, err.response.data));
  });
