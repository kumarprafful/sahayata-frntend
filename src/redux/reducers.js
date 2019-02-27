import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import lang from './language/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  lang
});

export default reducers;
