import { combineReducers } from 'redux';
import authReducer from './auth';
import themeReducer from './theme';
import notificationReducer from './notification';

export default combineReducers({
  auth: authReducer,
  theme: themeReducer,
  notifications: notificationReducer
});
