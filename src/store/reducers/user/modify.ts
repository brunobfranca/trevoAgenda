import { INITIAL_STATE, SuccessReplace } from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

export enum Types {
  PUT_USER = 'PUT_USER',
  PUT_USER_SUCCESS = 'PUT_USER_SUCCESS',
  PUT_USER_FAILED = 'PUT_USER_FAILED',
}

export const Creators = createAsyncAction(
  Types.PUT_USER,
  Types.PUT_USER_SUCCESS,
  Types.PUT_USER_FAILED
)<{ newUser: any }, { response: any }, { response: string }>();

export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.success, SuccessReplace)
  .handleAction(Creators.failure, SuccessReplace);
