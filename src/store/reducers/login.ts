import {Failed, Get, INITIAL_STATE, SuccessReplace} from '~reducers/helpers';
import {createAsyncAction, createReducer, ActionType} from 'typesafe-actions';

export enum Types {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILED = 'LOGIN_FAILED',
}

export type Providers = 'email';

export const Creators = createAsyncAction(
  Types.LOGIN,
  Types.LOGIN_SUCCESS,
  Types.LOGIN_FAILED,
)<
  {
    data?: {
      inscricao: string;
      password: string;
    };
  },
  {response: any},
  {error: string}
>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE,
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, Failed);
