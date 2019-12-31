import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tripsReducer from './tripsReducer';

export default combineReducers({
  authReducer,
  tripsReducer,
});
