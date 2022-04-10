import * as login from './login';
import * as user from './user';
import * as logout from './logout';
import * as config from './config';
import * as abates from './abates';
import * as schedules from './schedules';
import * as schedulesAdm from './schedulesAdm';
import {combineReducers} from 'redux';
import {StateType} from 'typesafe-actions';
import reduceReducers from 'reduce-reducers';

export const Types = {
  ...login.Types,
  ...user.Types,
  ...logout.Types,
  ...config.Types,
  ...abates.Types,
  ...schedules.Types,
  ...schedulesAdm.Types,
};

export const Creators = {
  config: config.Creators,
  logout: logout.Creators,
  user: user.Creators,
  login: login.Creators,
  abates: abates.Creators,
  schedules: schedules.Creators,
  schedulesAdm: schedulesAdm.Creators,
};

const Reducers = combineReducers({
  login: login.default,
  user: user.default,
  config: config.default,
  abates: abates.default,
  schedulesAdm: schedulesAdm.default,
});

export type RootReducer = StateType<typeof Reducers>;

export default reduceReducers({}, Reducers, logout.default);
