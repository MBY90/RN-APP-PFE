import { combineReducers } from 'redux';
import errorReducer from './errorreducer';
import authReducer from './authreducer';


export default combineReducers({
  error: errorReducer,
  auth: authReducer
});
