import {takeLatest, put} from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import {Creators, Types} from '~store/reducers/';

export function* loadClients() {
  try {
    const response = database().ref('providers').once('value');
    const data = [];
    const res = yield response;
    res.forEach(r => {
      data.push(r.toJSON());
    });
    yield put(
      Creators.clients.list.success({
        response: data,
      }),
    );
  } catch (error) {
    yield put(Creators.clients.list.failure({error: error}));
  }
}
export default takeLatest<any>(Types.GET_CLIENT, loadClients);
