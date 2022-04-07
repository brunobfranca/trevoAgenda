import axios from '~services/axios';
import {call} from 'redux-saga/effects';
import {getUniqueId} from 'react-native-device-info';

export default function* GetLogin({email, password}) {
  const uniqueId = yield call(getUniqueId);
  const {data: response} = yield call(
    axios.get,
    `/Autenticar/Autenticar?email=${email}&senha=${password}`,
  );

  if (response.error) {
    throw new Error(response.error);
  }
  return yield response.User;
}
