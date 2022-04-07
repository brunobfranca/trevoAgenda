import * as get from './get';
import * as create from './create';
import * as modify from './modify';

import { INITIAL_STATE } from '~reducers/helpers';
import reduceReducers from 'reduce-reducers';

export const Types = {
  ...get.Types,
  ...create.Types,
  ...modify.Types,
};

export const Creators = {
  get: get.Creators,
  create: create.Creators,
  modify: modify.Creators,
};

export default reduceReducers(
  INITIAL_STATE,
  get.default,
  modify.default,
  create.default
);
