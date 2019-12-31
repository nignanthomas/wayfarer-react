import tripsReducer from '../../redux/reducers/tripsReducer';
import { GET_TRIPS_SUCCESS, GET_TRIPS_ERROR } from '../../redux/actions/types';

describe('Signup Reducer Test Suite', () => {
  it('Should return default state', () => {
    const newState = tripsReducer(undefined, {});
    expect(newState).toEqual({
      "tripsData": null,
      "tripsDataError": null,
      "tripsStatus": '',
    });
  });

  it('Should return GET_TRIPS_SUCCESS', () => {
    const action = {
      type: GET_TRIPS_SUCCESS,
      payload: {
        status: 201,
        data: {
          message: 'Successfully Registered!'
        }
      }
    }
    const returnedSate = tripsReducer(undefined, action);
    expect(returnedSate).toEqual({
      "tripsData": action.payload,
      "tripsDataError": null,
      "tripsStatus": 'success',
    })
  });

  it('Should return GET_TRIPS_ERROR', () => {
    const action = {
      type: GET_TRIPS_ERROR,
      payload: {
        status: 400,
        data: {
          message: 'Ooops!!!'
        }
      }
    }
    const returnedSate = tripsReducer(undefined, action);
    expect(returnedSate).toEqual({
      "tripsData": null,
      "tripsDataError": action.payload,
      "tripsStatus": 'error',
    });
  });
});