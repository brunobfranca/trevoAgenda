import {Creators, Types} from '~store/reducers';
import {call, put, takeLatest, select} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';
import axios from '~services/axios';
// import * as Toast from '~services/toast';

type IModifyUserSaga = ActionType<typeof Creators.user.modify.request>;

function* PutUserSaga({payload: {newUser}}: IModifyUserSaga) {
  const oldUser = yield select(state => state.user.data);
  const mergedUser = {...oldUser, ...newUser};
  try {
    // Optimistic UI
    yield put(Creators.user.modify.success({response: mergedUser}));
    // const { data: response } = yield call(axios.put, `/user`, mergedUser);

    // if (response.error) throw new Error(response.error);
  } catch (err) {
    // Toast.error({
    //   message: err?.message,
    // });
    yield put(Creators.user.modify.failure({response: oldUser}));
  }
}

export default takeLatest(Types.PUT_USER, PutUserSaga);
