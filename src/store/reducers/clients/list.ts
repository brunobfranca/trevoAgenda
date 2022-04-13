import {Failed, Get, INITIAL_STATE, SuccessReplace} from '~reducers/helpers';
import {createAsyncAction, createReducer, ActionType} from 'typesafe-actions';

export enum Types {
  GET_CLIENT = 'GET_CLIENT',
  GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS',
  GET_CLIENT_FAILED = 'GET_CLIENT_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_CLIENT,
  Types.GET_CLIENT_SUCCESS,
  Types.GET_CLIENT_FAILED,
)<{}, {response: any}, {error: string}>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  {...INITIAL_STATE, data: []},
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, Failed);
