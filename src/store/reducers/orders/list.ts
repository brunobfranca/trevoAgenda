import {Failed, Get, INITIAL_STATE, SuccessReplace} from '~reducers/helpers';
import {createAsyncAction, createReducer, ActionType} from 'typesafe-actions';

export enum Types {
  GET_ORDERS = 'GET_ORDERS',
  GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS',
  GET_ORDERS_FAILED = 'GET_ORDERS_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_ORDERS,
  Types.GET_ORDERS_SUCCESS,
  Types.GET_ORDERS_FAILED,
)<
  {page: number; IdUsuario: String; dataInicial?: Date; dataFinal?: Date},
  {response: any},
  {error: string}
>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  {...INITIAL_STATE, data: []},
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, Failed);
