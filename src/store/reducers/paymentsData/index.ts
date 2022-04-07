import * as get from './get';


import reduceReducers from 'reduce-reducers';

export const Types = {
  ...get.Types,
};

export const Creators = {
  get: get.Creators,
};

export default reduceReducers(
  get.default,
);