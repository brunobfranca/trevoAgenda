import { action, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';

const INITIAL_STATE = {
  recentSearches: [],
  storeRated: false,
  dislog: false,
};

export enum Types {
  UPDATE_RECENT_SEARCHES = 'UPDATE_RECENT_SEARCHES',
  RATE_STORE = 'RATE_STORE',
  SET_DISLOG = 'SET_DISLOG',
  GET_HOME = 'GET_HOME',
}

export const Creators = {
  updateRecentSearches: ({ query }: { query: string }) =>
    action(Types.UPDATE_RECENT_SEARCHES, { query }),
  rateStore: () => action(Types.RATE_STORE),
  setDislog: () => action(Types.SET_DISLOG),
  getHome: () => action(Types.GET_HOME),
};

const UpdateRecentSearches = (
  state = INITIAL_STATE,
  { payload: { query } }: ActionType<typeof Creators.updateRecentSearches>
) =>
  produce(state, draft => {
    draft.recentSearches = draft.recentSearches.filter(item => item !== query);
    draft.recentSearches.splice(10);
    draft.recentSearches.unshift(query);
    return draft;
  });

const RateStore = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.storeRated = true;
    return draft;
  });

const setDislog = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.dislog = true;
    return draft;
  });

export default createReducer<typeof INITIAL_STATE>(INITIAL_STATE)
  .handleAction(Types.UPDATE_RECENT_SEARCHES, UpdateRecentSearches)
  .handleAction(Types.RATE_STORE, RateStore)
  .handleAction(Types.SET_DISLOG, setDislog);
