import { Failed, Get, INITIAL_STATE, SuccessReplace } from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

export enum Types {
  GET_ORDERS_ACTIVIES = 'GET_ORDERS_ACTIVIES',
  GET_ORDERS_ACTIVIES_SUCCESS = 'GET_ORDERS_ACTIVIES_SUCCESS',
  GET_ORDERS_ACTIVIES_FAILED = 'GET_ORDERS_ACTIVIES_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_ORDERS_ACTIVIES,
  Types.GET_ORDERS_ACTIVIES_SUCCESS,
  Types.GET_ORDERS_ACTIVIES_FAILED
)<{}, { response: any }, { error: string }>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  {...INITIAL_STATE , data: []}
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, Failed);
