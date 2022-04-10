import {Failed, Get, INITIAL_STATE, SuccessReplace} from '~reducers/helpers';
import {createAsyncAction, createReducer, ActionType} from 'typesafe-actions';

export enum Types {
  GET_SCHEDULES = 'GET_SCHEDULES',
  GET_SCHEDULES_SUCCESS = 'GET_SCHEDULES_SUCCESS',
  GET_SCHEDULES_FAILED = 'GET_SCHEDULES_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_SCHEDULES,
  Types.GET_SCHEDULES_SUCCESS,
  Types.GET_SCHEDULES_FAILED,
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
