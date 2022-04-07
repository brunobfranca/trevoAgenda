import * as list from './list';
import * as create from './create';

import { INITIAL_STATE } from '~reducers/helpers';
import reduceReducers from 'reduce-reducers';

export const Types = {
  ...list.Types,
  ...create.Types,
};

export const Creators = {
  list: list.Creators,
  create: create.Creators,
};

export default reduceReducers(INITIAL_STATE, list.default, create.default);
