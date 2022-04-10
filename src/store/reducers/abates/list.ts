import {Failed, Get, INITIAL_STATE, SuccessReplace} from '~reducers/helpers';
import {createAsyncAction, createReducer, ActionType} from 'typesafe-actions';

export enum Types {
  GET_ABATES = 'GET_ABATES',
  GET_ABATES_SUCCESS = 'GET_ABATES_SUCCESS',
  GET_ABATES_FAILED = 'GET_ABATES_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_ABATES,
  Types.GET_ABATES_SUCCESS,
  Types.GET_ABATES_FAILED,
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
