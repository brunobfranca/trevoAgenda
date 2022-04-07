import { Failed, Get, INITIAL_STATE, SuccessAddOrder } from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

export enum Types {
  ADD_ORDER_ACTIVE = 'ADD_ORDER_ACTIVE',
  ADD_ORDER_ACTIVE_SUCCESS = 'ADD_ORDER_ACTIVE_SUCCESS',
  ADD_ORDER_ACTIVE_FAILED = 'ADD_ORDER_ACTIVE_FAILED',
}

export const Creators = createAsyncAction(
  Types.ADD_ORDER_ACTIVE,
  Types.ADD_ORDER_ACTIVE_SUCCESS,
  Types.ADD_ORDER_ACTIVE_FAILED
)<{}, { response: any; request: any }, { error: string }>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessAddOrder)
  .handleAction(Creators.failure, Failed);
