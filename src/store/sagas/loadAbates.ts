import {takeLatest, put} from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import {Creators} from '~store/reducers/';
import moment from 'moment';

export function* loadAbates() {
  try {
    const response = database().ref('abate').orderByChild('id').once('value');
    const date = moment().format('DD-MM-YYYY');
    const data = [];
    const res = yield response;
    res.forEach(r => {
      data.push(r.toJSON());
    });
    yield put(
      Creators.abates.list.success({response: data.filter(a => a.id > date)}),
    );
  } catch (error) {
    console.log(error);
  }
}
export default takeLatest<any>('loadAbates', loadAbates);
