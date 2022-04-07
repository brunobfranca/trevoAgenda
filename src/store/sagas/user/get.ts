import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Types, Creators } from '~store/reducers';
import { getUniqueId } from 'react-native-device-info';
import axios from '~services/axios';

import moment from 'moment';

function* GetUserSaga() {
  try {
    const uniqueId = yield call(getUniqueId);

    const { data: response } = yield call(axios.get, '/user/me', {
      params: { uniqueId: __DEV__ ? null : uniqueId },
    });

    if (response.error) {
      throw new Error(response.error);
    }

    if (response.data.isBlocked) {
      yield put(Creators.logout.request({}));
      throw new Error('Usuário bloqueado.');
    }

    yield put(Creators.user.get.success({ response: response.data }));
  } catch (err) {
    yield put(Creators.user.get.failure({ error: err.message }));
  }
}

export default takeLatest(Types.GET_USER, GetUserSaga);
