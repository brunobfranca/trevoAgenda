import { Failed, Get, INITIAL_STATE, SuccessReplace } from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

export enum Types {
  GET_USER = 'GET_USER',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAILED = 'GET_USER_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_USER,
  Types.GET_USER_SUCCESS,
  Types.GET_USER_FAILED
)<{}, { response: any }, { error: string }>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, Failed);
