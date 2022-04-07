import url from 'url';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const {hostname: host} = url.parse(NativeModules.SourceCode.scriptURL);

const reactotron = Reactotron.configure({
  name: 'trevoAgenda',
  ...(__DEV__ ? {host: '192.168.1.91'} : {}), // : '192.168.0.17'
})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin({}));

if (__DEV__) {
  reactotron.connect();
  reactotron.clear();
}

export default reactotron;
