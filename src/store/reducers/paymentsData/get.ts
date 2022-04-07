import { Failed, Get, INITIAL_STATE, SuccessReplace } from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

export enum Types {
  GET_PAYMENTDATA = 'GET_PAYMENTDATA',
  GET_PAYMENTDATA_SUCCESS = 'GET_PAYMENTDATA_SUCCESS',
  GET_PAYMENTDATA_FAILED = 'GET_PAYMENTDATA_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_PAYMENTDATA,
  Types.GET_PAYMENTDATA_SUCCESS,
  Types.GET_PAYMENTDATA_FAILED
)<{idPedido: number, posicao: number}, { response: any }, { error: string }>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, Failed);
