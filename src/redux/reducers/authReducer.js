import {
  SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR,
} from '../actions/types';

const initialState = {
  data: null,
  dataError: null,
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        dataError: null,
        status: 'success',
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        dataError: action.payload,
        data: null,
        status: 'error',
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        dataError: null,
        status: 'success',
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        dataError: action.payload,
        data: null,
        status: 'error',
      };
    default:
      return {
        ...state,
      };
  }
};
