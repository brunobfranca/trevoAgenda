import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import Router from './router';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {DefaultTheme} from './themes';
import {persistor, store} from '~store';
import RNBootSplash from 'react-native-bootsplash';
import {Platform} from 'react-native';

const onBeforeLift = () => {
  // Waiting for the components to be mounted
  setTimeout(
    () => RNBootSplash.hide({duration: 250}),
    Platform.OS === 'ios' ? 0 : 200,
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={DefaultTheme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
