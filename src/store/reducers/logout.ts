import produce from 'immer';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

const INITIAL_STATE: any = {};

export enum Types {
  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILED = 'LOGOUT_FAILED',
}

export const Creators = createAsyncAction(
  Types.LOGOUT,
  Types.LOGOUT_SUCCESS,
  Types.LOGOUT_FAILED
)<{}, {}, {}>();

const Logout = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.login = {};
    draft.user = {};
  });

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.success, Logout)
  .handleAction(Creators.failure, Logout);
