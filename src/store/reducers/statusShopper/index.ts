import * as get from './get';
import * as modify from './modify';

import reduceReducers from 'reduce-reducers';

export const Types = {
  ...get.Types,
  ...modify.Types,
};

export const Creators = {
  get: get.Creators,
  modify: modify.Creators,
};

export default reduceReducers(
  get.default,
  modify.default,
);