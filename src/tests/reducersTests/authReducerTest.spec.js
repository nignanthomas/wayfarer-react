import authReducer from '../../redux/reducers/authReducer';
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../redux/actions/types';

describe('Signup Reducer Test Suite', () => {
  it('Should return default state', () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual({
      "data": null,
      "dataError": null,
      "status": '',
    });
  });

  it('Should return SIGNUP_SUCCESS', () => {
    const action = {
      type: SIGNUP_SUCCESS,
      payload: {
        status: 201,
        data: {
          message: 'Successfully Registered!'
        }
      }
    }
    const returnedSate = authReducer(undefined, action);
    expect(returnedSate).toEqual({
      "dataError": null,
      "data": action.payload,
      "status": 'success',
    })
  });

  it('Should return SIGNUP_ERROR', () => {
    const action = {
      type: SIGNUP_ERROR,
      payload: {
        status: 400,
        data: {
          message: 'Ooops!!!'
        }
      }
    }
    const returnedSate = authReducer(undefined, action);
    expect(returnedSate).toEqual({
      "data": null,
      "dataError": action.payload,
      "status": 'error',
    });
  });
});