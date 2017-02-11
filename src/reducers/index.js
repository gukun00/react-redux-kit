import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';

import reducersGenerate from './reducersGenerate';

import {
  USER,
  MENU,
} from './../constants/actionTypes';
import initialState from './initialState';

const users = reducersGenerate(USER, initialState.users);
const menus = reducersGenerate(MENU, initialState.menus);

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  users,
  menus,
});

export default rootReducer;
