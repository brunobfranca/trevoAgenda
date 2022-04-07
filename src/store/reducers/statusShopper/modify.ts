import produce from 'immer';
import { Failed, Get} from '~reducers/helpers';
import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';

const INITIAL_STATE = {
  status: false,
  loading: true,
};

export enum Types {
  SET_STATUS = 'STATUS',
  SET_STATUS_SUCCESS = 'STATUS_SUCCESS',
  SET_STATUS_FAILED = 'STATUS_FAILED',
}

export const Creators = createAsyncAction(
  Types.SET_STATUS,
  Types.SET_STATUS_SUCCESS,
  Types.SET_STATUS_FAILED
)<{status: boolean, idUsuario: string}, {}, {}>();

const setStatusShopper = (state = INITIAL_STATE, { payload }: any) =>
  produce(state, draft => {
    draft.status = payload.response;
    draft.loading = false;
    return draft;
  });
export default createReducer<typeof INITIAL_STATE, ActionType<typeof Creators>>(
  INITIAL_STATE
)
  .handleAction(Creators.request, Get)
  .handleAction(Creators.success, setStatusShopper)
  .handleAction(Creators.failure, Failed);
