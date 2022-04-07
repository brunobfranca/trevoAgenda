import produce from 'immer';
import {Failed, Get} from '~reducers/helpers';
import {createAsyncAction, createReducer, ActionType} from 'typesafe-actions';

const INITIAL_STATE = {
  total: 0,
};

export enum Types {
  TOTAL = 'TOTAL',
  TOTAL_SUCCESS = 'TOTAL_SUCCESS',
  TOTAL_FAILED = 'TOTAL_FAILED',
}

export const Creators = createAsyncAction(
  Types.TOTAL,
  Types.TOTAL_SUCCESS,
  Types.TOTAL_FAILED,
)<{IdUsuario: string}, {}, {}>();

const setPartialTotal = (state = INITIAL_STATE, {payload}: any) =>
  produce(state, draft => {
    draft.total = payload.response;
    return draft;
  });
export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE,
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, setPartialTotal)
  .handleAction(Creators.failure, Failed);
