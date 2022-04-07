import produce from 'immer';

export const INITIAL_STATE = {
  data: null,
  error: '',
  loading: false,
};

export const Get = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.error = '';
    draft.loading = true;
    return draft;
  });

export const Failed = (state = INITIAL_STATE, { payload }: any) =>
  produce(state, draft => {
    draft.error = payload.error;
    draft.loading = false;
    return draft;
  });

export const SuccessReplace = (state = INITIAL_STATE, { payload }: any) =>
  produce(state, draft => {
    draft.data = payload.response;
    draft.error = '';
    draft.loading = false;
    return draft;
  });

export const SuccessAdd = (state = INITIAL_STATE, { payload }: any) =>
  produce(state, draft => {
    draft.data = [...draft.data, payload.response];
    draft.error = '';
    draft.loading = false;
    return draft;
  });

  export const SuccessAddOrder = (state = INITIAL_STATE, { payload }: any) =>
  produce(state, draft => {
    draft.data = [payload.response, ...draft.data,];
    draft.error = '';
    draft.loading = false;
    return draft;
  });

export const SuccessDelete = (state = INITIAL_STATE, { payload }: any) =>
  produce(state, draft => {
    draft.error = '';
    draft.loading = false;
    const index = draft.data.findIndex(item => item.id === payload.response.id);
    draft.data.splice(index, 1);
    return draft;
  });
