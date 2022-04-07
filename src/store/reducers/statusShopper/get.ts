import produce from 'immer';
import { Failed, Get} from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

const INITIAL_STATE = {
  status: false,
  loading: false,
};

export enum Types {
  GET_STATUS = 'STATUS',
  GET_STATUS_SUCCESS = 'STATUS_SUCCESS',
  GET_STATUS_FAILED = 'STATUS_FAILED',
}

export const Creators = createAsyncAction(
  Types.GET_STATUS,
  Types.GET_STATUS_SUCCESS,
  Types.GET_STATUS_FAILED
)<{IdUsuario: string}, {}, {}>();

const getStatusShopper = (state = INITIAL_STATE, { payload }: any) =>
  produce(state, draft => {
    draft.loading = false;
    return draft;
  });
export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, getStatusShopper)
  .handleAction(Creators.failure, Failed);
