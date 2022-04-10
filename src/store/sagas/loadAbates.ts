import {takeLatest, put} from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import {Creators} from '~store/reducers/';

export function* loadAbates() {
  try {
    const response = database().ref('abate').once('value');
    const data = [];
    const res = yield response;
    res.forEach(r => {
      data.push(r.toJSON());
    });
    yield put(Creators.abates.list.success({response: data}));
  } catch (error) {
    console.log(error);
  }
}
export default takeLatest<any>('loadAbates', loadAbates);
