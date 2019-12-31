import {
  SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR,
} from './types';
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

export const signinAction = (userData) => (dispatch) => backendCall.post('/auth/signin', userData)
  .then((response) => {
    dispatch(authType(SIGNIN_SUCCESS, response.data));
  })
  .catch((err) => {
    dispatch(authType(SIGNIN_ERROR, err.response.data));
  });
