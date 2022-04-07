import * as login from './login';
import * as user from './user';
import * as logout from './logout';
import * as config from './config';
import {combineReducers} from 'redux';
import {StateType} from 'typesafe-actions';
import reduceReducers from 'reduce-reducers';

export const Types = {
  ...login.Types,
  ...user.Types,
  ...logout.Types,
  ...config.Types,
};

export const Creators = {
  config: config.Creators,
  logout: logout.Creators,
  user: user.Creators,
  login: login.Creators,
};

const Reducers = combineReducers({
  login: login.default,
  user: user.default,
  config: config.default,
});

export type RootReducer = StateType<typeof Reducers>;

export default reduceReducers({}, Reducers, logout.default);
