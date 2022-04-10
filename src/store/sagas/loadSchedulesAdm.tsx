import {takeLatest, put, select} from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import {Creators} from '~store/reducers/';

export function* loadSchedulesAdm() {
  try {
    const response = database()
      .ref('schedules')
      .orderByChild('id')
      .once('value');
    const data = [];
    const res = yield response;
    res.forEach(r => {
      data.push(r.toJSON());
    });
    yield put(
      Creators.schedulesAdm.list.success({
        response: data,
      }),
    );
  } catch (error) {
    console.log(error);
  }
}
export default takeLatest<any>('loadSchedulesAdm', loadSchedulesAdm);
