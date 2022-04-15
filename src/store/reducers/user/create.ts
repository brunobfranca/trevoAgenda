import {Failed, Get, INITIAL_STATE, SuccessReplace} from '~reducers/helpers';
import {createAsyncAction, createReducer, ActionType} from 'typesafe-actions';

export enum Types {
  POST_USER = 'POST_USER',
  POST_USER_SUCCESS = 'POST_USER_SUCCESS',
  POST_USER_FAILED = 'POST_USER_FAILED',
}

export const Creators = createAsyncAction(
  Types.POST_USER,
  Types.POST_USER_SUCCESS,
  Types.POST_USER_FAILED,
)<
  {data: any; navigation: any; edit: boolean},
  {response: any},
  {error: string}
>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE,
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, Failed);
