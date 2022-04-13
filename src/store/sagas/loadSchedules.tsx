import {takeLatest, put, select} from 'redux-saga/effects';
import {getUser} from '~store/selectors/';
import database from '@react-native-firebase/database';
import {Creators} from '~store/reducers/';

export function* loadSchedules() {
  try {
    const response = database().ref('schedules').once('value');
    const data = [];
    const res = yield response;
    res.forEach(r => {
      data.push(r.toJSON());
    });
    yield put(
      Creators.schedules.list.success({
        response: data,
      }),
    );
  } catch (error) {
    console.log(error);
  }
}
export default takeLatest<any>('loadSchedules', loadSchedules);
