import { Failed, Get, INITIAL_STATE, SuccessAddOrder } from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

export enum Types {
  POST_ORDER = 'POST_ORDER',
  POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS',
  POST_ORDER_FAILED = 'POST_ORDER_FAILED',
}

export const Creators = createAsyncAction(
  Types.POST_ORDER,
  Types.POST_ORDER_SUCCESS,
  Types.POST_ORDER_FAILED
)<{}, { response: any; request: any }, { error: string }>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessAddOrder)
  .handleAction(Creators.failure, Failed);
