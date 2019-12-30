import { SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';
import backendCall from '../../helpers/backendCall';
// import 'regenerator-runtime';

const authType = (type, payload) => ({
  type,
  payload,
});

// const host = window.location.origin;

export const signupAction = (userData) => (dispatch) => backendCall.post('/auth/signup', userData)
  .then((response) => {
    dispatch(authType(SIGNUP_SUCCESS, response.data));
  })
  .catch((err) => {
    dispatch(authType(SIGNUP_ERROR, err.response.data));
  });
